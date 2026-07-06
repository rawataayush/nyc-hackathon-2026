import InactiveTabsHeader from '../../components/inactiveTabs/InactiveTabsHeader';
import InactiveSummaryCards from '../../components/inactiveTabs/InactiveSummaryCards';
import InactiveTabSection from '../../components/inactiveTabs/InactiveTabSection';

import inactiveTabsData from '../../data/InactiveTabsData';

const InactiveTabs = () => {
    return (
        <main className='min-h-screen bg-[#fafafa] px-4 pb-10 pt-24 md:ml-40 md:px-8'>
            <div className='mx-auto max-w-7xl'>
                <InactiveTabsHeader />
                <InactiveSummaryCards />

                <div className='space-y-10'>
                    {inactiveTabsData.map((section) => (
                        <InactiveTabSection
                        key={section.id}
                        section={section}
                    />
                    ))}

                </div>
            </div>
        </main>
    )
}

export default InactiveTabs