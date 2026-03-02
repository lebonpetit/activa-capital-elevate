import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@/assets/logo-acg.jpeg';

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);

    // You can extend this logic to listen to window.onload or specific image loads
    // For now, we simulate a loading time
    useEffect(() => {
        const handleLoad = () => {
            // Small delay for smooth transition even if load is instant
            setTimeout(() => setIsLoading(false), 800);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            // Fallback in case load event never fires or takes too long
            const timeout = setTimeout(handleLoad, 3000);
            return () => {
                window.removeEventListener('load', handleLoad);
                clearTimeout(timeout);
            };
        }
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="preloader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{
                            scale: [0.8, 1.1, 1],
                            opacity: 1,
                        }}
                        transition={{
                            duration: 1.5,
                            ease: "easeOut",
                            times: [0, 0.6, 1]
                        }}
                        className="relative"
                    >
                        {/* Glow effect behind logo */}
                        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150 animate-pulse" />

                        <img
                            src={logo}
                            alt="Activa Capital Group"
                            className="relative w-48 md:w-64 h-auto rounded-xl shadow-2xl shadow-primary/20"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="mt-8 flex items-center gap-2"
                    >
                        <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '300ms' }} />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
