import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function GithubSection() {
  return (
    <>
      <div className="w-full h-px bg-gray-200" />

      <section id="github" className="min-h-[60vh] flex items-center justify-center px-6 py-20 animate-gradient-green">
        <div className="max-w-4xl mx-auto w-full text-center bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-balance font-[family-name:var(--font-title)]">
            GitHub
          </h2>
          <div className="flex flex-col items-center gap-8">
            <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
              <Github className="w-16 h-16 text-primary" />
            </div>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-sans"
            >
              <a
                href="https://github.com/juunghyun"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                Visit GitHub Profile
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
