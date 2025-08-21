import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Info, AlertTriangle, CheckCircle } from "lucide-react"

export const mdxComponents = {
  h1: ({ children }) => (
    <h1 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-6 mt-8 first:mt-0">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-sans font-bold text-2xl md:text-3xl text-foreground mb-4 mt-8">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-sans font-bold text-xl md:text-2xl text-foreground mb-3 mt-6">{children}</h3>
  ),
  p: ({ children }) => <p className="text-foreground leading-relaxed mb-4">{children}</p>,
  ul: ({ children }) => <ul className="list-disc list-inside text-foreground mb-4 space-y-1">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal list-inside text-foreground mb-4 space-y-1">{children}</ol>,
  li: ({ children }) => <li className="text-foreground">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mb-4 bg-muted/30 py-2">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="bg-muted px-2 py-1 rounded text-sm font-mono text-foreground">{children}</code>
  ),
  pre: ({ children }) => <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4 text-sm">{children}</pre>,
  img: ({ src, alt }) => (
    <img src={src || "/placeholder.svg"} alt={alt} className="w-full rounded-lg mb-4 stadium-glow" />
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-primary hover:text-primary/80 underline transition-colors"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),

  // Custom components
  InfoBox: ({ children, type = "info" }) => {
    const icons = {
      info: Info,
      warning: AlertTriangle,
      success: CheckCircle,
    }
    const Icon = icons[type]

    return (
      <Alert className="mb-4">
        <Icon className="h-4 w-4" />
        <AlertDescription>{children}</AlertDescription>
      </Alert>
    )
  },

  HighlightBox: ({ children, title }) => (
    <Card className="mb-4 bg-primary/10 border-primary/30">
      <CardContent className="p-4">
        {title && <h4 className="font-sans font-bold text-lg text-foreground mb-2">{title}</h4>}
        {children}
      </CardContent>
    </Card>
  ),

  TacticalNote: ({ children }) => (
    <div className="bg-accent/10 border-l-4 border-accent p-4 mb-4 rounded-r-lg">
      <div className="flex items-start gap-2">
        <Badge variant="secondary" className="bg-accent/20 text-accent text-xs">
          Tactical
        </Badge>
        <div className="text-sm text-foreground">{children}</div>
      </div>
    </div>
  ),
}
