import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Despesas Pessoais",
        description: "Um site focado em ajudar pessoas no gerenciamento de sua finanças, atraves do registro de gastos e analise de gastos",
        image: "/assets/despesas-teste.png",
        tags: ["HTML", "CSS", "JavaScript"],
        demoUrl: "https://rayssavicente.github.io/Despesas-Pessoais/",
        githubUrl: "https://github.com/RayssaVicente/Despesas-Pessoais.git",
    },
    {
        id: 2,
        title: "Twitter Clone",
        description: "Um clone do Twitter feito com React e Tailwind CSS",
        image: "/assets/twiter-clone.png",
        tags: [ "HTML", "JavaScript", "CSS", "Bootstrap", "PHP", "MySQL"],
        demoUrl: "https://twitter-clone-hbfl.vercel.app/",
        githubUrl:"https://github.com/RayssaVicente/Twitter-Clone.git",
    },
    {
        id: 3,
        title: "Kanban Board",
        description: "Um quadro de tarefas estilo Kanban, desenvolvido com React + TypeScript, usando Radix UI para o design e json-server como API REST fake para simular persistência de dados.",
        image: "/assets/kanban.png",
        tags: ["HTML", "CSS", "JavaScript"],
        demoUrl: "https://github.com/RayssaVicente/Kanban",
        githubUrl: "https://rayssavicente.github.io/Kanban/",
    },
    // {
    //     id: 4,
    //     title: "BalleCoffee",
    //     description: "Um site focado em ajudar pessoas no gerenciamento de sua finanças, atraves do registro de gastos e analise de gastos",
    //     image: "/projects/project1.png",
    //     tags: ["HTML", "CSS", "JavaScript"],
    //     demoUrl: "#",
    //     githubUrl: "#",
    // },

    {
        id: 5,
        title: "Gerenciador de Torneios",
        description: "Uma solução completa para organização de competições esportivas, automatizando desde a entrada de dados via PDF até a gestão de chaves e rankings acumulados.",
        image: "/assets/torneio.png",
        tags: ["HTML", "CSS", "JavaScript"],
        demoUrl: "/Sistema_Torneio.2.0.exe",
        githubUrl: "https://github.com/RayssaVicente/Gerenciador-de-Torneio",
    },

    {
        id: 6,
        title: "Facevision",
        description: "O FaceVision é uma aplicação web robusta desenvolvida para melhorar o controle de frequência escolar.O sistema auxilia na chamada tradicionais e auxiliando também na gestão de notas ",
        image: "/assets/facevision.2.png",
        tags: ["HTML", "CSS", "JavaScript"],
        demoUrl: "#",
        githubUrl: "https://github.com/RayssaVicente/Facevision",
    },

    {
        id: 7,
        title: "Olimpo",
        description: "Um site focado em contar um pouco da historia da equipe olimpo nas competições de robotica que participaram",
        image: "/assets/olimpo.png",
        tags: ["HTML", "CSS", "JavaScript"],
        demoUrl: "https://github.com/RayssaVicente/Olimpo",
        githubUrl: "https://rayssavicente.github.io/Olimpo/",
    },
]

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Meus <span className="text-primary">Projetos </span></h2>

            <p className="Text-center text-muted-foreground mb-12 max-w-2x1 mx-auto">

            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) =>(
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                    
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title}  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                        </div>

                        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        <div className="flex justify-between item-center">
                            <div className="flex space-x-3">
                                <a href={project.demoUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank">
                                    <ExternalLink size={20}/>
                                </a>

                                <a href={project.githubUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank">
                                    <Github size={20}/>
                                </a>

                            </div>
                        </div>   
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <a href="https://github.com/RayssaVicente" target="_blank" className="comisc-button w-fit flex items-center mx-auto gap2">
                    Conheça meu GitHub <ArrowRight size={16}></ArrowRight>
                </a>

            </div>
        </div>
    </section>
};