const FilterChips = ({ filters, selectedFilter, onFilterChange }) => {

    return (
        <div className='flex flex-wrap gap-3'>
            {filters.map((filter) => (
                <button
                    key={filter.value}
                    onClick={()=> onFilterChange(filter.value) }
                    className={`rounded-full px-4 py-2 text-sm font-medium transition
                        ${
                            selectedFilter === filter.value
                                ? "bg-[#1A73E8] text-white"
                                : "bg-[#f3f4f5] text-[#191c1d] hover:bg-[#e3e2e6]"
                        }`}
                    >
                        {filter.label}
                    </button>
            ))}
        </div>
    )
}

export default FilterChips;