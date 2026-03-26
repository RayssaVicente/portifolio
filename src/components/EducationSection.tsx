import { GraduationCap as EducationIcon } from "lucide-react";

const education = [
  {
    course: "Análise e Desenvolvimento de Sistemas",
    institution: "UFPB", // Exemplo de instituição na Paraíba
    period: "2024 – 2025",
  },

  
];

export const EducationSection = () => {
  return (
    <section className="bg-transparent text-foreground py-16 px-8 relative" id="formacao">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Ícone com Brilho (Efeito da imagem) */}
        <div className="flex flex-col items-center mb-10 relative">
          <div className="bg-secondary p-4 rounded-full border border-primary/30 mb-4 z-10 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
            <EducationIcon className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight">Formação</h2>
        </div>

        {/* Lista de Formação */}
        <div className="w-full space-y-8">
          {education.map((item, index) => (
            <div key={index} className="text-center group">
              <h3 className="text-xl md:text-2xl font-semibold transition-colors duration-300">
                {item.course} 
                <span className="text-muted-foreground mx-2 block md:inline">•</span> 
                <span className="text-muted-foreground font-normal">{item.institution}</span>
                <span className="text-muted-foreground mx-2 block md:inline">•</span> 
                <span className="text-sm text-primary/70 italic">{item.period}</span>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};