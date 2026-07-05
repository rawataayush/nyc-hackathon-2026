const SummaryCard = ({ card }) => {
    return (
        <div className="rounded-xl border border-[#c1c6d6] bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="mb-3 flex items-center gap-3">

                <span
                    className="material-symbols-outlined"
                    style={{ color: card.iconColor }}
                >
                    {card.icon}
                </span>

                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#6b7280]">
                    {card.title}
                </h3>
            </div>

            <div className="flex items-end justify-between">
                <span
                    className="text-4xl font-bold"
                    style={{ color: card.valueColor }}
                >
                    {card.value}
                </span>

                <span className="text-sm text-[#6b7280]">
                    {card.label}
                </span>
            </div>
        </div>
    );
};

export default SummaryCard;