import { motion } from 'framer-motion'
import Footer from '../Components/Footer'
import Navigation from '../Components/Navigation'

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
                        To Guide you better we offer
                        <br />
                        <span className="text-secondary-100">Consultation </span>
                    </h1>
                </motion.div>
                <div className='w-2/3 mt-5'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.75 }}
                    >
                        <p className="text-center text-gray-100 font-oxygen text-md mt-2 mb-4">
                            We are a team of 50+ IT Professionals
                            The webgenics is focused on creating an environment where we can face your biggest challenges together and have a truly rewarding experience.
                        </p>
                    </motion.div>
                </div>
            </div >

            <section className="flex flex-col items-center justify-center text-gray-600 font-nunito">
                <div className="container px-2 py-12 mx-auto lg:w-3/4">


                </div>
            </section>

            <section className="w-full  max-md:max-w-full bg-cover bg-center bg-no-repeat bg-[url('/assets/Cover.png')] pb-20 mt-[-6rem]">
                <div className="py-3 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-primary">Designed for <span className='text-white font-nunito'>business teams like yours</span> </h2>
                        <p className="mb-5 font-light text-white font-nunito text-md">Here at Webgenics we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                    </div>
                    <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 rounded-lg border-4 border-secondary-300 shadow backdrop-blur-lg bg-white/10">
                            <h3 className="mb-4 text-3xl font-semibold text-white">Vital</h3>
                            <p className="font-light text-gray-500 sm:text-lg dark:text-white font-nunito">
                                30 Minutes of consultation (recommanded for small businesses)
                            </p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-5xl font-extrabold text-white">$100</span>
                                <span className="text-primary">/meeting</span>
                            </div>
                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span className='text-white font-nunito'>Website Analysis</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span className='text-white font-nunito'>Competitive Research</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span className='text-white font-nunito'>SEO Assessment</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span className='text-white font-nunito'>Recommandation Report</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span className='text-white font-nunito'>Follow-Up Meetings</span>
                                </li>
                            </ul>
                            <div className='flex justify-center'>
                                <button className="w-1/3 items-center bg-primary border-0 text-white text-sm py-2 px-4 f rounded-2xl md:mt-0 mt-2">
                                    Get Started
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 rounded-lg border-4 border-secondary-300 shadow backdrop-blur-lg bg-white/10">
                            <h3 className="mb-4 text-3xl font-semibold text-white">Elite</h3>
                            <p className="font-light text-gray-500 sm:text-lg dark:text-white font-nunito">
                                60 Minutes of consultation (recommanded for small businesses)
                            </p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-5xl font-extrabold text-white">$250</span>
                                <span className="text-primary">/meeting</span>
                            </div>
                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span className='text-white font-nunito'>Website Evaluation</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span className='text-white font-nunito'>UX Review</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span className='text-white font-nunito'>SEO Analysis</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span className='text-white font-nunito'>Security and Performance Checks</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span className='text-white font-nunito'>Content Stretegy</span>
                                </li>
                            </ul>
                            <div className='flex justify-center'>
                                <button className="w-1/3 items-center bg-primary border-0 text-white text-sm py-2 px-4 f rounded-2xl md:mt-0 mt-2">
                                    Get Started
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
