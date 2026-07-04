import React from 'react'

const Topbar = ( { isSidebarOpen }) => {
    return (
        <header className={`fixed top-0 right-0 z-30 hidden h-16 items-center justify-between bg-[#f8f9fa] px-8 shadow-sm transition-all duration-200 md:flex
        ${isSidebarOpen ? 'left-60' : 'left-20'}`}>
            {/* Search */}
            <div className='flex w-64 items-center rounded-full border border-[#c1c6d6] bg-[#f3f4f5] px-4 py-2'>
                <span className="material-symbols-outlined mr-2 text-[20px] text-[#727785]">
                    search
                </span>

                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full border-none bg-transparent p-0 text-body-md text-[#191c1d] outline-none placeholder:text-[#414754]"
                />
            </div>

            {/* Actions */}
            <div className='flex items-center gap-4 text-[#414754]'>
                <button
                    type='button'
                    className='flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-[#e1e3e4] hover:text-[#005bbf]'
                >
                    <span className="material-symbols-outlined">dark_mode</span>
                </button>
                <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-[#e1e3e4] hover:text-[#005bbf]"
                >
                    <span className="material-symbols-outlined">notifications</span>
                </button>
                <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-[#e1e3e4] hover:text-[#005bbf]"
                >
                    <span className="material-symbols-outlined">refresh</span>
                </button>

                <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-[#e1e3e4] hover:text-[#005bbf]"
                >
                    <span className="material-symbols-outlined">cloud_done</span>
                </button>
            </div>
        </header>
    )
}

export default Topbar