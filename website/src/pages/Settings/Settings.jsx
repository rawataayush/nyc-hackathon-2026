import SettingsHeader from '../../components/settings/SettingsHeader';
import AppearanceSection from '../../components/settings/appearance/AppearanceSection';

const settings = () => {
    return (
        <main className='ml-0 md:ml-40 h-[calc(100vh-64px)] overflow-y-auto pt-16'>
            <div className='mx-auto max-w-4xl px-4 py-8 pb-24 md:px-8'>
                <SettingsHeader />
                <AppearanceSection />
            </div>
        </main>
    )
}

export default settings;