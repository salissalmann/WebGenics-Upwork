import { motion } from "framer-motion";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Particles } from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import FAQs from "../../Components/FAQs";
import Footer from "../../Components/Footer";
import Navigation from "../../Components/Navigation";
import Offerings from "../../Components/OfferingSection";
import Projects from "../../Components/Projects";
import ReviewSection from "../../Components/ReviewSection";
import Services from "../../Components/Services";
import Steps from "../../Components/Steps";
import TechnicalSection from "../../Components/TechnicalBenfits";
export default function Homepage(this: any) {
    window.scrollTo(0, 0);

    const navigate = useNavigate()

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine)
    }, [])

    const particlesLoaded = useCallback(async () => { }, [])
    const staggerChildren = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5,
            },
        },
    };

    return (
        <>

            <Navigation />
            <div className="flex flex-col items-center justify-center font-oxygen self-stretch  w-full  max-md:max-w-full bg-cover bg-center bg-no-repeat bg-[url('/assets/Cover.png')] pb-20 h-[100vh] lg:h-[60vh]">
                <Particles
                    className="w-full h-full relative z-1"
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        fullScreen: { enable: false },
                        background: {
                            color: {
                                value: "transparent"
                            },
                        },
                        fpsLimit: 60,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: false,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 90,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#FF6363",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 2,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outMode: "bounce",
                                random: false,
                                speed: 2,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    value_area: 800,
                                },
                                value: 100,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                random: true,
                                value: 5,
                            },
                        },
                        detectRetina: true,
                    }}

                />
                <div className="absolute p-1 lg:p-0">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.75 }}
                    >
                        <h1 className="text-5xl font-bold text-center text-white mt-20 pt-24">
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
                    <div className="flex justify-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.75 }}
                        >
                            <button className="inline-flex items-center bg-secondary-100 border-0 text-white text-sm py-2 px-4 f rounded-2xl md:mt-0 mt-2"
                                onClick={() => navigate('/quotation')}
                            >
                                Get in Touch
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div >
            <div className="messageSlider">
                <p className="message text-center text-white font-oxygen text-md mt-2 mb-4">
                    "At our software house, we cherish open collaboration. Your active involvement in the project development journey is key. Together, we create exceptional software solutions tailored to your needs." 
                </p>
            </div>

            {/*

            <motion.section
                variants={staggerChildren}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >
                <CounterSection />
            </motion.section>
            */}



            <motion.section
                variants={staggerChildren}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >
                <Services />
            </motion.section>
            <motion.section
                variants={staggerChildren}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >
                <Offerings />
            </motion.section>

            <motion.section
                variants={staggerChildren}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >
                <ReviewSection />
            </motion.section>

            <motion.section
                variants={staggerChildren}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >
                <TechnicalSection />

            </motion.section>

            <motion.section
                variants={staggerChildren}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >
                <Projects />

            </motion.section>

            <motion.section
                variants={staggerChildren}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >
                <Steps />

            </motion.section>

            <motion.section
                variants={staggerChildren}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >
                <FAQs />

            </motion.section>


            <motion.section
                variants={staggerChildren}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >

                <Footer />

            </motion.section>






        </>
    )
}

