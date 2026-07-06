const TabItem = ({tab}) => {
    const handleOpen = () => {
        const url = tab.url.startsWith("https") ? tab.url : `https://${tab.url}`;
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <div className='group flex cursor-pointer items-center justify-between rounded-lg p-2 transition-colors hover:bg-[#f3f4f5]'>
            <div className='flex items-center gap-3 overflow-hidden'>
                {tab.image ? (
                    <img 
                        src={tab.image}
                        alt={tab.title}
                        className='h-4 w-4 rounded-sm object-cover shrink-0'
                    />
                ) : (
                    <div
                        className='flex h-4 w-4 shrink-0 items-center justify-center rounded-sm'
                        style={{backgroundColor: tab.color}}
                    >
                        {tab.smallIcon && (
                            <span className='material-symbols-outlined text-[10px] text-white'>
                                {tab.smallIcon}
                            </span>
                        )}
                    </div>
                )}
                <div className='truncate'>
                    <p className='truncate text-sm font-medium text-[#191c1d]'>
                        {tab.title}
                    </p>

                    <p className='truncate text-xs text-[#6b7280]'>
                        {tab.url}
                    </p>
                </div>
            </div>

            <div className='flex shrink-0 items-center gap-1 pl-2 opacity-0 transition-opacity group-hover:opacity-100'>
                <button 
                    className='rounded p-1 hover:bg-[#e5e7eb]'
                    onClick={handleOpen}
                    >
                    <span className='material-symbols-outlined text-[18px]'>
                        open_in_new
                    </span>
                </button>

                <button className='rounded p-1 hover:bg-red-100 hover:text-red-500'>
                    <span className='material-symbols-outlined text-[18px]'>
                        close
                    </span>
                </button>
            </div>
        </div>
    )
}

export default TabItem;