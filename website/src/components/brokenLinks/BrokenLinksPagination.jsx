const BrokenLinksPagination = () => {
    return (
        <div className="flex items-center justify-between border-t border-[#ececec] bg-white px-6 py-4">
            <span className="text-sm text-[#6b7280]">
                Showing 1–3 of 12
            </span>

            <div className="flex gap-1">
                <button
                    disabled
                    className="rounded p-1 text-[#9ca3af] transition disabled:cursor-not-allowed"
                >
                    <span className="material-symbols-outlined">
                        chevron_left
                    </span>
                </button>

                <button
                    className="rounded p-1 text-[#6b7280] transition hover:bg-[#f3f4f5]"
                >
                    <span className="material-symbols-outlined">
                        chevron_right
                    </span>
                </button>
            </div>
        </div>
    )
}

export default BrokenLinksPagination;