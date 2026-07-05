const SortControls = () => {
    return (
        <select
            className='rounded-lg border border-[#c1c6d6] bg-white px-4 py-2 text-sm outline-none focus:border-[#1A73E8]'
            >
                <option>Newest First</option>
                <option>Oldest First</option>
                <option>A → Z</option>
                <option>Z → A</option>
        </select>
    )
}

export default SortControls;