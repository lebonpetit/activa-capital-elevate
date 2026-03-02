import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadershipSection from "@/components/LeadershipSection";

const Leadership = () => {
    return (
        <>
            <Header />
            <main className="pt-24 pb-16 min-h-screen">
                <LeadershipSection />
            </main>
            <Footer />
        </>
    );
};

export default Leadership;
