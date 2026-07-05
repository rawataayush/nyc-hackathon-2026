const InactiveTabAction = () => {
    return (
        <div className='flex items-center gap-1 md:opacity-0 md:group-hover:opacity-100 transition-opacity'>
            <button
                title="Reopen"
                className='rounded-lg p-2 text-[#6b7280] transition hover:bg-[#E8F0FE] hover:text-[#1A73E8]'
            >
                <span className="material-symbols-outlined text-[20px]">
                    open_in_new
                </span>
            </button>

            <button
                title="Archive"
                className="rounded-lg p-2 text-[#6b7280] transition hover:bg-[#E8F0FE] hover:text-[#1A73E8]"
            >
                <span className="material-symbols-outlined text-[20px]">
                    archive
                </span>
            </button>

            <button
                title="Dismiss"
                className="rounded-lg p-2 text-[#ef4444] transition hover:bg-red-100"
            >
                <span className="material-symbols-outlined text-[20px]">
                    close
                </span>
            </button>
        </div>
    )
}

export default InactiveTabAction;