import { Briefcase, Code, User } from "lucide-react"


export const AboutMe = () => {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Sobre <span className="text-primary">Mim</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Desenvolvedor web e criador de automações</h3>

                    <p>
                        Sou um desenvolvedor web apaixonado por criar experiências digitais envolventes e funcionais.
                        Meu objetivo é transformar ideias em realidade, construindo sites e aplicações que não apenas atendam às necessidades dos usuários, 
                        mas também proporcionem uma experiência intuitiva e agradável.
                    </p>

                    <p>
                        Alem de desenvolvedor web, sou um entusiasta de automações, sempre buscando maneiras de otimizar processos e aumentar a eficiência de desnvolvendo soluções de alta qualidade de acordo com o gosto de cliente.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            Entre em contato
                        </a>

                        <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            {" "}
                            Download CV
                        </a>

                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"></Code>
                            </div>

                            <div className="text-left">
                                <h4 className="text-semibold text-lg">Desenvolvimento web e criação de automações
                                </h4>
                                <p className="text-muted-foreground">
                                    Criação de sites e aplicações web responsivas com 
                                    frameworks modernos, e automações personalizadas para cada cliente.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"></User>
                            </div>

                            <div className="text-left">
                                <h4 className="text-semibold text-lg">Atendimento personalizado</h4>
                                <p className="text-muted-foreground">
                                    Entendo a importância de ouvir as necessidades do cliente e criar soluções personalizadas que atendam às suas expectativas.
                                </p>
                            </div>
                        </div>

                        
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"></Briefcase>
                            </div>

                            <div className="text-left">
                                <h4 className="text-semibold text-lg">Valores acessíveis</h4>
                                <p className="text-muted-foreground">
                                    Oferecendo soluções de desenvolvimento web acessíveis e de qualidade, com preços competitivos e serviços personalizados para atender às necessidades específicas de cada cliente.
                                </p>
                            </div>
                        </div>

                        
                    </div>
                    

                </div>
            </div>
        </div>
    </section>
}