import filters from '../../data/FilterData';
import FilterChips from '../common/FilterChips/FilterChips';

const FilterBar = ({selectedFilter, setSelectedFilter}) => {
    return (
        <div className='mb-7 pt-1'>
            <FilterChips
                filters={filters}
                selectedFilter={selectedFilter}
                onFilterChange={setSelectedFilter}
            />
        </div>
    )
}

export default FilterBar;