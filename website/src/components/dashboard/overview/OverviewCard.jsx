const OverviewCard = ({icon, value, title}) => {
    return (
        <div className='group flex flex-col justify-between rounded-xl border border-[#c1c6d6] bg-[#ffffff] p-4 transition-colors hover:bg-[#f3f4f5]'>
            <div className='mb-4 flex items-start justify-between'>
                <span className='material-symbols-outlined text-[#005bbf]'>
                    {icon}
                </span>
            </div>

            <div>
                <h3 className='font-[20px] text-[20px] text-[#191c1d]'>
                    {value}
                </h3>

                <p className='mt-1 font-[12px] text-[12px] uppercase tracking-wider text-[#414754]'>
                    {title}
                </p>
            </div>
        </div>
    )
}

export default OverviewCard;