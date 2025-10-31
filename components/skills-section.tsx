export function SkillsSection() {
  const skills = {
    Language: [
      { name: "Java", color: "bg-orange-500 text-white" },
      { name: "C++", color: "bg-blue-600 text-white" },
    ],
    Backend: [
      { name: "Spring Boot", color: "bg-green-600 text-white" },
      { name: "Spring Security", color: "bg-green-500 text-white" },
      { name: "JPA & Hibernate", color: "bg-gray-700 text-white" },
      { name: "QueryDSL", color: "bg-blue-700 text-white" },
      { name: "MySQL", color: "bg-blue-500 text-white" },
      { name: "JWT", color: "bg-gray-900 text-white" },
      { name: "Redis", color: "bg-red-600 text-white" },
      { name: "Elasticsearch", color: "bg-teal-500 text-white" },
      // ------------------
    ],
    "DevOps & Cloud": [
      { name: "Azure", color: "bg-blue-600 text-white" },
      // --- 추가된 스킬 ---
      { name: "AWS", color: "bg-orange-500 text-white" },
      // ------------------
      { name: "Docker", color: "bg-sky-500 text-white" },
      { name: "Nginx", color: "bg-green-600 text-white" },
      { name: "GitHub Actions", color: "bg-blue-600 text-white" },
      { name: "Git", color: "bg-orange-600 text-white" },
    ],
  }

  return (
      <>
        <div className="w-full h-px bg-gray-200" />

        <section
            id="skills"
            className="min-h-screen flex items-center justify-center px-6 py-20 animate-gradient-blue bg-white"
        >
          <div className="max-w-4xl mx-auto w-full bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-balance font-[family-name:var(--font-title)]">
              Skills
            </h2>
            <div className="space-y-10">
              {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h3 className="text-2xl font-semibold text-foreground mb-4 font-sans">{category}</h3>
                    <div className="flex flex-wrap gap-3">
                      {items.map((skill) => (
                          <span
                              key={skill.name}
                              className={`px-4 py-2 rounded-full text-sm font-medium ${skill.color} transition-transform hover:scale-105 font-sans`}
                          >
                      {skill.name}
                    </span>
                      ))}
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>
      </>
  )
}
