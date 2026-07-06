import DuplicateHeader from '../../components/duplicateFinder/DuplicateHeader';
import DuplicateToolbar from '../../components/duplicateFinder/DuplicateToolbar';
import DuplicateGrid from '../../components/duplicateFinder/DuplicateGrid';
import duplicateGroups from '../../data/DuplicateData';
import { useState } from 'react';

const DuplicateFinder = () => {
    const [selectedFilter, setSelectedFilter] = useState('All');

    const filteredDuplicates = selectedFilter === 'All' ? duplicateGroups : duplicateGroups.filter((group) => group.items === selectedFilter)
    return (
        <main className='ml-40 min-h-screen overflow-y-auto bg-[#fafafa] p-8 pt-24'>
            <div className='mx-auto max-w-7xl'>
                <DuplicateHeader />
                <DuplicateToolbar 
                    selectedFilter={selectedFilter}
                    setSelectedFilter={setSelectedFilter}
                />
                <DuplicateGrid
                    duplicateGroups={filteredDuplicates}
                />
            </div>
        </main>
    )
}

export default DuplicateFinder;