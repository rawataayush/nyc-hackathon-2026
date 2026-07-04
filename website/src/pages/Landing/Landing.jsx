import Navbar from '../../components/landing/navbar/Navbar';
import Hero from '../../components/landing/hero/Hero';
import ProblemSection from '../../components/landing/problem/ProblemSection';
import FeaturesSection from '../../components/landing/features/FeaturesSection';
import HowItWorksSection from '../../components/landing/how-it-works/HowItWorksSection';
import AboutSection from '../../components/landing/about/AboutSection';
import TechStackSection from '../../components/landing/tech-stack/TechStackSection'
import Footer from '../../components/landing/footer/Footer';

const Landing = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <ProblemSection />
            <FeaturesSection />
            <HowItWorksSection />
            <AboutSection />
            <TechStackSection />
            <Footer />
        </>
    )
}

export default Landing;