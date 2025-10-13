export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 animate-gradient-blue">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-7xl md:text-8xl font-bold text-foreground mb-4 text-balance font-sans">이정현</h1>
        <p className="text-2xl md:text-3xl text-muted-foreground mb-6 font-sans">Backend Developer Portfolio</p>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty font-sans">
          오늘보다 내일, 어제보다 오늘. 성장을 멈추지 않는 개발자.
        </p>
      </div>
    </section>
  )
}
