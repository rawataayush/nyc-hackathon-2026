const filters = [
    "All Broken (12)",
    "404 Not Found (8)",
    "500 Server Error (2)",
    "DNS Resolution (2)",
]

const BrokenLinksFilters = () => {
    return (
        <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
            {filters.map((filter, index) => (
                <button
                    key={index}
                    className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition
                        ${
                            index === 0
                            ? "bg-[#1A73E8] text-white"
                            : "bg-[#f3f4f5] text-[#414754] hover:bg-[#e5e7eb]"
                        }
                    `}
                >
                    {filter}
                </button>
            ))}
        </div>
    )
}

export default BrokenLinksFilters;