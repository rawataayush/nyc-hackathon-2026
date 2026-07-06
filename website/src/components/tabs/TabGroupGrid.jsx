import TabGroupCard from '../../data/TabsData';
import tabsGroup from '../../data/TabsData';

const TabGroupGrid = () => {
    return (
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
            {tabsGroup.map(group => (
                <TabGroupCard 
                    key={group.id}
                    group={group}
                />
            ))}
        </div>
    )
}

export default TabGroupGrid;