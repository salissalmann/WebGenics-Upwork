import { useEffect } from 'react';
import Footer from '../Components/Footer';
import Navigation from '../Components/Navigation';

export default function Portfolio() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    return (
        <>
            <Navigation />

            <section className="py-16 bg-gray-100 font-poppins ">
                <div className="justify-center flex-1 max-w-5xl px-4 py-4 mx-auto lg:py-10 md:px-7">
                    <div className="max-w-xl mx-auto">
                        <div className="text-center border-b-2 border-primary">
                            <div className="relative flex flex-col items-center ">
                                <div
                                    className="absolute hidden md:block -top-14 left-0 text-[120px] text-gray-400 font-bold opacity-10">
                                    Portfolio
                                </div>
                                <h1 className="text-5xl font-bold dark:text-secondary-300"> Port<span className="text-primary">folio
                                </span> </h1>
                                <div className="flex w-24 mt-1 mb-10 overflow-hidden rounded">
                                    <div className="flex-1 h-2 bg-primary">
                                    </div>
                                    <div className="flex-1 h-2 bg-blue-400">
                                    </div>
                                    <div className="flex-1 h-2 bg-blue-500">
                                    </div>
                                </div>
                            </div>
                            <p className="mb-16 text-base text-center text-gray-500">
                                We are a team of professional and enthusiastic people, who like what they do and are always in the process of growing and improving their skills.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='lg:w-[80%]'>
                        <section className="flex items-center bg-gray-100 font-poppin">
                            <div className="container justify-center flex-1 px-4 py-2 mx-auto text-left ">
                                <div className="mx-auto max-w-7xl py-8">
                                    <h2 className="pb-4 text-4xl font-bold text-center text-gray-900">
                                        PrintMate
                                    </h2>
                                    <p className="text-base text-gray-800 text-center mb-2">
                                        PrintMate is a printing company that provides printing services for all types of printing products. The company has been operating in the market for more than 10 years and has a large number of regular customers.
                                    </p>
                                    <div className='flex justify-center'>
                                        <a className="text-base text-gray-800 text-center mb-3" href="https://www.printmate.uk/">
                                            https://www.printmate.uk
                                        </a>
                                    </div>

                                    <div className="mx-auto mb-16 border-b border-red-700 w-44 dark:border-gray-400"></div>
                                    <div className="flex flex-wrap self-start gap-5">
                                        <div className="w-full lg:w-1/5 md:w-full lg:mb-0">
                                            <div className="relative mb-6 overflow-hidden rounded-md shadow-md group">
                                                <img src="/assets/PrintMate1.png"
                                                    className="group-hover:origin-center group-hover:scale-110 object-cover object-left-top group-hover:rotate-3 h-[300px] w-full transition duration-500"
                                                    alt="" />
                                                <div
                                                    className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0">
                                                </div>
                                                <div>
                                                    <div className="absolute z-10 hidden group-hover:block top-4 right-4">
                                                        <a href="#"
                                                            className="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z">
                                                                </path>
                                                                <path
                                                                    d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z">
                                                                </path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                                                        <a
                                                            className="text-lg font-medium text-white transition duration-500 hover:text-blue-300">
                                                            Landing Page</a>
                                                        <p className="mb-0 text-xs text-gray-300">
                                                            Asthetic Page
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative overflow-hidden rounded-md shadow-md group">
                                                <img src="/assets/PrintMate2.png"
                                                    className="group-hover:origin-center group-hover:scale-110 object-cover object-left-top group-hover:rotate-3 h-[300px] w-full transition duration-500"
                                                    alt="" />
                                                <div
                                                    className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0">
                                                </div>
                                                <div>
                                                    <div className="absolute z-10 hidden group-hover:block top-4 right-4">
                                                        <a href="#"
                                                            className="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z">
                                                                </path>
                                                                <path
                                                                    d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z">
                                                                </path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                                                        <a
                                                            className="text-lg font-medium text-white transition duration-500 hover:text-blue-300">
                                                            Product Page</a>
                                                        <p className="mb-0 text-xs text-gray-300">
                                                            Products display by categories
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-full lg:w-1/2 lg:mb-0">
                                            <div className="relative overflow-hidden rounded-md shadow-md group">
                                                <img src="/assets/PrintMate3.png"
                                                    className="group-hover:origin-center group-hover:scale-110 object-cover object-left-top group-hover:rotate-3 h-[625px] w-full transition duration-500"
                                                    alt="" />
                                                <div
                                                    className="absolute inset-0 h-[620px] group-hover:bg-black opacity-50 transition duration-500 z-0">
                                                </div>
                                                <div>
                                                    <div className="absolute z-10 hidden group-hover:block top-4 right-4">
                                                        <a href="#"
                                                            className="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z">
                                                                </path>
                                                                <path
                                                                    d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z">
                                                                </path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                                                        <a
                                                            className="text-lg font-medium text-white transition duration-500 hover:text-blue-300">
                                                            Product View with Form</a>
                                                        <p className="mb-0 text-xs text-gray-300">
                                                            Product view with form to order
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full mb-10 lg:w-1/5 md:w-full lg:mb-0">
                                            <div className="relative mb-6 overflow-hidden rounded-md shadow-md group">
                                                <img src="/assets/PrintMate4.png"
                                                    className="group-hover:origin-center group-hover:scale-110 object-cover object-center  group-hover:rotate-3 h-[300px] w-full transition duration-500"
                                                    alt="" />
                                                <div
                                                    className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0">
                                                </div>
                                                <div>
                                                    <div className="absolute z-10 hidden group-hover:block top-4 right-4">
                                                        <a href="#"
                                                            className="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z">
                                                                </path>
                                                                <path
                                                                    d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z">
                                                                </path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                                                        <a
                                                            className="text-lg font-medium text-white transition duration-500 hover:text-blue-300">
                                                            Contact Page</a>
                                                        <p className="mb-0 text-xs text-gray-300">
                                                            Contact Page with map
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative mb-6 overflow-hidden rounded-md shadow-md group">
                                                <img src="/assets/PrintMate5.png"
                                                    className="group-hover:origin-center object-cover object-left-top group-hover:scale-110 group-hover:rotate-3 h-[300px] w-full transition duration-500"
                                                    alt="" />
                                                <div
                                                    className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0">
                                                </div>
                                                <div>
                                                    <div className="absolute z-10 hidden group-hover:block top-4 right-4">
                                                        <a href="#"
                                                            className="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z">
                                                                </path>
                                                                <path
                                                                    d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z">
                                                                </path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                                                        <a
                                                            className="text-lg font-medium text-white transition duration-500 hover:text-blue-300">
                                                            Featured Products</a>
                                                        <p className="mb-0 text-xs text-gray-300">
                                                            Sale Products
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>


                <div className='flex justify-center'>
                    <div className='lg:w-[80%]'>
                        <section className="flex items-center bg-gray-100 font-poppin">
                            <div className="container justify-center flex-1 px-4 py-2 mx-auto text-left ">
                                <div className="mx-auto max-w-7xl py-8">
                                    <h2 className="pb-4 text-4xl font-bold text-center text-gray-900">
                                        Heritage Hides
                                    </h2>
                                    <p className="text-base text-gray-800 text-center mb-3">
                                        Heritage Hides is leather goods and apparel brand with a love for adventure and a dedication to choosing a simpler way of living. We honor the lost craft of learning a new trade and hard work earned with your hands. That’s why we aim to provide men and women a brand that adds quality to your everyday experiences.
                                    </p>
                                    <div className='flex justify-center'>
                                        <a className="text-base text-gray-800 text-center mb-3" href="https://www.heritagehides.com/">
                                            https://www.heritagehides.com
                                        </a>
                                    </div>

                                    <div className="mx-auto mb-16 border-b border-red-700 w-44 dark:border-gray-400"></div>
                                    <div className="flex flex-wrap self-start gap-5">
                                        <div className="w-full lg:w-1/5 md:w-full lg:mb-0">
                                            <div className="relative mb-6 overflow-hidden rounded-md shadow-md group">
                                                <img src="/assets/Heritage1.png"
                                                    className="group-hover:origin-center group-hover:scale-110 object-cover object-left-top group-hover:rotate-3 h-[300px] w-full transition duration-500"
                                                    alt="" />
                                                <div
                                                    className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0">
                                                </div>
                                                <div>
                                                    <div className="absolute z-10 hidden group-hover:block top-4 right-4">
                                                        <a href="#"
                                                            className="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z">
                                                                </path>
                                                                <path
                                                                    d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z">
                                                                </path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                                                        <a
                                                            className="text-lg font-medium text-white transition duration-500 hover:text-blue-300">
                                                            Landing Page</a>
                                                        <p className="mb-0 text-xs text-gray-300">
                                                            Asthetic Page
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative overflow-hidden rounded-md shadow-md group">
                                                <img src="/assets/Heritage2.png"
                                                    className="group-hover:origin-center group-hover:scale-110 object-cover object-left-top group-hover:rotate-3 h-[300px] w-full transition duration-500"
                                                    alt="" />
                                                <div
                                                    className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0">
                                                </div>
                                                <div>
                                                    <div className="absolute z-10 hidden group-hover:block top-4 right-4">
                                                        <a href="#"
                                                            className="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z">
                                                                </path>
                                                                <path
                                                                    d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z">
                                                                </path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                                                        <a
                                                            className="text-lg font-medium text-white transition duration-500 hover:text-blue-300">
                                                            Product Page</a>
                                                        <p className="mb-0 text-xs text-gray-300">
                                                            Products display by categories
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-full lg:w-1/2 lg:mb-0">
                                            <div className="relative overflow-hidden rounded-md shadow-md group">
                                                <img src="/assets/Heritage3.png"
                                                    className="group-hover:origin-center group-hover:scale-110 object-cover object-left-top group-hover:rotate-3 h-[625px] w-full transition duration-500"
                                                    alt="" />
                                                <div
                                                    className="absolute inset-0 h-[620px] group-hover:bg-black opacity-50 transition duration-500 z-0">
                                                </div>
                                                <div>
                                                    <div className="absolute z-10 hidden group-hover:block top-4 right-4">
                                                        <a href="#"
                                                            className="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z">
                                                                </path>
                                                                <path
                                                                    d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z">
                                                                </path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                                                        <a
                                                            className="text-lg font-medium text-white transition duration-500 hover:text-blue-300">
                                                            Product View with Form</a>
                                                        <p className="mb-0 text-xs text-gray-300">
                                                            Product view with form to order
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full mb-10 lg:w-1/5 md:w-full lg:mb-0">
                                            <div className="relative mb-6 overflow-hidden rounded-md shadow-md group">
                                                <img src="/assets/Heritage4.png"
                                                    className="group-hover:origin-center group-hover:scale-110 object-cover object-center  group-hover:rotate-3 h-[300px] w-full transition duration-500"
                                                    alt="" />
                                                <div
                                                    className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0">
                                                </div>
                                                <div>
                                                    <div className="absolute z-10 hidden group-hover:block top-4 right-4">
                                                        <a href="#"
                                                            className="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z">
                                                                </path>
                                                                <path
                                                                    d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z">
                                                                </path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                                                        <a
                                                            className="text-lg font-medium text-white transition duration-500 hover:text-blue-300">
                                                            Contact Page</a>
                                                        <p className="mb-0 text-xs text-gray-300">
                                                            Contact Page with map
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative mb-6 overflow-hidden rounded-md shadow-md group">
                                                <img src="/assets/Heritage5.png"
                                                    className="group-hover:origin-center object-cover object-left-top group-hover:scale-110 group-hover:rotate-3 h-[300px] w-full transition duration-500"
                                                    alt="" />
                                                <div
                                                    className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0">
                                                </div>
                                                <div>
                                                    <div className="absolute z-10 hidden group-hover:block top-4 right-4">
                                                        <a href="#"
                                                            className="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z">
                                                                </path>
                                                                <path
                                                                    d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z">
                                                                </path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                                                        <a
                                                            className="text-lg font-medium text-white transition duration-500 hover:text-blue-300">
                                                            Featured Products</a>
                                                        <p className="mb-0 text-xs text-gray-300">
                                                            Sale Products
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className='lg:w-[80%]'>
                        <section className="flex items-center bg-gray-100 font-poppin">
                            <div className="container justify-center flex-1 px-4 py-2 mx-auto text-left ">
                                <div className="mx-auto max-w-7xl py-8">
                                    <h2 className="pb-4 text-4xl font-bold text-center text-gray-900">
                                        Plates N Keys For Cars
                                    </h2>
                                    <p className="text-base text-gray-800 text-center mb-3">
                                        They offer a wide range of number plates, made of high quality materials. They also offer Standard / 4D / Private number plates with accessories.
                                    </p>
                                    <div className='flex justify-center'>
                                        <a className="text-base text-gray-800 text-center mb-3" href="https://platenkeys4cars.co.uk/">
                                            https://platenkeys4cars.co.uk
                                        </a>
                                    </div>

                                    <div className="mx-auto mb-16 border-b border-red-700 w-44 dark:border-gray-400"></div>
                                    <div className="flex flex-wrap self-start gap-5">
                                        <div className="w-full lg:w-1/5 md:w-full lg:mb-0">
                                            <div className="relative mb-6 overflow-hidden rounded-md shadow-md group">
                                                <img src="/assets/Pk1.png"
                                                    className="group-hover:origin-center group-hover:scale-110 object-cover object-left-top group-hover:rotate-3 h-[300px] w-full transition duration-500"
                                                    alt="" />
                                                <div
                                                    className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0">
                                                </div>
                                                <div>
                                                    <div className="absolute z-10 hidden group-hover:block top-4 right-4">
                                                        <a href="#"
                                                            className="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z">
                                                                </path>
                                                                <path
                                                                    d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z">
                                                                </path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                                                        <a
                                                            className="text-lg font-medium text-white transition duration-500 hover:text-blue-300">
                                                            Landing Page</a>
                                                        <p className="mb-0 text-xs text-gray-300">
                                                            Asthetic Page
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative overflow-hidden rounded-md shadow-md group">
                                                <img src="/assets/Pk2.png"
                                                    className="group-hover:origin-center group-hover:scale-110 object-cover object-left-top group-hover:rotate-3 h-[300px] w-full transition duration-500"
                                                    alt="" />
                                                <div
                                                    className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0">
                                                </div>
                                                <div>
                                                    <div className="absolute z-10 hidden group-hover:block top-4 right-4">
                                                        <a href="#"
                                                            className="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z">
                                                                </path>
                                                                <path
                                                                    d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z">
                                                                </path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                                                        <a
                                                            className="text-lg font-medium text-white transition duration-500 hover:text-blue-300">
                                                            Product Page</a>
                                                        <p className="mb-0 text-xs text-gray-300">
                                                            Products display by categories
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-full lg:w-1/2 lg:mb-0">
                                            <div className="relative overflow-hidden rounded-md shadow-md group">
                                                <img src="/assets/Pk3.png"
                                                    className="group-hover:origin-center group-hover:scale-110 object-cover object-left-top group-hover:rotate-3 h-[625px] w-full transition duration-500"
                                                    alt="" />
                                                <div
                                                    className="absolute inset-0 h-[620px] group-hover:bg-black opacity-50 transition duration-500 z-0">
                                                </div>
                                                <div>
                                                    <div className="absolute z-10 hidden group-hover:block top-4 right-4">
                                                        <a href="#"
                                                            className="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z">
                                                                </path>
                                                                <path
                                                                    d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z">
                                                                </path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                                                        <a
                                                            className="text-lg font-medium text-white transition duration-500 hover:text-blue-300">
                                                            Product View with Form</a>
                                                        <p className="mb-0 text-xs text-gray-300">
                                                            Product view with form to order
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full mb-10 lg:w-1/5 md:w-full lg:mb-0">
                                            <div className="relative mb-6 overflow-hidden rounded-md shadow-md group">
                                                <img src="/assets/Pk4.png"
                                                    className="group-hover:origin-center group-hover:scale-110 object-cover object-center  group-hover:rotate-3 h-[300px] w-full transition duration-500"
                                                    alt="" />
                                                <div
                                                    className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0">
                                                </div>
                                                <div>
                                                    <div className="absolute z-10 hidden group-hover:block top-4 right-4">
                                                        <a href="#"
                                                            className="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z">
                                                                </path>
                                                                <path
                                                                    d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z">
                                                                </path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                                                        <a
                                                            className="text-lg font-medium text-white transition duration-500 hover:text-blue-300">
                                                            Contact Page</a>
                                                        <p className="mb-0 text-xs text-gray-300">
                                                            Contact Page with map
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative mb-6 overflow-hidden rounded-md shadow-md group">
                                                <img src="/assets/Pk5.png"
                                                    className="group-hover:origin-center object-cover object-left-top group-hover:scale-110 group-hover:rotate-3 h-[300px] w-full transition duration-500"
                                                    alt="" />
                                                <div
                                                    className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0">
                                                </div>
                                                <div>
                                                    <div className="absolute z-10 hidden group-hover:block top-4 right-4">
                                                        <a href="#"
                                                            className="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z">
                                                                </path>
                                                                <path
                                                                    d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z">
                                                                </path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                                                        <a
                                                            className="text-lg font-medium text-white transition duration-500 hover:text-blue-300">
                                                            Featured Products</a>
                                                        <p className="mb-0 text-xs text-gray-300">
                                                            Sale Products
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className='lg:w-[80%]'>
                        <section className="flex items-center bg-gray-100 font-poppin">
                            <div className="container justify-center flex-1 px-4 py-2 mx-auto text-left ">
                                <div className="mx-auto max-w-7xl py-8">
                                    <h2 className="pb-4 text-4xl font-bold text-center text-gray-900">
                                        PreMed
                                    </h2>
                                    <p className="text-base text-gray-800 text-center mb-3">
                                        PreMed is a website that helps students to prepare for their medical exams. It offers a wide range of MCQs and other materials to help students.
                                    </p>
                                    <div className='flex justify-center'>
                                        <a className="text-base text-gray-800 text-center mb-3" href="https://premed.pk/">
                                            https://premed.pk
                                        </a>
                                    </div>

                                    <div className="mx-auto mb-16 border-b border-red-700 w-44 dark:border-gray-400"></div>
                                    <div className="flex flex-wrap self-start gap-5">
                                        <div className="w-full lg:w-1/5 md:w-full lg:mb-0">
                                            <div className="relative mb-6 overflow-hidden rounded-md shadow-md group">
                                                <img src="/assets/Premed1.png"
                                                    className="group-hover:origin-center group-hover:scale-110 object-cover object-left-top group-hover:rotate-3 h-[300px] w-full transition duration-500"
                                                    alt="" />
                                                <div
                                                    className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0">
                                                </div>
                                                <div>
                                                    <div className="absolute z-10 hidden group-hover:block top-4 right-4">
                                                        <a href="#"
                                                            className="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z">
                                                                </path>
                                                                <path
                                                                    d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z">
                                                                </path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                                                        <a
                                                            className="text-lg font-medium text-white transition duration-500 hover:text-blue-300">
                                                            Landing Page</a>
                                                        <p className="mb-0 text-xs text-gray-300">
                                                            Asthetic Page
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative overflow-hidden rounded-md shadow-md group">
                                                <img src="/assets/Premed2.png"
                                                    className="group-hover:origin-center group-hover:scale-110 object-cover object-left-top group-hover:rotate-3 h-[300px] w-full transition duration-500"
                                                    alt="" />
                                                <div
                                                    className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0">
                                                </div>
                                                <div>
                                                    <div className="absolute z-10 hidden group-hover:block top-4 right-4">
                                                        <a href="#"
                                                            className="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z">
                                                                </path>
                                                                <path
                                                                    d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z">
                                                                </path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                                                        <a
                                                            className="text-lg font-medium text-white transition duration-500 hover:text-blue-300">
                                                            Product Page</a>
                                                        <p className="mb-0 text-xs text-gray-300">
                                                            Products display by categories
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-full lg:w-1/2 lg:mb-0">
                                            <div className="relative overflow-hidden rounded-md shadow-md group">
                                                <img src="/assets/Premed3.png"
                                                    className="group-hover:origin-center group-hover:scale-110 object-cover object-left-top group-hover:rotate-3 h-[625px] w-full transition duration-500"
                                                    alt="" />
                                                <div
                                                    className="absolute inset-0 h-[620px] group-hover:bg-black opacity-50 transition duration-500 z-0">
                                                </div>
                                                <div>
                                                    <div className="absolute z-10 hidden group-hover:block top-4 right-4">
                                                        <a href="#"
                                                            className="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z">
                                                                </path>
                                                                <path
                                                                    d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z">
                                                                </path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                                                        <a
                                                            className="text-lg font-medium text-white transition duration-500 hover:text-blue-300">
                                                            Product View with Form</a>
                                                        <p className="mb-0 text-xs text-gray-300">
                                                            Product view with form to order
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full mb-10 lg:w-1/5 md:w-full lg:mb-0">
                                            <div className="relative mb-6 overflow-hidden rounded-md shadow-md group">
                                                <img src="/assets/Premed4.png"
                                                    className="group-hover:origin-center group-hover:scale-110 object-cover object-center  group-hover:rotate-3 h-[300px] w-full transition duration-500"
                                                    alt="" />
                                                <div
                                                    className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0">
                                                </div>
                                                <div>
                                                    <div className="absolute z-10 hidden group-hover:block top-4 right-4">
                                                        <a href="#"
                                                            className="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z">
                                                                </path>
                                                                <path
                                                                    d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z">
                                                                </path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                                                        <a
                                                            className="text-lg font-medium text-white transition duration-500 hover:text-blue-300">
                                                            Contact Page</a>
                                                        <p className="mb-0 text-xs text-gray-300">
                                                            Contact Page with map
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative mb-6 overflow-hidden rounded-md shadow-md group">
                                                <img src="/assets/Premed5.png"
                                                    className="group-hover:origin-center object-cover object-left-top group-hover:scale-110 group-hover:rotate-3 h-[300px] w-full transition duration-500"
                                                    alt="" />
                                                <div
                                                    className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0">
                                                </div>
                                                <div>
                                                    <div className="absolute z-10 hidden group-hover:block top-4 right-4">
                                                        <a href="#"
                                                            className="text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 btn-icon lightbox">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                                fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z">
                                                                </path>
                                                                <path
                                                                    d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z">
                                                                </path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                                                        <a
                                                            className="text-lg font-medium text-white transition duration-500 hover:text-blue-300">
                                                            Featured Products</a>
                                                        <p className="mb-0 text-xs text-gray-300">
                                                            Sale Products
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>


            </section>

            <Footer />
        </>
    )
}
