import { cn } from "@/lib/utils";
import { Code2, Layout, Wrench, Database } from "lucide-react"; // Importe ícones se desejar

const skillGroups = [
  {
    title: "Frontend",
    icon: <Layout className="w-5 h-5 text-blue-400" />,
    skills: ["HTML/CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS", "Next.js"]
  },
  {
    title: "Backend",
    icon: <Code2 className="w-5 h-5 text-orange-400" />,
    skills: ["Node.js", "Python", "MongoDB", "PostgreSQL", "PHP"]
  },
  {
    title: "Tools & Extras",
    icon: <Wrench className="w-5 h-5 text-purple-400" />,
    skills: ["Git/GitHub", "Figma", "VS Code", "Selenium", "Playwright"]
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-white">
          Habilidades <span className="text-primary text-purple-500">Técnicas</span>
        </h2>

        {/* Grid principal - 3 colunas no desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <div 
              key={index} 
              className="bg-[#121212] border border-white/5 p-8 rounded-2xl hover:border-purple-500/50 transition-all duration-300 group"
            >
              {/* Cabeçalho do Card */}
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-white/5 rounded-lg group-hover:scale-110 transition-transform">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide">
                  {group.title}
                </h3>
              </div>

              {/* Lista de Skills */}
              <ul className="space-y-4">
                {group.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-3 text-gray-400 group-hover:text-gray-200 transition-colors">
                    {/* Opcional: Um pequeno marcador estilizado */}
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    <span className="text-lg">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};