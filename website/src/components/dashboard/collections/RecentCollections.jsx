import CollectionCard from './CollectionCard';
import collectionsData from '../../../data/CollectionsData';

const RecentCollections = () => {
    return (
        <section className='mt-4'>
            <h2 className='mb-6 text-2xl font-semibold text-[#191c1d]'>
                Recent Collections
            </h2>

            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                {collectionsData.map((collection) => (
                    <CollectionCard
                        key={collection.id}
                        icon={collection.icon}
                        name={collection.name}
                        items={collection.items}
                    />
                ))}
            </div>
        </section>
    )
}

export default RecentCollections;