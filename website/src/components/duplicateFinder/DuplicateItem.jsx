const DuplicateItem = ({item}) => {
    
    return (
        <div className="flex items-center gap-4 rounded-lg border border-[#ececec] p-3">
            <div
                className={'flex h-10 w-10 items-center justify-center rounded-lg text-white'}
                style={{backgroundColor: item.color}}
            >
                <span className="material-symbols-outlined">
                    {item.icon}
                </span>
            </div>

            <div className="overflow-hidden">
                <h4 className="truncate font-medium">
                    {item.title}
                </h4>

                <p className="truncate text-sm text-[#6b7280]">
                    {item.url}
                </p>
            </div>
        </div>
    )
}

export default DuplicateItem;