import FilterChips from '../common/FilterChips/FilterChips';

const filters = [
    { label: "All Broken", value: "All"},
    { label: "404 Not Found", value: "404 Not Found"},
    { label: "500 Server Error", value: "500 Server Error"},
    { label: "DNS Resolution", value: "DNS Resolution"},
]

const BrokenLinksFilters = ({selectedFilter, setSelectedFilter}) => {
    return (
        <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
            <FilterChips 
                filters={filters}
                selectedFilter={selectedFilter}
                onFilterChange={setSelectedFilter}
            />
        </div>
    )
}

export default BrokenLinksFilters;