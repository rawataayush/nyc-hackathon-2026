const TabsHeader = () => {
    return (
        <div className='mb-8 flex flex-col gap-2'>
            <h1 className='text-3xl font-bold text-[#191c1d]'>
                Tabs
            </h1>

            <div className='flex items-center gap-2 text-[#414754]'>
                <span className='material-symbols-outlined text-lg text-[#1a73e8]'>
                    auto_awesome
                </span>

                <p className='text-sm'>
                    Autoimatically AI Grouped
                </p>
            </div>
        </div>
    )
}

export default TabsHeader;