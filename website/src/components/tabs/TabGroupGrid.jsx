import TabGroupCard from './TabGroupCard';

const TabGroupGrid = ({groups}) => {
    return (
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
            {groups.map(group => (
                <TabGroupCard 
                    key={group.id}
                    group={group}
                />
            ))}
        </div>
    )
}

export default TabGroupGrid;