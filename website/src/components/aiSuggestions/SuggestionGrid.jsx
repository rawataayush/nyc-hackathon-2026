import suggestions from '../../data/SuggestionsData';
import SuggestionsCard from './SuggestionsCard';

const SuggestionGrid = () => {
    return (
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
            {suggestions.map((suggestion) => (
                <SuggestionsCard 
                    key={suggestion.id}
                    suggestion={suggestion}
                />
            ))}
        </div>
    )
}

export default SuggestionGrid;