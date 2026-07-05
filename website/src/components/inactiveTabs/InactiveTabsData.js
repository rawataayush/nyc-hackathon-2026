const inactiveTabs = [
    {
        id: 1,
        title: "30+ Days Inactive",
        icon: "hourglass_empty",
        color: "text-red-500",
        count: 128,
        tabs: [
            {
                id: 1,
                title: "Tailwind CSS Configuration Guide",
                url: "tailwindcss.com/docs/configuration",
                icon: "language",
                color: "#E5E7EB",
            },
            {
                id: 2,
                title: "Understanding JavaScript Closures",
                url: "developer.mozilla.org/en-US/docs/Web/JavaScript/Closures",
                icon: "language",
                color: "#E5E7EB",
            },
        ],
    },

    {
        id: 2,
        title: "14+ Days Inactive",
        icon: "update",
        color: "text-blue-500",
        count: 45,
        tabs: [
            {
                id: 3,
                title: "React Performance Optimization",
                url: "react.dev",
                icon: "code",
                color: "#61DAFB",
            },
        ],
    },

    {
        id: 3,
        title: "7+ Days Inactive",
        icon: "history",
        color: "text-green-500",
        count: 24,
        tabs: [
            {
                id: 4,
                title: "Modern CSS Layouts",
                url: "css-tricks.com",
                icon: "language",
                color: "#E5E7EB",
            },
        ],
    },
];

export default inactiveTabs;