import duplicateGroups from '../../data/DuplicateData';
import DuplicateCard from './DuplicateCard';

const DuplicateGrid = () => {
    return (
        <div className='grid grid-cols-1 gap-6 xl:grid-cols-2'>
            {duplicateGroups.map((group) => (
                <DuplicateCard
                    key={group.id}
                    group={group}
                />
            ))}
        </div>
    )
}

export default DuplicateGrid;