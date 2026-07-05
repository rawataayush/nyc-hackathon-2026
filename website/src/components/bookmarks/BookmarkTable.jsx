import bookmarks from './BookmarksData';
import BookmarkList from './BookmarkList';
import BookmarkHeader from './BookmarkHeader';

const BookmarkTable = () => {
    return (
        <section>
            <BookmarkHeader />
            <BookmarkList 
                bookmarks={bookmarks}
            />
        </section>
    )
}

export default BookmarkTable;