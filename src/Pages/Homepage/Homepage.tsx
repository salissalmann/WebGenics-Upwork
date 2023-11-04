import { motion } from "framer-motion"
import Navigation from "../../Components/Navigation";
import CounterSection from "../../Components/CounterSection";
import Services from "../../Components/Services";
import Offerings from "../../Components/OfferingSection";
import ReviewSection from "../../Components/ReviewSection";
import TechnicalSection from "../../Components/TechnicalBenfits";
import Projects from "../../Components/Projects";
import Steps from "../../Components/Steps";
import FAQs from "../../Components/FAQs";
import Footer from "../../Components/Footer";

export default function Homepage() {
    return (
        <>
            <motion.div
                initial={{ y: -1000, scale: 0.5 }}
                animate={{ y: 0, scale: 1 }}
                transition={{ duration: 0.75 }}
            >
                <Navigation />
            </motion.div>

            <div className="flex flex-col items-center justify-center font-oxygen self-stretch  w-full  max-md:max-w-full bg-cover bg-center bg-no-repeat bg-[url('/assets/Cover.png')] pb-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.75 }}
                >
                    <h1 className="text-5xl font-bold text-center text-white mt-20 pt-20 ">
                        We help companies
                        <br />
                        <span className="text-secondary-100">digitalize </span>
                        their businesses
                    </h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.75 }}
                >
                    <p className="text-center text-gray-100 font-oxygen text-xl mt-2 mb-4">
                        Properly Set Processes. Transparent Cooperation. Predictable Delivery
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.75 }}
                >
                    <button className="inline-flex items-center bg-secondary-100 border-0 text-white text-sm py-2 px-4 f rounded-2xl md:mt-0 mt-2">
                        Get in Touch
                    </button>
                </motion.div>
            </div >

            <CounterSection />
            <Services />
            <Offerings />
            <ReviewSection />
            <TechnicalSection />
            <Projects />
            <Steps />
            <FAQs />
            <Footer />







        </>
    )
}
