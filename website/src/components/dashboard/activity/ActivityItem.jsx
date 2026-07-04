

const ActivityItem = ({ icon, title, time}) => {
    return (
        <div className='flex items-center gap-3 rounded-lg px-2 py-3 transition-colors hover:bg-[#f3f4f5]'>
            <div className='flex h-8 w-8 items-center justify-center rounded-full bg-[#e7e8e9] text-[#414754]'>
                <span className='material-symbols-outlined text-[16px]'>
                    {icon}
                </span>
            </div>

            <div className='flex-1'>
                <p className='text-[14px] text-[#191c1d]'>
                    {title}
                </p>

                <p className="'text-[11px] text-[#414754]">
                    {time}
                </p>
            </div>
        </div>
        
    )
}

export default ActivityItem