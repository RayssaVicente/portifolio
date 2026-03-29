import { Briefcase, Code, User, Rocket } from "lucide-react"

export const AboutMe = () => {
    return (
        <section id="About" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Sobre <span className="text-primary">Mim</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-center md:text-left">
                        <h3 className="text-2xl md:text-3xl font-semibold">
                            Desenvolvedora Full Stack & Especialista em Automações
                        </h3>

                        <p className="text-muted-foreground leading-relaxed">
                            Desenvolvedora Web e criadora de automações personalizadas. Foco em construir aplicações reais com interfaces fluidas e fluxos de trabalho inteligentes e eficientes.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                            <a href="#contact" className="cosmic-button text-center">
                                Entre em contato
                            </a>
                            
                            <a 
                                href="/RAYSSA VICENTE-.pdf" 
                                download
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {/* Card 1: Automação */}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                                    <Rocket className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Automações Personalizadas</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Desenvolvimento de scripts e ferramentas de automação sob medida 
                                        para otimizar fluxos de trabalho e análise de dados.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Web Dev */}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Desenvolvimento Full Stack</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Criação de aplicações modernas e responsivas utilizando React, 
                                        Next.js e Node.js com foco total na experiência do usuário.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3: Consultoria */}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Foco no Cliente</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Soluções pensadas para cada necessidade, aliando alta qualidade 
                                        técnica com excelente custo-benefício.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}