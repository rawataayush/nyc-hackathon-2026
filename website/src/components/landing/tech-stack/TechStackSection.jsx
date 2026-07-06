import TechBadge from './TechBadge';
import techStack from '../../../data/TechStackData';

const TechStackSection = () => {
    return (
        <div className='border-t border-[#c1c6d6] px-6 py-20 lg:px-8'>
            <div className='mx-auto max-w-7xl'>
                <h3 className='mb-10 text-center text-sm font-bold uppercase tracking-[0.25em] text-[#414754]'>
                    Build With
                </h3>

                <div className='flex flex-wrap justify-center gap-4'>
                    {techStack.map((tech) => (
                        <TechBadge 
                            key={tech.id}
                            name={tech.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TechStackSection;