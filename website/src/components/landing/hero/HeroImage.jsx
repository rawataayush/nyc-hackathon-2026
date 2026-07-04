import heroImage from '../../../assets/hero-dashboard.png'

const HeroImage = () => {
    return (
        <div className='relative'>
                    <div className='overflow-hidden rounded-xl border border-[#c1c6d6] bg-white shadow-2xl'>
                        <img 
                            src={heroImage}
                            alt="TabMarko Dashboard" 
                            className='block h-auto w-full'
                            />
                    </div>
                </div>
    )
}

export default HeroImage