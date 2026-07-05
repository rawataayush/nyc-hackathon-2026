import TabsHeader from '../../components/tabs/TabsHeader';
import FilterBar from '../../components/tabs/FilterBar'
import TabGroupGrid from '../../components/tabs/TabGroupGrid'

const Tabs = () => {
    return (
        <main className='overflow-y-auto p-8 pb-24 ml-40 mt-16'>
            <div className='mx-auto max-w-7xl'>
                <TabsHeader />
                <FilterBar />
                <TabGroupGrid />
            </div>
        </main>
    )
}

export default Tabs;