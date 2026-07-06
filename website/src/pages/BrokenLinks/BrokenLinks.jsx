import BrokenLinksHeader from "../../components/brokenLinks/BrokenLinksHeader";
import BrokenLinksFilters from "../../components/brokenLinks/BrokenLinksFilters";
import BrokenLinksTable from "../../components/brokenLinks/BrokenLinksTable";
import brokenLinks from '../../data/BrokenLinksData'
import { useState } from "react";

const BrokenLinks = () => {

    const [selectedFilter, setSelectedFilter] = useState('All');
    const filteredBrokenLinks = selectedFilter === 'All' ? brokenLinks : brokenLinks.filter((link) => link.status === selectedFilter)
        
    return (
        <main className="mt-16 h-[calc(100vh-64px)] overflow-hidden md:ml-40">
            <div className="mx-auto flex h-full max-w-7xl flex-col px-4 py-4 md:px-6 lg:px-8">
                <BrokenLinksHeader />
                <BrokenLinksFilters 
                    selectedFilter={selectedFilter}
                    setSelectedFilter={setSelectedFilter}
                />

                <div className="mt-4 flex-1 overflow-hidden rounded-xl border border-[#c1c6d6] bg-white shadow-sm">
                    <BrokenLinksTable 
                        brokenLinks={filteredBrokenLinks}
                    />
                </div>
            </div>
        </main>
    )
}

export default BrokenLinks