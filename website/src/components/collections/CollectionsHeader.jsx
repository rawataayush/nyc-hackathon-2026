const CollectionsHeader = () => {
    return (
        <div className='mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
            <div>
                <h2 className='text-3xl font-semibold text-[#191c1d]'>
                    Collections
                </h2>

                <p className='mt-1 text-[#414754]'>
                    AI-curated groups of your saved research and inactive tabs.
                </p>
            </div>

            <button className='flex items-center gap-2 rounded-full bg-[#1A73E8] px-6 py-2.5 font-medium text-white transition hover:bg-[#1666cc]'>
                <span className='material-symbols-outlined text-[18px]'>
                    add
                </span>

                Create Collection
            </button>
        </div>
    )
}

export default CollectionsHeader;