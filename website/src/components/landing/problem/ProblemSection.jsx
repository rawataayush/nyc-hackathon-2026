import ProblemCard from './ProblemCard';
import problems from './ProblemData';

const ProblemSection = () => {
    return (
        <section className='border-y border-[#c1c6d6] bg-[#f3f4f5] px-6 py-24 lg:px-8 scroll-mt-20'>
            <div className='mx-auto max-w-7xl'>
                <div className='mb-16 max-w-2xl'>
                    <h2 className='mb-4 text-3xl font-bold text-[#191c1d] md:text-4xl'>
                        The Browser Was Never Designed For Research.
                    </h2>
                    <p className='text-lg text-[#414754]'>
                        Modern browsers make it easy to open information but difficult to
                        organize and rediscover it later.
                    </p>
                </div>

                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5'>
                    {problems.map((problem) => (
                        <ProblemCard
                        key={problem.id}
                        icon={problem.icon}
                        title={problem.title}
                    />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProblemSection;