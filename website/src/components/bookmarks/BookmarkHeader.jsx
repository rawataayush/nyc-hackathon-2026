const BookmarkHeader = () => {
    return (
        <div className='mb-4 hidden rounded-xl border border-[#c1c6d6] bg-[#f8f9fa] px-6 py-3 md:grid md:grid-cols-[3fr_1fr_1fr_auto] md:items-center'>
            <h3 className='text-sm font-semibold uppercase tracking-wide text-[#414754]' >
                Bookmark
            </h3>
            <h3 className='text-sm font-semibold uppercase tracking-wide text-[#414754]'>
                Category
            </h3>

            <h3 className='text-sm font-semibold uppercase tracking-wide text-[#414754]'>
                Created
            </h3>

            <h3 className='text-right text-sm font-semibold uppercase tracking-wide text-[#414754]'>
                Actions
            </h3>
        </div>
    )
}

export default BookmarkHeader;