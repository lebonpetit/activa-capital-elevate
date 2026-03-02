import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";

const FAQ = () => {
    return (
        <>
            <Header />
            <main className="pt-24 pb-16 min-h-screen">
                <FAQSection />
            </main>
            <Footer />
        </>
    );
};

export default FAQ;
