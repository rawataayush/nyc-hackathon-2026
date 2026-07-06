import { useState } from "react";


const DensityToggle = () => {
    
    const [density, setDensity] = useState('comfortable');

    return (
        <div className="flex gap-1 rounded-lg border border-[#c1c6d6] bg-[#f8fafc] p-1.5">
            <button
                onClick={()=> setDensity('comfortable')}
                className={`rounded-md px-4 py-2 text-sm font-medium transition ${
                    density === 'comfortable' 
                        ? 'bg-white text-[#1a73e8] shadow-sm' 
                        : 'text-[#6b7280] hover:bg-[#ececec]'
                    }`}
            >
                Comfortable
            </button>

            <button
                onClick={()=> setDensity('compact')}
                className={`rounded-md px-4 py-2 text-sm font-medium transition ${
                    density === 'compact'
                        ? 'bg-white text-[#1a73e8] shadow-sm'
                        : 'text-[#6b7280] hover:bg-[#ececec]'
                }`}
            >
                Compact
            </button>
        </div>
    )
}

export default DensityToggle;