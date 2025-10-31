import { Github, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// 1. 프로젝트 타입을 위한 interface 정의
interface Project {
  title: string;
  description: string;
  github: string;
  techStack: string[];
  swagger?: string; // swagger는 선택적 속성 (있을 수도 없을 수도 있음)
  site?: string;    // site는 선택적 속성 (있을 수도 없을 수도 있음)
}

export function ProjectsSection() {
  // 2. projects 배열에 위에서 정의한 Project[] 타입을 지정
  const projects: Project[] = [
    {
      title: "FC Scouter Web Service",
      description:
          "FC ONLINE 유저들을 위한 선수 정보 검색 및 데이터 분석 웹 서비스. 선수의 상세 스탯, 실시간 시세, 팀 경력 등 다양한 정보를 API로 제공하고, 사용자 편의 기능을 통해 상호작용할 수 있습니다.",
      github: "https://github.com/juunghyun/be-fc-online",
      swagger: "https://be-fc-scouter-app-djgdgqcgeedhe4fs.southeastasia-01.azurewebsites.net/swagger-ui/index.html#/",
      techStack: ["Spring Boot", "Spring Security", "JWT", "MySQL", "JPA"],
    },
    // 새로 추가된 '눈ON' 프로젝트
    {
      title: "눈ON (SnowNow)",
      description:
          "공공데이터포털의 '초단기실황' API를 활용하여 실시간 눈(강설) 정보를 감지하는 백엔드 서비스. Spring Boot, MySQL, JPA, Redis, Elasticsearch를 기반으로 구축되었습니다.",
      github: "https://github.com/juunghyun/snow-on-be",
      site: "https://snownow.info/", // Live 사이트 주소
      techStack: ["Spring Boot", "MySQL", "JPA", "Redis", "Elasticsearch"],
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
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8">
              {projects.map((project) => (
                  <Card
                      key={project.title}
                      className="border-border hover:border-primary/50 transition-all hover:shadow-lg flex flex-col"
                  >
                    <CardHeader>
                      <CardTitle className="text-2xl text-balance font-sans">{project.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed text-pretty font-sans">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 font-sans flex-grow flex flex-col justify-between">
                      {/* 링크 섹션 */}
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

                        {/* 3. 이제 project.swagger와 project.site가 'Project' 타입에
                         선택적으로 정의되어 있으므로 에러가 발생하지 않습니다. */}
                        {project.swagger && (
                            <a
                                href={project.swagger}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Swagger API
                            </a>
                        )}

                        {project.site && (
                            <a
                                href={project.site}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Live Site
                            </a>
                        )}
                      </div>

                      {/* 기술 스택 섹션 */}
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

