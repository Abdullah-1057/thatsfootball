import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getPostBySlug, getAllPosts, getRelatedPosts } from "@/lib/content"
import { mdxComponents } from "@/components/mdx/mdx-components"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ShareButtons } from "@/components/blog/share-buttons"
import { RelatedPosts } from "@/components/blog/related-posts"
import { Badge } from "@/components/ui/badge"
import { Clock, Calendar, Eye, User } from "lucide-react"

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found - That's Football",
    }
  }

  const siteURL = process.env.NEXT_PUBLIC_SITE_URL || "https://thats-football.vercel.app"

  return {
    title: `${post.title} - That's Football`,
    description: post.excerpt,
    authors: [{ name: "Mark Goldbridge" }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: ["Mark Goldbridge"],
      images: [
        {
          url: post.image ? `${siteURL}${post.image}` : `${siteURL}/images/thats-football-banner.jpg`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image ? `${siteURL}${post.image}` : `${siteURL}/images/thats-football-banner.jpg`],
    },
  }
}

export default function BlogPost({ params }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category, 3)
  const publishedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      "@type": "Person",
      name: "Mark Goldbridge",
    },
    publisher: {
      "@type": "Organization",
      name: "That's Football",
      logo: {
        "@type": "ImageObject",
        url: "/images/thats-football-banner.jpg",
      },
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="min-h-screen">
        <Navigation />

        <article className="pt-24 pb-12">
          {/* Hero Section */}
          <div className="relative h-96 md:h-[500px] overflow-hidden">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-4">
                  <Badge
                    variant="secondary"
                    className={`${
                      post.category === "Opinion"
                        ? "bg-accent/20 text-accent"
                        : post.category === "Analysis"
                          ? "bg-primary/20 text-primary"
                          : "bg-secondary/20 text-secondary"
                    }`}
                  >
                    {post.category}
                  </Badge>
                  {post.featured && <Badge className="bg-primary text-primary-foreground">Featured</Badge>}
                </div>

                <h1 className="font-sans font-bold text-3xl md:text-5xl text-foreground mb-4 leading-tight">
                  {post.title}
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">{post.excerpt}</p>

                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>Mark Goldbridge</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{publishedDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readingTime?.text || "5 min read"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    <span>{post.views || "0"} views</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="prose prose-lg max-w-none">
              <MDXRemote source={post.content} components={mdxComponents} />
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="font-sans font-bold text-lg text-foreground mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="hover:bg-primary/10 transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Share Buttons */}
            <div className="mt-8 pt-8 border-t border-border">
              <ShareButtons title={post.title} url={`/posts/${post.slug}`} excerpt={post.excerpt} />
            </div>

            {/* Related Posts */}
            <RelatedPosts posts={relatedPosts} />
          </div>
        </article>

        <Footer />
      </main>
    </>
  )
}
