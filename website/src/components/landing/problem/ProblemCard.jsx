const ProblemCard = ( {icon, title}) => {
    return (
        <div className='flex flex-col gap-3 rounded-xl border border-[#c1c6d6] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md'>
            <span className='material-symbols-outlined text-3xl text-[#1A73E8]'>
                {icon}
            </span>

            <h3 className='text-sm font-bold text-[#191c1d]'>
                {title}
            </h3>
        </div> 
    )
}

export default ProblemCard;