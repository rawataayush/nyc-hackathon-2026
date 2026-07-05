import DuplicateHeader from '../../components/duplicateFinder/DuplicateHeader';
import DuplicateToolbar from '../../components/duplicateFinder/DuplicateToolbar';
import DuplicateGrid from '../../components/duplicateFinder/DuplicateGrid';

const DuplicateFinder = () => {
    return (
        <main className='ml-40 min-h-screen overflow-y-auto bg-[#fafafa] p-8 pt-24'>
            <div className='mx-auto max-w-7xl'>
                <DuplicateHeader />
                <DuplicateToolbar />
                <DuplicateGrid />
            </div>
        </main>
    )
}

export default DuplicateFinder;