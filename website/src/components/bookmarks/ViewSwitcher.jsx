const ViewSwitcher = () => {
    return (
        <div className='flex overflow-hidden rounded-lg border border-[#c1c6d6]'>
            <button
                className='bg-[#1A73E8] px-3 py-2 text-white transition'
                title='List View'
            >
                <span className='material-symbols-outlined'>
                    view_list
                </span>
            </button>

            <button
                className='bg-white px-3 py-2 text-[#414754] transition hover:bg-[#f3f4f5]'
                title='Grid View'
            >
                <span className='material-symbols-outlined'>
                    grid_view
                </span>
            </button>

        </div>
    )
}

export default ViewSwitcher;