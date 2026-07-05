import BookmarkRow from './BookmarkRow';

const BookmarkList = ({bookmarks}) => {
    return (
        <div className='space-y-3'>
            {bookmarks.map((bookmark) => (
                <BookmarkRow 
                    key={bookmark.id}
                    bookmark={bookmark}
                />
            ))}
        </div>
    )
}

export default BookmarkList;