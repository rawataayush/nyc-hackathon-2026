import Navbar from '../../components/landing/navbar/Navbar';
import Hero from '../../components/landing/hero/Hero';
import Features from '../../components/landing/features/Features';
import HowItWorks from '../../components/landing/how-it-works/HowItWorks';
import About from '../../components/landing/about/About';
import Footer from '../../components/landing/footer/Footer';
import ProblemSection from '../../components/landing/problem/ProblemSection';

const Landing = () => {
    return (
        <>
        <Navbar />
        <Hero />
        <ProblemSection />
        <Features />
        <HowItWorks />
        <About />
        <Footer />
        </>
    )
}

export default Landing;