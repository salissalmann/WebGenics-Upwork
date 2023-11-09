import { useState, useEffect } from "react";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";

export default () => {


    return (
        <>
            <div className="bg-gray-900">
                <section className="relative">
                    <Navigation />
                    <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8 h-1/2">
                        <div className="space-y-10 max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl text-white font-extrabold mx-auto md:text-5xl mt-3">
                                We Offer 3D/4D Animations To Boost your Business
                            </h2>
                            <p className="max-w-2xl mx-auto text-gray-400">
                                We create 3D/4D animations for your business. We can create animations for your website, app, or any other project you have in mind.
                                Our team of experts will work with you to understand the vision and goals for your business.
                            </p>
                            <form
                                onSubmit={(e) => e.preventDefault()}
                                className="justify-center items-center gap-x-3 sm:flex">
                                <button className="flex items-center justify-center gap-x-2 py-2.5 px-4 mt-3 w-full text-sm text-white font-medium bg-primary hover:bg-sky-400 active:bg-sky-600 duration-150 rounded-lg sm:mt-0 sm:w-auto">
                                    Get in touch
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </form>
                            <div className="flex justify-center items-center gap-x-4 text-gray-400 text-sm">
                                <div className="flex">
                                    <svg className="w-5 h-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" /></svg>
                                    <svg className="w-5 h-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" /></svg>
                                    <svg className="w-5 h-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" /></svg>
                                    <svg className="w-5 h-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" /></svg>
                                    <svg className="w-5 h-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" /></svg>
                                </div>
                                <p><span className="text-gray-100">5.0</span> by over 200 users</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg" style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, #00008B 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
                </section>
            </div>
            <div className="flex justify-center">
                <section className="text-gray-600 body-font lg:w-2/3 border mt-[-5rem] bg-white rounded">
                    <div className="container px-5 py-12 mx-auto">
                        <div className="flex flex-col text-center w-full">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                                What are Animations?
                            </h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-nunito">
                                Animations are a way to make your website more interactive and engaging. They can be used for many different purposes, such as showing off products or services, highlighting important information, or just adding some fun to the site.
                                Animation is a form of motion picture that involves the use of movement, color change, or other visual effects to convey a message or tell
                                a story. Animations are often used in advertising, entertainment, and education.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <section className="text-gray-600 body-font p-10 mt-8 mb-8 ">
                <div className="container px-2  mx-auto flex flex-wrap">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 lg:w-1/2 md:w-full">
                            <div className="text-5xl">
                                Animations for your business
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2 md:w-full">
                            <div className="text-md font-nunito">
                                We create animations for your business. We can create animations for your website, app, or any other project you have in mind. Our team of experts will work with you to understand the vision and goals for your business.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-8  mx-auto flex flex-wrap">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 lg:w-1/2 md:w-full">
                            <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col bg-secondary-300">
                                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 flex-shrink-0">
                                    <img width="48" height="48" src="https://img.icons8.com/color/48/blender-3d.png" alt="blender-3d" />
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-white text-lg title-font font-medium mb-3">Animations using Blender</h2>
                                    <p className="leading-relaxed text-sm font-nunito text-white">
                                        Blender is a free and open-source 3D computer graphics software toolset used for creating animated films, visual effects, art, 3D printed models, motion graphics, interactive 3D applications, virtual reality, and computer games.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2 md:w-full">
                            <div className="flex border-2 rounded-lg border-secondary-300 border-opacity-50 p-8 sm:flex-row flex-col">
                                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-white  flex-shrink-0">
                                    <img width="48" height="48" src="https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/32/external-autodesk-an-american-multinational-software-corporation-for-the-architecture-and-other-engineering-services-logo-tritone-tal-revivo.png" alt="external-autodesk-an-american-multinational-software-corporation-for-the-architecture-and-other-engineering-services-logo-tritone-tal-revivo" />
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Animations using Maya</h2>
                                    <p className="leading-relaxed text-sm font-nunito">
                                        Maya is a 3D computer graphics application, used to create interactive 3D applications, including video games, animated film, TV series, or visual effects. The Maya toolset is used in many industries, including film, television, and video games.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2 md:w-full">
                            <div className="flex border-2 rounded-lg border-secondary-300 border-opacity-50 p-8 sm:flex-row flex-col">
                                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-white  flex-shrink-0">
                                    <img width="64" height="64" src="https://img.icons8.com/nolan/64/3ds-max.png" alt="3ds-max" />
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Animations using 3DS Max</h2>
                                    <p className="leading-relaxed text-sm font-nunito">
                                        3ds Max is a 3D computer graphics program for making 3D animations, models, games, and images. It was developed and produced by Autodesk Media and Entertainment. It has modeling capabilities and a flexible plugin architecture and must be used on the Microsoft Windows platform.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 lg:w-1/2 md:w-full">
                            <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col bg-secondary-300">
                                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 flex-shrink-0">
                                    <img width="64" height="64" src="https://img.icons8.com/nolan/64/cinema-4d.png" alt="cinema-4d" />
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-white text-lg title-font font-medium mb-3">Animations using Cinema 4D</h2>
                                    <p className="leading-relaxed text-sm font-nunito text-white">
                                        Cinema 4D is a 3D modeling, animation, motion graphic, and rendering application developed by MAXON Computer GmbH in Germany. It is capable of procedural and polygonal/subd modeling, animating, lighting, texturing, rendering, and common features found in 3D modeling applications.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />

        </>
    )
}