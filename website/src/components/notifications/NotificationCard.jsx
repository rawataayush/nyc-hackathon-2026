const NotificationCard = ({notification}) => {
    return (
        <div className="flex items-start gap-4 px-5 py-3 rounded-xl border border-[#c1c6d6]">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                style={{
                    backgroundColor: notification.iconBg
                }}>
                    <span className="material-symbols-outlined text-[18px]"
                    style={{
                        color: notification.iconColor,
                    }}>
                        {notification.icon}
                    </span>
            </div>
                <div className="flex-1">
                <div className="mb-1 flex items-baseline justify-between gap-4">
                    <h3 className="font-semibold text-[#191c1d]">
                        {notification.title}
                    </h3>

                    <span className="shrink-0 text-sm text-[#6b7280]">
                        {notification.time}
                    </span>
                </div>

                <p className="text-sm text-[#6b7280]">
                    {notification.description}
                </p>

                {notification.action && (
                    <button className="mt-3 text-sm font-medium text-[#1A73E8] transition hover:underline">
                        {notification.action}
                    </button>
                )}
            </div>
        </div>
    )
}

export default NotificationCard;