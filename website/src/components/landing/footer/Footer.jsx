import { Link } from 'react-router-dom';
import footerLinks from './FooterData';
import logo from '../../../assets/logo.png';

const Footer = () => {
    return (
        <footer className='border-t border-[#c1c6d6] bg-white px-6 py-16 lg:px-8'>
            <div className='mx-auto flex max-w-7xl flex-col items-start justify-between gap-15 md:flex-row md:items-center'>

                {/* Left */}

                <div>
                    <div className='mb-3 flex items-center'>
                        <img
                            src={logo}
                            alt="TabMarko Logo"
                            className='h-15 w-15'
                        />

                        <h2 className='text-2xl font-bold text-[#191c1d]'>
                            Tab
                            <span className='text-[#1a73e8]'>
                                Marko
                            </span>
                        </h2>
                    </div>

                    <div className='space-y-1 text-sm text-[#414754]'>
                        <p>Hack Horizon | NYC CodeQuest 2026</p>
                        <p>© 2026 TabMarko. All rights reserved.</p>
                    </div>
                </div>

            {/* Right */}

            <div className='flex items-center gap-8'>
                {footerLinks.map((link) => (
                    <a 
                        key={link.id}
                        href={link.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-lg font-semibold text-[#191c1d] hover:text-[#1a73e8]'
                    >
                        {link.title}
                    </a>
                ))}

                <Link
                    to='/dashboard'
                    className='rounded-lg bg-[#1a73e8] px-5 py-2 font-semibold text-white transition-all duration-300 hover:bg-[#1558b0]'
                >
                    Open Dashboard
                </Link>
            </div>
            </div>
        </footer>
    )
}

export default Footer;