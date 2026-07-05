const DuplicateActions = () => {
    return (
        <div className='mt-6 flex gap-3 border-t border-[#ececec] pt-4'>
            <button className='flex-1 rounded-lg bg-[#1A73E8] py-2 font-medium text-white'>
                Keep Best
            </button>

            <button className='flex-1 rounded-lg bg-[#f3f4f5] py-2 font-medium'>
                Remov Duplicate
            </button>
        </div>
    )
}

export default DuplicateActions;