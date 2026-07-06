import BookmarkList from './BookmarkList';
import BookmarkHeader from './BookmarkHeader';

const BookmarkTable = ({bookmarks}) => {
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