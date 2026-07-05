import { useState } from 'react';
import TabItem from './TabItem';

const TabGroupCard = ({group}) => {

    const [collapsed, setCollapsed] = useState(false);

    const visibleTabs = collapsed ? [] : group.tabs.slice(0, 3);

    const remainingTabs = group.hiddenTabs;

    return (
        <div className='flex flex-col rounded-xl border border-[#c1c6d6] bg-white p-4 shadow-sm transition-all hover:shadow-md'>

            {/* Header */}
            <div className='mb-4 flex items-start justify-between border-b border-[#ececec] pb-4'>
                <div>
                    <h3 className='flex items-center gap-2 text-lg font-semibold text-[#191c1d]'>
                        {group.title}

                        <span className='rounded bg-[#f3f4f5] px-2 py-0.5 text-xs text-[#414754]'>
                            {group.totalTabs} tabs
                        </span>
                    </h3>

                    <p className='mt-1 text-xs text-[#6b7280]'>
                        Last updated {group.updatedAt}
                    </p>
                </div>
                <div className='flex gap-1'>
                    <button className='rounded p-1.5 transition hover:bg-[#f3f4f5]'>
                        <span className='material-symbols-outlined text-[20px]'>
                            drive_file_move
                        </span>
                    </button>

                    <button
                        onClick={()=> setCollapsed(!collapsed)}
                        className='rounded p-1.5 transition hover:bg-[#f3f4f5]'
                    >
                        <span className='material-symbols-outlined text-[20px]'>
                            {collapsed ? 'expand_more' : 'expand_less'}
                        </span>
                    </button>
                </div>
            </div>

            {/* Tabs */}
            <div className='flex-1 space-y-1'>
                {visibleTabs.map(tab => (
                    <TabItem 
                        key={tab.id}
                        tab={tab}
                    />
                ))}
            </div>
            {remainingTabs > 0 && !collapsed && (
                <button className='mt-3 text-center text-sm font-medium text-[#1a73e8] hover:underline'>
                    Show {remainingTabs} more tabs
                </button>
            )}
        </div>
    )
}

export default TabGroupCard;