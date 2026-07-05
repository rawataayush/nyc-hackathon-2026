import SummaryCard from './SummaryCard';

const summaryCards = [
    {
        id: 1,
        title: "7+ Days Inactive",
        value: 24,
        label: "tabs",
        icon: "history",
        iconColor: "#0F766E",
        valueColor: "#191c1d",
    },
    {
        id: 2,
        title: "14+ Days Inactive",
        value: 45,
        label: "tabs",
        icon: "update",
        iconColor: "#1A73E8",
        valueColor: "#191c1d",
    },
    {
        id: 3,
        title: "30+ Days Inactive",
        value: 128,
        label: "tabs",
        icon: "hourglass_empty",
        iconColor: "#EF4444",
        valueColor: "#EF4444",
    },
];

const InactiveSummaryCards = () => {
    return (
        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {summaryCards.map((card)=>(
                <SummaryCard
                key={card.id}
                card={card}
            />
        ))}
        </div>
    )
}

export default InactiveSummaryCards;