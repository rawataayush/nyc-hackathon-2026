import BookmarksToolbar from '../../components/bookmarks/BookmarksToolbar';
import BookmarkTable from "../../components/bookmarks/BookmarkTable";
import Pagination from "../../components/bookmarks/Pagination";

const Bookmarks = () => {
    return (
        <main className='overflow-y-auto p-8 pb-24 ml-60 mt-16'>
            <div className='mx-auto max-w-7xl'>
                <BookmarksToolbar />
                <BookmarkTable />
                <Pagination />
            </div>
        </main>
    )
}

export default Bookmarks