import suggestions from '../../data/knowledgePromptsData';
import SuggestionCard from './SuggestionCard';

const SuggestionGrid = () => {
    return (
        <div className='mx-auto mt-10 grid w-full max-w-3xl grid-cols-1 gap-4 md:grid-cols-2'>
            {suggestions.map((suggestion) => (
                <SuggestionCard 
                    key={suggestion.id}
                    suggestion={suggestion}
                />
            ))}
        </div>
    )
}

export default SuggestionGrid;