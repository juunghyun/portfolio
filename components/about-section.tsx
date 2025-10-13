import { User, Phone, Calendar, Mail } from "lucide-react"

export function AboutSection() {
  const aboutInfo = [
    { icon: User, label: "이름", value: "이정현 (JungHyun Lee)" },
    { icon: Phone, label: "연락처", value: "010-9407-6415" },
    { icon: Calendar, label: "생년월일", value: "1999.03.27" },
    { icon: Mail, label: "이메일", value: "forcomfe81@gmail.com" },
  ]

  return (
    <>
      <div className="w-full h-px bg-gray-200" />

      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 animate-gradient-green">
        <div className="max-w-4xl mx-auto w-full bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-balance font-[family-name:var(--font-title)]">
            About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutInfo.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0 font-sans">
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    <p className="text-base font-medium text-foreground break-words">{item.value}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
