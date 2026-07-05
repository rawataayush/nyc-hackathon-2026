import filterData from './FilterData';

const FilterBar = () => {
    return (
        <div className='mb-8 flex flex-wrap gap-2'>
            {filterData.map((filter) => (
                <button 
                    key={filter.id}
                    className={
                        filter.active ? 'rounded-full px-4 py-1.5 text-sm font-medium transition-colors'
                        : 'rounded-full bg-[#ececec] px-4 py-1.5 text-sm transition hover:bg-[#e3e26]'
                        }
                    >
                        {filter.name}
                    </button>
            ))}
        </div>
    )
}

export default FilterBar;