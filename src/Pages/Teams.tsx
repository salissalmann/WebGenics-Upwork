import { motion } from 'framer-motion'
import Footer from '../Components/Footer'
import Navigation from '../Components/Navigation'
import Steps from '../Components/Steps'

export default function Teams() {
    return (
        <>
            <Navigation />
            <div className="flex flex-col items-center justify-center font-oxygen self-stretch  w-full  max-md:max-w-full bg-cover bg-center bg-no-repeat bg-[url('/assets/Cover2.png')] pb-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.75 }}
                >
                    <h1 className="text-5xl font-bold text-center text-white mt-20 pt-20 ">
                        Let's Start Your Business Transformation                        <br />
                        <span className="text-secondary-100">Together </span>
                    </h1>
                </motion.div>
                <div className='w-2/3 mt-5'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.75 }}
                    >
                        <p className="text-center text-gray-100 font-oxygen text-md mt-2 mb-4">
                            Webgenics is about partnership, reliability and finding the right solutions together.
                            With years of expertise, we’re ready to take on new projects and offer full-cycle custom software development services to your business                    </p>
                    </motion.div>
                </div>
            </div >

            <section className="flex flex-col items-center justify-center text-gray-600 font-nunito">
                <div className="container px-2 py-4 mt-9 mx-auto lg:w-3/4">
                    <div className="flex flex-col text-center w-full mb-4">
                        <h1
                            className="sm:text-3xl text-3xl font-medium title-font mb-4 text-secondary-300"
                        >
                            Core Competencies <span className="text-gray-900">Services</span>
                        </h1>
                    </div>

                    <img
                        src="/assets/Stats.png"
                        alt="Webgenics Logo"
                        className="w-full"
                    />
                </div>
            </section>


            <section className="flex items-center xl:h-screen font-poppins">
                <div className="justify-center flex-1 max-w-6xl px-4 py-6 mx-auto lg:py-0 lg:mt-[-5rem] md:px-6">
                    <div className="mb-10 text-center">
                        <span
                            className="block mb-2 text-xs font-semibold leading-4 tracking-widest text-center text-blue-500 uppercase">
                            Our Team
                        </span>
                        <h1 className="text-3xl font-bold capitalize dark:text-gray-900 mb-2">"Meet Our Leadership"</h1>
                        <span
                            className="block mb-4 text-xs font-semibold leading-4 tracking-widest text-center text-gray-600 uppercase">
                            The webgenics is focused on creating an environment where we can face your biggest challenges together and have a truly rewarding experience.
                        </span>

                    </div>
                    <div className="flex flex-wrap justify-center ">
                        <div className="w-full px-4 mb-32 lg:w-1/3 md:w-1/2 lg:mb-0">
                            <div className="relative">
                                <div className="w-full h-80">
                                    <img src="/assets/HaiderAli.png" alt=""
                                        className="object-cover w-full h-full rounded-full" />
                                </div>
                                <div
                                    className="absolute w-full p-6 text-center bg-blue-900 rounded-full lg:right-0 lg:-mt-16 lg:w-72">
                                    <h2 className="mb-1 text-lg font-bold text-gray-200 ">Haider Ali</h2>
                                    <p className="text-sm text-gray-300">Chief Business Officer [C.B.O]</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 mb-32 lg:w-1/3 md:w-1/2 lg:mb-0">
                            <div className="relative">
                                <div className="w-full h-80">
                                    <img src="/assets/TalhaHussain.png" alt=""
                                        className="object-cover w-full h-full rounded-full" />
                                </div>
                                <div
                                    className="absolute w-full p-6 text-center bg-blue-900 rounded-full lg:right-0 lg:-mt-16 lg:w-72">
                                    <h2 className="mb-1 text-lg font-bold text-gray-200 ">Talha Hussain</h2>
                                    <p className="text-sm text-gray-300">Chief Technology Officer [C.T.O]</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 mb-32 lg:w-1/3 md:w-1/2 lg:mb-0">
                            <div className="relative">
                                <div className="w-full h-80">
                                    <img src="/assets/AliAmmar.jpg" alt=""
                                        className="object-cover w-full h-full rounded-full" />
                                </div>
                                <div
                                    className="absolute w-full p-6 text-center bg-blue-900 rounded-full lg:right-0 lg:-mt-16 lg:w-72">
                                    <h2 className="mb-1 text-lg font-bold text-gray-200 ">Ali Ammar</h2>
                                    <p className="text-sm text-gray-300">Chief Operating Officer [C.O.O]</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <div className="flex flex-wrap -m-4">
                <div className="lg:w-1/2 sm:w-1/2 bg-secondary-300">
                    <div className={`relative z-10 w-full p-14 lg:p-24`}>
                        <h1 className={`tracking-widest text-4xl font-oxygen text-white mb-1`}>
                            Mission
                        </h1>
                        <p className={`leading-relaxed text-white font-nunito text-md mt-3`} >
                            We work with companies from various industries and strive to meet their software development and business automation demands. We provide businesses with our dedicated support and energy throughout every stage of our cooperation.The key to CleverDev Software’s success is in our people. From providing opportunities for professional development and growth to creating a positive and inclusive work environment, we're committed to investing in our employees' well-being. We value our team because we believe that happy employees create happy customers.Our inventive enthusiasm, expertise, and competence in all aspects of development and automation enable us to deliver streamlined customized solutions that remove barriers to our clients' business growth.
                        </p>
                    </div>
                </div>
                <div className="lg:w-1/2 sm:w-1/2">
                    <div className={`relative z-10 w-full`}>
                        <img
                            src="/assets/Team1.png"
                            alt="Webgenics Logo"
                            className="w-full"
                        />
                    </div>
                </div>
                <div className="lg:w-1/2 sm:w-1/2">
                    <div className={`relative z-10 w-full`}>
                        <img
                            src="/assets/Team2.png"
                            alt="Webgenics Logo"
                            className="w-full"
                        />
                    </div>
                </div>

                <div className="lg:w-1/2 sm:w-1/2 bg-secondary-300">
                    <div className={`relative z-10 w-full p-14 lg:p-24`}>
                        <h1 className={`tracking-widest text-3xl font-oxygen text-white mb-1`}>
                            Vision
                        </h1>
                        <p className={`leading-relaxed text-white font-nunito text-md mt-3 mb-5`} >
                            We are a successful software development and business automation company creating quality solutions, always with actual client needs in mind.
                        </p>
                        <h1 className={`tracking-widest text-3xl font-oxygen text-white mb-1`}>
                            Our Values
                        </h1>
                        <li
                            className={`leading-relaxed text-white font-nunito text-md mt-3`}
                        >
                            Fostering respect and commitment within the company
                        </li>
                        <li
                            className={`leading-relaxed text-white font-nunito text-md mt-3`}
                        >
                            Striving for quality, transparency, and diligence at all levels
                        </li>
                        <li
                            className={`leading-relaxed text-white font-nunito text-md mt-3`}
                        >
                            Customer centricity at the heart of all processes
                        </li>
                        <li
                            className={`leading-relaxed text-white font-nunito text-md mt-3`}
                        >
                            Cultivating accountability and integrity with aligned team vision
                        </li>
                        <li
                            className={`leading-relaxed text-white font-nunito text-md mt-3`}
                        >
                            Delivering unsurpassed value to customers
                        </li>
                        <li
                            className={`leading-relaxed text-white font-nunito text-md mt-3`}
                        >
                            Putting people over processes
                        </li>
                    </div>
                </div>

            </div>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-12 mx-auto">
                    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-secondary-300 mb-8" viewBox="0 0 975.036 975.036">
                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                        </svg>
                        <p className="leading-relaxed text-lg">Webgenics IT Solutions is your comprehensive digital solution platform.
                            Your digital business needs the right technology to enable it to be flexible, secure and agile.
                            First we define your desired business outcomes and uncover the true state of your digital business.
                            We can then help you understand the benefits of a future digital strategy so that together we create a vision for the future and a transformation roadmap.</p>
                        <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
                    </div>
                </div>
            </section>

            <Steps />

            <Footer />
        </>
    )
}
