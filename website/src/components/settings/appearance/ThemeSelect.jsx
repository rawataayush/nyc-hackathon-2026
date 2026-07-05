const ThemeSelect = () => {
    return (
        <div className="relative w-full md:w-44">
            <select className="w-full cursor-pointer appearance-none rounded-lg border border-[#c1c6d6] bg-[#f8fafc] px-4 py-2.5 pr-10 text-[#191c1d] outline-none transition focus:border-[#1a73e8]">
                <option>System Default</option>
                <option>Light</option>
                <option>Dark</option>
            </select>

            <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#6b7280]">
                arrow_drop_down
            </span>
        </div>
    )
}

export default ThemeSelect;