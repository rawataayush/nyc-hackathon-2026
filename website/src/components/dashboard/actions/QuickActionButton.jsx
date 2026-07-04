import React from 'react'

const QuickActionButton = ({ icon, title, variant}) => {
    const classes =
        variant === '#005bbf'
            ? 'bg-[#005bbf] text-[#191c1d] hover:bg-[#004493]'
            : 'bg-[#e3e2e6] text-[#646468] hover:bg-[#c1c6d6]'
    return (
        <button
            type='button'
            className={`flex w-full items-center gap-3 rounded-lg py-3 px-4 transition-colors ${classes}`}
            >
                <span className='material-symbols-outlined text-[20px]'>
                    {icon}
                </span>

                <span className='font-medium'>
                    {title}
                </span>
        </button>
    )
}

export default QuickActionButton