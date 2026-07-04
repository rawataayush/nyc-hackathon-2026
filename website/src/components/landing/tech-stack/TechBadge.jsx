const TechBadge = ({name}) => {
    return (
        <div className='rounded-full border border-[#c1c6d6] bg-white px-5 py-2 text-sm font-semibold text-[#191c1d] transition-all duration-300 hover:border-[#1A73E8] hover:bg-[#1A73E8] hover:text-white'>   
            {name}
        </div>
    )
}

export default TechBadge;