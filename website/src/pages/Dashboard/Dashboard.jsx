import OverviewGrid from '../../components/dashboard/overview/OverviewGrid'
import RecentCollections from '../../components/dashboard/collections/RecentCollections'
import QuickActions from '../../components/dashboard/actions/QuickActions'
import RecentActivity from '../../components/dashboard/activity/RecentActivity'

const Dashboard = () => {
    return (
        <main className='ml-60 mt-16 p-8 pb-24'>
            <div className='mx-auto max-w-7xl'>
                <div className=' flex flex-col gap-8 lg:flex-row'>
                    <div className='flex flex-1 flex-col gap-8'>
                        <OverviewGrid />
                        <RecentCollections />
                    </div>

                    <div className='flex w-full flex-col gap-8 lg:w-80'>
                        <QuickActions />
                        <RecentActivity />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Dashboard