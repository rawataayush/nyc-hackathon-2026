import AISuggestionsHeader from '../../components/aiSuggestions/AISuggestionsHeader';
import SuggestionGrid from '../../components/aiSuggestions/SuggestionGrid';

const AISuggestions = () => {
    return (
        <main className='ml-60 mt-16 min-h-screen p-8'>
            <div className='mx-auto max-w-7xl'>
                <AISuggestionsHeader />
                <SuggestionGrid />
            </div>
            
        </main>
    )
}

export default AISuggestions