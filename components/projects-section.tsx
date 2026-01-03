import { Github, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// 1. Project 인터페이스에 isExpired(만료 여부) 속성 추가
interface Project {
  title: string;
  description: string;
  github: string;
  techStack: string[];
  swagger?: string;
  site?: string;
  isExpired?: boolean; // 서버 종료 여부
}

export function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "FC Scouter Web Service",
      description:
          "FC ONLINE 유저들을 위한 선수 정보 검색 및 데이터 분석 웹 서비스. 선수의 상세 스탯, 실시간 시세, 팀 경력 등 다양한 정보를 API로 제공하고, 사용자 편의 기능을 통해 상호작용할 수 있습니다.",
      github: "https://github.com/juunghyun/be-fc-online",
      swagger: "https://be-fc-scouter-app-djgdgqcgeedhe4fs.southeastasia-01.azurewebsites.net/swagger-ui/index.html#/",
      techStack: ["Spring Boot", "Spring Security", "JWT", "MySQL", "JPA"],
      isExpired: true, // 서버 종료 상태로 설정
    },
    {
      title: "눈ON (SnowNow)",
      description:
          "공공데이터포털의 '초단기실황' API를 활용하여 실시간 눈(강설) 정보를 감지하는 백엔드 서비스. Spring Boot, MySQL, JPA, Redis, Elasticsearch를 기반으로 구축되었습니다.",
      github: "https://github.com/juunghyun/snow-on-be",
      site: "https://snownow.info/",
      techStack: ["Spring Boot", "MySQL", "JPA", "Redis", "Elasticsearch"],
      isExpired: true, // 서버 종료 상태로 설정
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
                      <CardTitle className="text-2xl text-balance font-sans">
                        {project.title}
                        {project.isExpired && (
                            <span className="ml-2 text-sm font-normal text-red-500 bg-red-50 px-2 py-0.5 rounded border border-red-100">
                            Service Ended
                          </span>
                        )}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed text-pretty font-sans">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 font-sans flex-grow flex flex-col justify-between">
                      <div className="flex items-center gap-4">
                        {/* GitHub은 서버와 무관하므로 유지하되, 필요시 똑같이 처리 가능 */}
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          GitHub
                        </a>

                        {/* Swagger API 링크 처리 */}
                        {project.swagger && (
                            project.isExpired ? (
                                <span className="flex items-center gap-2 text-sm text-muted-foreground line-through cursor-not-allowed opacity-60" title="서버가 종료되어 접속할 수 없습니다.">
                                <ExternalLink className="w-4 h-4" />
                                Swagger API
                              </span>
                            ) : (
                                <a
                                    href={project.swagger}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                                >
                                  <ExternalLink className="w-4 h-4" />
                                  Swagger API
                                </a>
                            )
                        )}

                        {/* Live Site 링크 처리 */}
                        {project.site && (
                            project.isExpired ? (
                                <span className="flex items-center gap-2 text-sm text-muted-foreground line-through cursor-not-allowed opacity-60" title="서버가 종료되어 접속할 수 없습니다.">
                                <ExternalLink className="w-4 h-4" />
                                Live Site
                              </span>
                            ) : (
                                <a
                                    href={project.site}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                                >
                                  <ExternalLink className="w-4 h-4" />
                                  Live Site
                                </a>
                            )
                        )}
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