import FilterChips from '../common/FilterChips/FilterChips';

const filters = [
    {label:  "All", value: "All"},
    {label:  "Study", value: "Study"}, 
    {label:  "Development", value: "Development"}, 
    {label:  "Design", value: "Design"},
    {label:  "Learning", value: "Learning"} 
]
const BookmarkFilters = ({selectedFilter, setSelectedFilter}) => {
    return (
        <>
            <FilterChips
                filters={filters}
                selectedFilter={selectedFilter}
                onFilterChange={setSelectedFilter}
            />
        </>
    )
}

export default BookmarkFilters;