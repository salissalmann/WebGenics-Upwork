import { motion } from "framer-motion";

export default function Homepage() {
    return (
        <>

            <section className="flex flex-col items-center justify-center text-gray-600 font-nunito">
                <div className="container px-2 py-12 mt-3 mx-auto w-3/4">
                    <div className="flex flex-col text-center w-full mb-4">
                        <motion.h1
                            className="sm:text-3xl text-3xl font-medium title-font mb-4 text-secondary-300"
                        >
                            Clients Reviews<span className="text-gray-900">{" "}what they say about us</span>
                        </motion.h1>
                    </div>
                    <section className="text-gray-600 body-font">
                        <div className="flex flex-wrap -m-4">
                            <div className="p-4 md:w-1/2 w-full">
                                <div className="h-full bg-gray-100 p-8 rounded flex flex-col justify-between">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-8 h-8 text-secondary-300 mb-4" viewBox="0 0 975.036 975.036">
                                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                    </svg>
                                    <p className="leading-relaxed mb-6 font-nunito text-sm">Working on PrintMate has been amazing. The team at WebGenics is very professional and they have a great understanding of the product development process. I am very satisfied with their work and I look forward to working with them on future projects.</p>
                                    <a className="inline-flex items-center">
                                        <img alt="testimonial" src="/assets/people3.png" className="w-14 h-14 rounded-full flex-shrink-0 object-cover object-center" />
                                        <span className="flex-grow flex flex-col pl-4">
                                            <span className="title-font font-medium text-gray-900">Mansoor Ahmed</span>
                                            <span className="text-gray-500 text-sm">CEO - PrintMate -UK</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/2 w-full">
                                <div className="h-full bg-gray-100 p-8 rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-8 h-8 text-secondary-300 mb-4" viewBox="0 0 975.036 975.036">
                                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                    </svg>
                                    <p className="leading-relaxed mb-6 font-nunito text-sm">As the CFO of the company, I made a strategic decision to partner with WebGenics. Their expertise in developing tailored applications and innovative solutions has significantly streamlined our operations and improved our hiring process.</p>
                                    <a className="inline-flex items-center">
                                        <img alt="testimonial" src="/assets/people1.png" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                        <span className="flex-grow flex flex-col pl-4">
                                            <span className="title-font font-medium text-gray-900">Fahad Niaz Sheikh</span>
                                            <span className="text-gray-500 text-sm">CFO & CEO PlateNKeys -UK</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            <section className="flex flex-col items-center justify-center text-gray-600 font-nunito">
                <div className="container py-12 mx-auto w-3/4">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/eaab3e85-5803-4159-aeca-62c6bb311a7d?apiKey=7655e50a14c74a62b7c703afca66aadd&"
                        className="aspect-[10.01] object-cover object-center w-full justify-center items-start overflow-hidden self-center max-w-[1562px] mt-5 max-md:max-w-full max-md:mt-10"
                    />
                </div>
            </section>

        </>
    )
}
