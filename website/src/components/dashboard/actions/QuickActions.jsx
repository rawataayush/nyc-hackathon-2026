import QuickActionButton from './QuickActionButton'
import quickActionsData from './QuickActionsData'

const QuickActions = () => {
    return (
        <section className='rounded-xl border borde-[#c1c6d6] bg-[#ffffff] p-6'>
            <h2 className='mb-4 text-2xl font-semibold text-[#191c1d]'>
                Quick Actions
            </h2>

            <div className='flex flex-col gap-3'>
                {quickActionsData.map((action) => (
                    <QuickActionButton
                        key={action.id}
                        icon={action.icon}
                        title={action.title}
                        variant={action.variant}
                    />
                ))}
            </div>
        </section>
    )
}

export default QuickActions