const DuplicateActions = () => {
    return (
        <div className='mb-8 flex flex-wrap gap-3'>
            <button className='rounded-full bg-[#1A73E8] px-4 py-2 text-sm font-medium text-white'>
                All
            </button>

            <button className='rounded-full bg-[#f3f4f5] px-4 py-2 text-sm'>
                Tabs
            </button>

            <button className='rounded-full bg-[#f3f4f5] px-4 py-2 text-sm'>
                Bookmarks
            </button>

            <button className='rounded-full bg-[#f3f4f5] px-4 py-2 text-sm'>
                Exact Match
            </button>

            <button className='rounded-full bg-[#f3f4f5] px-4 py-2 text-sm'>
                Similar
            </button>
        </div>
    )
}

export default DuplicateActions;