import NotificationsHeader from '../../components/notifications/NotificationsHeader';
import NotificationsList from '../../components/notifications/NotificationsList';
import notificationsData from '../../data/NotificationsData';

const Notifications = () => {
    return (
        <main className='mt-16 overflow-y-auto pb-24 md:ml-40'>
            <div className='mx-auto max-w-2xl px-4 py-6 md:px-8'>
                <NotificationsHeader />
                <NotificationsList 
                    notifications={notificationsData}
                />
            </div>
        </main>
    )
}

export default Notifications