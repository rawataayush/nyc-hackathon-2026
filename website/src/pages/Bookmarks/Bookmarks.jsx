import { useState } from 'react';
import BookmarksToolbar from '../../components/bookmarks/BookmarksToolbar';
import BookmarkTable from "../../components/bookmarks/BookmarkTable";
import Pagination from "../../components/bookmarks/Pagination";
import bookmarkData from '../../data/BookmarksData';

const Bookmarks = () => {
    const [selectedFilter, setSelectedFilter] = useState('All');

    const filteredBookmarks = selectedFilter === 'All' 
        ? bookmarkData 
        : bookmarkData.filter((bookmark) => 
            bookmark.category === selectedFilter)
    return (
        <main className='overflow-y-auto p-8 pb-24 ml-40 mt-16'>
            <div className='mx-auto max-w-7xl'>
                <BookmarksToolbar 
                    selectedFilter={selectedFilter}
                    setSelectedFilter={setSelectedFilter}
                />
                <BookmarkTable 
                    bookmarks={filteredBookmarks}
                />
                <Pagination />
            </div>
        </main>
    )
}

export default Bookmarks;