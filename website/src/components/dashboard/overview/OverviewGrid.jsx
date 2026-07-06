import OverviewCard from './OverviewCard'
import overviewStats  from '../../../data/OverviewData'


const OverviewGrid = () => {
    return (
        <section className='mb-6 text-[#191c1d]'>
            <h2 className='mb-6 font-semibold text-2xl text-[#191c1d]'>
                Today's Overview
            </h2>

            <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5'>
                {overviewStats.map((stat) => (
                    <OverviewCard
                        key={stat.id}
                        icon={stat.icon}
                        value={stat.value}
                        title={stat.title}
                    />
                ))}
            </div>
        </section>
    )
}

export default OverviewGrid;