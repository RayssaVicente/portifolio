import {StarBackground} from "@/components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutMe } from "../components/AboutMe";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { EducationSection } from "../components/EducationSection";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foregrouund overflow-x-hidden">

    {/*Theme Toggle */}
    
    
    {/*Background Effects */}
    <StarBackground/>

    {/*Navbar*/}
    <Navbar/>

    {/*Main Content */}
    <main>

        <HeroSection />
        <AboutMe/>
        <EducationSection/>
        <SkillsSection/>
        <ProjectsSection/>
        <ContactSection/>
    </main>

    {/*Footer */}

    </div>;
}