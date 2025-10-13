import { Briefcase, GraduationCap } from "lucide-react"

export function CareerSection() {
  const timeline = [
    {
      type: "career",
      period: "2023.03 ~ 2023.08",
      title: "(주)에프아이솔루션 | 인턴",
      subtitle: "FI Solution Inc. | Intern",
      description: "기업부설연구소에서 연구과제 및 개발 프로젝트 진행 관련 실무를 지원했습니다.",
    },
    {
      type: "education",
      period: "2018.03 ~ 2024.02",
      title: "홍익대학교",
      subtitle: "Hongik University",
      description: "컴퓨터공학과 (Dept. of Computer Engineering)",
    },
    {
      type: "education",
      period: "2015.02 ~ 2018.01",
      title: "수원고등학교",
      subtitle: "Suwon High School",
      description: "",
    },
  ]

  return (
    <>
      <div className="w-full h-px bg-gray-200" />

      <section id="career" className="min-h-screen flex items-center justify-center px-6 py-20 animate-gradient-green">
        <div className="max-w-4xl mx-auto w-full bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-balance font-[family-name:var(--font-title)]">
            Education & Career
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-16">
                  {/* Timeline dot */}
                  <div className="absolute left-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    {item.type === "career" ? (
                      <Briefcase className="w-6 h-6 text-primary" />
                    ) : (
                      <GraduationCap className="w-6 h-6 text-primary" />
                    )}
                  </div>

                  <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors font-sans">
                    <p className="text-sm text-primary font-medium mb-2">{item.period}</p>
                    <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                    {item.subtitle && <p className="text-base text-muted-foreground mb-3">{item.subtitle}</p>}
                    {item.description && (
                      <p className="text-base text-foreground leading-relaxed">{item.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
