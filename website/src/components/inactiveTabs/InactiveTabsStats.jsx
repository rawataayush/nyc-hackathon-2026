const cards = [
    {
        title: "7+ Days Inactive",
        count: 24,
        icon: "history",
        iconColor: "text-green-500",
        valueColor: "text-[#191c1d]",
    },

    {
        title: "14+ Days Inactive",
        count: 45,
        icon: "update",
        iconColor: "text-blue-500",
        valueColor: "text-[#191c1d]",
    },

    {
        title: "30+ Days Inactive",
        count: 128,
        icon: "hourglass_empty",
        iconColor: "text-red-500",
        valueColor: "text-red-500",
    },
];

const InactiveTabsStats = () => {
    return (
        <div className='mb-10 grid gap6 md:grid-cols-3'>
            {cards.map((card) => (
                <div
                    key={card.title}
                    className='rounded-xl border border-[#c1c6d6] bg-white p-6 shadow-sm'
                >
                    <div className='mb-3 items-center gap-3'>
                        <span className={`material-symbols-outlined ${card.iconColor}`}>
                            {card.icon}
                        </span>

                        <h3 className='text-xs font-semibold uppercase tracking-wider text-[#6b7280]'>
                            {card.title}
                        </h3>
                    </div>

                    <div className='flex items-end justify-between'>
                        <span className={`text-4xl font-bold ${card.valueColor}`}>
                            {card.count}
                        </span>

                        <span className='text-[#6b7280]'>
                            tabs
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default InactiveTabsStats;