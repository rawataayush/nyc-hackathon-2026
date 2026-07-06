import FilterChips from '../common/FilterChips/FilterChips';

const filters = [
    {label: "All", value: "All"},
    {label: "Tabs", value: "Tabs"},
    {label: "Bookmarks", value: "Bookmarks"},
    {label: "Exact Match", value: "Exact Match"},
    {label: "Similar", value: "Similar"},
]

const DuplicateToolbar = ({selectedFilter, setSelectedFilter}) => {
    return (
        <div className='mb-8 flex flex-wrap gap-3'>
            <FilterChips 
                filters={filters}
                onFilterChange={setSelectedFilter}
                selectedFilter={selectedFilter}
            />
        </div>
    )
}

export default DuplicateToolbar;