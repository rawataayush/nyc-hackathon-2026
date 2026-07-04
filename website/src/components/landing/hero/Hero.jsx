import HeroImage from "./HeroImage";

const Hero = () => {
    return (
        <section className='overflow-hidden px-6 py-20 md:py-32 lg:px-8'>
            <div className='mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2'>
                {/* Left Content */}
                <div>
                    <h1 className='mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#191c1d] md:text-6xl'>
                        Stop Losing Your{"  "}
                        <span className='text-[#005bbf]'>
                            Research.
                        </span>
                    </h1>

                    <p className='mb-10 max-w-lg text-lg leading-relaxed text-[#414754] md:text-xl'>
                        AI automatically organizes your tabs and bookmarks
                        into meaningful collections, making them easy to
                        find whenever you need them.
                    </p>

                    {/* CTA Buttons */}
                    <div className='flex flex-wrap gap-4'>
                        <a 
                            href='#features'
                            className='rounded-lg bg-[#005bbf] px-6 py-3 font-semibold text-white transition-all hover:opacity-90'
                        >
                            Explore Features
                        </a>
                        <a 
                            href="#how-it-works"
                            className='rounded-lg border border-[#c1c6d6] bg-white px-6 py-3 font-semibold text-[#191c1d] transition-colors hover:bg-[#f3f4f5]'
                            >
                                How It Works
                            </a>
                    </div>
                </div>

                {/* Right Image */ }
                <HeroImage />
            </div>

        </section>
    )
}

export default Hero