import { Github, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ProjectsSection() {
  const projects = [
    {
      title: "FC Scouter Web Service",
      description:
        "FC ONLINE 유저들을 위한 선수 정보 검색 및 데이터 분석 웹 서비스. 선수의 상세 스탯, 실시간 시세, 팀 경력 등 다양한 정보를 API로 제공하고, 사용자 편의 기능을 통해 상호작용할 수 있습니다.",
      github: "https://github.com/juunghyun/be-fc-online",
      swagger: "https://be-fc-scouter-app-djgdgqcgeedhe4fs.southeastasia-01.azurewebsites.net/swagger-ui/index.html#/",
      techStack: ["Spring Boot", "Spring Security", "JWT", "MySQL", "JPA"],
    },
  ]

  return (
    <>
      <div className="w-full h-px bg-gray-200" />

      <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20 animate-gradient-blue">
        <div className="max-w-6xl mx-auto w-full bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-balance font-[family-name:var(--font-title)]">
            Projects
          </h2>
          <div className="grid grid-cols-1 max-w-2xl mx-auto gap-8">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="border-border hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <CardHeader>
                  <CardTitle className="text-2xl text-balance font-sans">{project.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed text-pretty font-sans">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 font-sans">
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                    <a
                      href={project.swagger}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Swagger API
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
