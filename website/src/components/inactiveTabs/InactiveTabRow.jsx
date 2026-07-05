import InactiveTabActions from './InactiveTabAction';

const InactiveTabRow = ({tab}) => {
    return (
        <div className='group flex flex-col gap-4 border-b border-[#ececec] p-4 transition hover:bg-[#f8fafc] md:flex-row md:items-center md:justify-between'>

            {/* Left */}
            <div className="flex min-w-0 flex-1 items-center gap-4">
                <div 
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: tab.color }}>
                    <span className="material-symbols-outlined text-white">
                        {tab.icon}
                    </span>
                </div>

                <div>
                    <h4 className='truncate font-medium text-[#191c1d]'>
                        {tab.title}
                    </h4>

                    <p className='truncate text-sm text-[#6b7280]'>
                        {tab.url}
                    </p>
                </div>
            </div>

            {/* Right */}
            <InactiveTabActions />
        </div>
    )
}

export default InactiveTabRow;