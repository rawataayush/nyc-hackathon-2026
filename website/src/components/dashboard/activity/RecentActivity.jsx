import ActivityItem from './ActivityItem'
import activityData from '../../../data/ActivityData'

const RecentActivity = () => {
    return (
        <section>
            <h2 className='mb-4 px-2 text-2xl font-semibold text-[#191c1d]'>
                Recent Activity
            </h2>

            <div className="flex flex-col">
                {activityData.map((activity) => (
                    <ActivityItem
                        key={activity.id}
                        icon={activity.icon}
                        title={activity.title}
                        time={activity.time}
                    />
                ))}
            </div>
        </section>
    )
}

export default RecentActivity;