import duplicateItems from '../../data/DuplicateData';
import DuplicateCard from './DuplicateCard';
import DuplicateItem from './DuplicateItem';

const DuplicateGrid = ({duplicateGroups}) => {
    return (
        <div className='grid grid-cols-1 gap-6 xl:grid-cols-2'>
            {duplicateGroups.map((group) => (
                <DuplicateCard
                    key={group.id}
                    group={group}
                />
            ))}
            <DuplicateItem 
                item={duplicateItems}/>
        </div>
    )
}

export default DuplicateGrid;