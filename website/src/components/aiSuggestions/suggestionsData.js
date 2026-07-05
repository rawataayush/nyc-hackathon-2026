const suggestions = [
    {
        id: 1,
        icon: 'timer_off',
        title: 'Archive 15 inactive tabs',
        description:
            "These tabs haven't been accessed in over 30 days. Archiving them will free up memory and reduce visual clutter.",
        impact: 'High Impact',
        impactColor: 'bg-red-100 text-red-700',
    },

    {
        id: 2,
        icon: 'content_copy',
        title: 'Merge similar bookmarks',
        description:
            "Found 4 groups of similar bookmarks across Dev Tools and React folders.",
        impact: 'Medium Impact',
        impactColor: 'bg-yellow-100 text-yellow-700',
    },

    {
        id: 3,
        icon: 'folder_special',
        title: 'Create Design Systems Collection',
        description:
            "You have 12 loose tabs related to UI/UX that can be grouped together.",
        impact: null,
    },

    {
        id: 4,
        icon: 'link_off',
        title: 'Remove 3 broken links',
        description:
            "Detected links that return 404 errors inside Read Later.",
        impact: 'Maintenance',
        impactColor: 'bg-blue-100 text-blue-700',
    },
];

export default suggestions;