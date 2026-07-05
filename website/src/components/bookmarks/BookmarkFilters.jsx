const filters = [
    'All',
    'Study',
    'Development',
    'Design',
    'Learning',
];

const BookmarkFilters = () => {
    return (
        <div className='flex flex-wrap gap-3'>
            {filters.map((filter, index) => (
                <button
                    key={filter}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition
                        ${index === 0 ? 'bg-[#1A73E8] text-white' : 'bg-[#f3f4f5] text-[#191c1d] hover:bg-[#e3e2e6]'}
                    `}
                >
                    {filter}
                </button>
            ))}
        </div>
    )
}

export default BookmarkFilters;