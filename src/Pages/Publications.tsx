import Footer from "../Components/Footer";
import Navigation from "../Components/Navigation";

export default () => {


    return (
        <>
            <div className="bg-gray-900">
                <section className="relative">
                    <Navigation />
                    <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8 h-1/2">
                        <div className="space-y-10 max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl text-white font-extrabold mx-auto md:text-5xl mt-3">
                                Publication Services
                            </h2>
                            <p className="max-w-2xl mx-auto text-gray-400">
                                We provide publication services for authors who want to publish their work in international journals. We have a team of experts who can help you with all aspects of the publication process, from writing your paper to submitting it for review.
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
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">What do we publish?</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-nunito">
                                We publish research papers, review articles, case studies, and short communications. We also publish books and monographs in all areas of science, technology, engineering, and mathematics (STEM).
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
                                Publication Services for your Business
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2 md:w-full">
                            <div className="text-md font-nunito">
                                Publication services can refer to a wide range of services and activities related to the process of creating, publishing, and distributing written content. These services are often used by authors, publishers, businesses, or individuals who want to produce and distribute books, magazines, journals, research papers, and other written materials. Here are some common aspects of publication services.
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
                                    <img width="48" height="48" src="https://img.icons8.com/fluency/48/edit.png" alt="edit" />
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-white text-lg title-font font-medium mb-3">Editing</h2>
                                    <p className="leading-relaxed text-sm font-nunito text-white">
                                        Editing is the process of preparing a manuscript for publication. It includes checking for spelling and grammar errors, correcting punctuation, and ensuring that the text is clear and concise. Editing can be done by an author, editor, or proofreader.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2 md:w-full">
                            <div className="flex border-2 rounded-lg border-secondary-300 border-opacity-50 p-8 sm:flex-row flex-col">
                                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-white  flex-shrink-0">
                                    <img width="48" height="48" src="https://img.icons8.com/fluency/48/spellcheck.png" alt="spellcheck" />
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Proofreading</h2>
                                    <p className="leading-relaxed text-sm font-nunito">
                                        Proofreading is the process of checking a manuscript for errors in spelling, grammar, and punctuation. It is usually done by an editor or proofreader. Proofreading can be done before or after editing.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2 md:w-full">
                            <div className="flex border-2 rounded-lg border-secondary-300 border-opacity-50 p-8 sm:flex-row flex-col">
                                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-white  flex-shrink-0">
                                    <img width="48" height="48" src="https://img.icons8.com/fluency/48/clear-formatting.png" alt="clear-formatting" />
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Formatting</h2>
                                    <p className="leading-relaxed text-sm font-nunito">
                                        Formatting is the process of converting a manuscript into a format that can be published. It includes formatting the text, adding headers and footers, and inserting page numbers. Formatting can be done by an author, editor, or proofreader.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 lg:w-1/2 md:w-full">
                            <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col bg-secondary-300">
                                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 flex-shrink-0">
                                    <img width="48" height="48" src="https://img.icons8.com/pulsar-line/48/newspaper-.png" alt="newspaper-" />
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-white text-lg title-font font-medium mb-3">Indexing</h2>
                                    <p className="leading-relaxed text-sm font-nunito text-white">
                                        Indexing is the process of creating an index for a book or other publication. It includes creating a list of keywords and phrases that are relevant to the content of the publication. Indexing can be done by an author, editor, or proofreader.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section >

            <Footer />

        </>
    )
}