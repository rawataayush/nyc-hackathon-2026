import KnowledgeWelcome from '../../components/knowledge/KnowledgeWelcome';
import ChatInput from '../../components/knowledge/ChatInput';
import ConversationSidebar from '../../components/knowledge/ConversationSidebar';

const KnowledgeBase = () => {
    return (
        <main className='ml-60 mt-14 flex h-[calc(100vh-64px)] overflow-hidden'>
            <section className='relative flex flex-1 flex-col bg-white px-6 pt-15 pb-65'>
                <KnowledgeWelcome />
                <ChatInput />
            </section>
            <ConversationSidebar />
</main>
    )
}

export default KnowledgeBase;