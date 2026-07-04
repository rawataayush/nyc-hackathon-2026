import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.png'

const Navbar = () => {
    return (
        <nav className='sticky top-0 z-50 w-full border-b border-[#c1c6d6] bg-white/90 backdrop-blur-md'>
            <div className='mx-auto flex h-16 max-w-350 items-center justify-between px-6 lg:px-8'>

                {/* Logo */}
                <Link
                    to='/'
                    className='flex items-center text-lg font-bold tracking-tight text-[#191c1d]'
                >
                    <img
                        src={logo}
                        alt="TabMarko"
                        className='h-15 w-15'
                    />
                    
                    <h1 className='text-3xl font-bold tracking-tight'>
                        <span className='text-[#191c1d]'>Tab</span>
                        <span className='text-[#1a73e8]'>Marko</span>
                    </h1>
                </Link>

                {/* Navigation Links */}
                <div className='hidden items-center gap-8 text-md font-medium text-[#414754] md:flex'>
                    <a
                        href="#features"
                        className="transition-colors hover:text-[#005bbf]"
                    >
                        Features
                    </a>

                    <a
                        href="#how-it-works"
                        className="transition-colors hover:text-[#005bbf]"
                    >
                        How It Works
                    </a>

                    <a
                        href="#about"
                        className="transition-colors hover:text-[#005bbf]"
                    >
                        About
                    </a>
                </div>

                {/* CTA Button */}
                <Link
                    to="/dashboard"
                    className="rounded-lg bg-[#1A73E8] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                    Open Dashboard
                </Link>
            </div>
        </nav >
    )
}

export default Navbar