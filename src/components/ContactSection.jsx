import { Phone, Mail, Linkedin, Instagram, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const ContactSection = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Enviando....");
        const formData = new FormData(event.target);

        // COLE SUA CHAVE DO WEB3FORMS AQUI
        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Mensagem enviada com sucesso! ✨");
                event.target.reset();
            } else {
                console.log("Erro", data);
                setResult("Ops! Algo deu errado. Tente novamente.");
            }
        } catch (error) {
            setResult("Erro de conexão. Verifique sua internet.");
        }
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Entre <span className="text-primary"> em Contato</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Estou disponível para novos projetos e colaborações.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    
                    {/* COLUNA DA ESQUERDA: INFORMAÇÕES */}
                    <div className="flex flex-col items-center md:items-start space-y-8 text-center md:text-left">
                        <div className="w-full">
                            <h3 className="text-2xl font-semibold mb-6">Informações de contatos</h3>
                            <div className="space-y-8">
                                {/* Email */}
                                <div className="flex flex-col items-center md:flex-row md:space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10 mb-2 md:mb-0">
                                        <Mail className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-sm text-muted-foreground">Email</h4>
                                        <a href="mailto:rayssavicenteviegas@gmail.com" className="hover:text-primary transition-colors">
                                            rayssavicenteviegas@gmail.com
                                        </a>
                                    </div>
                                </div>

                                {/* WhatsApp */}
                                <div className="flex flex-col items-center md:flex-row md:space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10 mb-2 md:mb-0">
                                        <Phone className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-sm text-muted-foreground">Telefone (WhatsApp)</h4>
                                        <a href="https://wa.link/cxpzje" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                            Mande uma mensagem
                                        </a>
                                    </div>
                                </div>

                                {/* Redes Sociais */}
                                <div className="pt-8">
                                    <h4 className="font-medium mb-4">Minhas redes</h4>
                                    <div className="flex space-x-5 justify-center md:justify-start">
                                        <a href="https://www.linkedin.com/in/rayssa-vicente-viegas-0b3027201/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-primary">
                                            <Linkedin className="h-6 w-6" />
                                        </a>
                                        {/* <a href="https://instagram.com/rayssavicente" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform text-primary">
                                            <Instagram className="h-6 w-6" />
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* COLUNA DA DIREITA: FORMULÁRIO */}
                    <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
                        <h3 className="text-2xl font-semibold mb-6">Mande uma mensagem</h3>

                        <form onSubmit={onSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Seu nome</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Rayssa Vicente...." 
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Seu E-mail</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="rayssavicenteviegas@gmail.com" 
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Sua Mensagem</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    required 
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Como posso te ajudar?" 
                                />
                            </div>

                            <button 
                                type="submit" 
                                className="cosmic-button w-full flex items-center justify-center gap-2 p-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity font-medium"
                            >
                                Envie a Mensagem
                                <Send size={16}/>
                            </button>

                            {/* Mensagem de Feedback */}
                            {result && (
                                <p className={cn(
                                    "text-center mt-4 text-sm font-medium p-2 rounded-md",
                                    result.includes("sucesso") ? "bg-green-500/10 text-green-500" : "bg-primary/10 text-primary"
                                )}>
                                    {result}
                                </p>
                            )}
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};