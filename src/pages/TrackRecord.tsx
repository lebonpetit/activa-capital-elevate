import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrackRecordSection from "@/components/TrackRecordSection";

const TrackRecord = () => {
    return (
        <>
            <Header />
            <main className="pt-24 pb-16 min-h-screen">
                <TrackRecordSection />
            </main>
            <Footer />
        </>
    );
};

export default TrackRecord;
