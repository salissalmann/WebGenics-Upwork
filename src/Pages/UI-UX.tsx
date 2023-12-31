import Footer from "../Components/Footer";
import Navigation from "../Components/Navigation";
import { motion } from 'framer-motion'


export default () => {
    window.scrollTo(0, 0);

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
            <div className="bg-gray-900">
                <section className="relative">
                    <Navigation />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.75 }}
                    >
                        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8 h-1/2">
                            <div className="space-y-10 max-w-4xl mx-auto text-center">
                                <h2 className="text-4xl text-white font-extrabold mx-auto md:text-5xl mt-3">
                                    User Interface & User Experience
                                </h2>
                                <p className="max-w-2xl mx-auto text-gray-400">
                                    We design and develop beautiful, functional, and responsive user interfaces for web and mobile applications.
                                    We are a team of experienced designers and developers who specialize in creating user interfaces that deliver the best possible experience for our clients. Our
                                    goal is to make your product stand out from the crowd by designing an interface that is both aesthetically pleasing and easy to use.
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
                    </motion.div>
                </section>
            </div>
            <div className="flex justify-center">
                <section className="text-gray-600 body-font lg:w-2/3 border mt-[-5rem] bg-white rounded">
                    <div className="container px-5 py-12 mx-auto">
                        <div className="flex flex-col text-center w-full">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">What Is UI/UX</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-nunito">
                                User Interface (UI) and User Experience (UX) are two terms that are often used interchangeably. However, they are not the same thing. UI refers to the visual design of an application or website, while UX refers to how users interact with it. A good UI/UX design can make your product stand out from the competition and increase customer satisfaction.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <motion.section
                variants={staggerChildren}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >
                <section className="text-gray-600 body-font p-10 mt-8 mb-8 ">
                    <div className="container px-2  mx-auto flex flex-wrap">
                        <div className="flex flex-wrap -m-4">
                            <div className="p-4 lg:w-1/2 md:w-full">
                                <div className="text-5xl">
                                    Designs for your Business
                                </div>
                            </div>
                            <div className="p-4 lg:w-1/2 md:w-full">
                                <div className="text-md font-nunito">
                                    We design and develop beautiful, functional, and responsive user interfaces for web and mobile applications.
                                    We are a team of experienced designers and developers who specialize in creating user interfaces that deliver the best possible experience for our clients. Our
                                    goal is to make your product stand out from the crowd by designing an interface that is both aesthetically pleasing and easy to use.
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
                                        <img width="48" height="48" src="https://img.icons8.com/fluency/48/figma.png" alt="figma" />
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="text-white text-lg title-font font-medium mb-3">Designing using Figma</h2>
                                        <p className="leading-relaxed text-sm font-nunito text-white">
                                            Figma is a vector graphics editor and prototyping tool which is primarily web-based, with additional offline features enabled by desktop applications for macOS and Windows. The Figma Mirror companion apps for Android and iOS allow viewing Figma prototypes on mobile devices.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 lg:w-1/2 md:w-full">
                                <div className="flex border-2 rounded-lg border-secondary-300 border-opacity-50 p-8 sm:flex-row flex-col">
                                    <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-white  flex-shrink-0">
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/adobe-xd--v1.png" alt="adobe-xd--v1" />
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Designing using Adobe XD</h2>
                                        <p className="leading-relaxed text-sm font-nunito">
                                            Adobe XD is a vector-based user experience design tool for web apps and mobile apps, developed and published by Adobe Inc. It is available for macOS and Windows, although there are versions for iOS and Android to help preview the result of work directly on mobile devices.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 lg:w-1/2 md:w-full">
                                <div className="flex border-2 rounded-lg border-secondary-300 border-opacity-50 p-8 sm:flex-row flex-col">
                                    <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-white  flex-shrink-0">
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/adobe-photoshop--v1.png" alt="adobe-photoshop--v1" />
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Designing using Adobe Photoshop</h2>
                                        <p className="leading-relaxed text-sm font-nunito">
                                            Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc. for Windows and macOS. It was originally created in 1988 by Thomas and John Knoll. Since then, the software has become the industry standard not only in raster graphics editing, but in digital art as a whole.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 lg:w-1/2 md:w-full">
                                <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col bg-secondary-300">
                                    <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 flex-shrink-0">
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/adobe-illustrator--v1.png" alt="adobe-illustrator--v1" />
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="text-white text-lg title-font font-medium mb-3">Designing using Adobe Illustrator</h2>
                                        <p className="leading-relaxed text-sm font-nunito text-white">
                                            Adobe Illustrator is a vector graphics editor and design program developed and marketed by Adobe Inc. Originally designed for the Apple Macintosh, development of Adobe Illustrator began in 1985. Along with Creative Cloud, Illustrator CC was released.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section >
            </motion.section>

            <Footer />

        </>
    )
}