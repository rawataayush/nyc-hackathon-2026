const ConversationItem = ({ conversation }) => {
    return (
        <button className='group flex w-full items-start gap-3 rounded-lg p-3 text-left transition hover:bg-[#f3f4f5]'>
            <span className='material-symbols-outlined mt-0.5 text-[18px] text-[#6b7280] transition group-hover:text-[#1A73E8]'>
                chat_bubble
            </span>

            <div className='min-w-0 flex-1'>
                <h4 className='truncate font-medium text-[#191c1d]'>
                    {conversation.title}
                </h4>

                <p className='truncate text-sm text-[#6b7280]'>
                    {conversation.subtitle}
                </p>
            </div>
        </button>
    )
}

export default ConversationItem;