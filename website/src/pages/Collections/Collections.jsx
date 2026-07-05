import CollectionHeader from '../../components/collections/CollectionsHeader';
import CollectionGrid from '../../components/collections/CollectionGrid';

const Collections = () => {
    return (
        <main className='ml-60 mt-16 min-h-screen overflow-y-auto p-8'>
            <div className='mx-auto max-w-7xl'>
                <CollectionHeader />
                <CollectionGrid />
            </div>
        </main>
    )
}

export default Collections