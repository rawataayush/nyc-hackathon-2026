import conversations from './ConversationsData';
import ConversationItem from './ConversationItem';

const ConversationSidebar = () => {
    const groups = [...new Set(conversations.map((item) => item.group))];
    return (
        <aside className="hidden w-70 h-[calc(100vh-64px)] flex-col border-l border-[#c1c6d6] bg-[#f8f9fa] lg:flex">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#c1c6d6] p-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#191c1d]">
                    Recent Conversations
                </h3>

                <button className="rounded p-1 transition hover:bg-[#e3e2e6]">
                    <span className="material-symbols-outlined text-[20px] text-[#414754]">
                        add
                    </span>
                </button>
            </div>

            {/* Conversation List */}
            <div className="flex-1 overflow-y-auto p-2">
                {groups.map((group) => (
                    <div key={group} className="mb-5">
                        <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[#6b7280]">
                            {group}
                        </p>

                        <div className="space-y-1">
                            {conversations
                                .filter(
                                    (conversation) =>
                                        conversation.group === group
                                )
                                .map((conversation) => (
                                    <ConversationItem
                                        key={conversation.id}
                                        conversation={conversation}
                                    />
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    )
}

export default ConversationSidebar;