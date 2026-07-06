import NotificationCard from '../../components/notifications/NotificationCard';

const NotificationsList = ({notifications}) => {
    return (
        <div className='flex flex-col gap-4'>
            {notifications.map((notification) => (
                <NotificationCard 
                    key={notification.id}
                    notification={notification}
                />
            ))}
        </div>
    )
}

export default NotificationsList;