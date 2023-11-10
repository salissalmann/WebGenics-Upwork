
const Services = () => {

    return (
        <section className="flex flex-col items-center justify-center text-gray-600 font-nunito">
            <div className="container px-2 py-24 mx-auto w-3/4">
                <div className="flex flex-col text-center w-full mb-4">
                    <h1
                        className="sm:text-3xl text-3xl font-medium title-font mb-4 text-secondary-300"
                    >
                        Services <span className="text-gray-900">we are providing</span>
                    </h1>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="lg:w-1/3 sm:w-1/2">
                        <div className={`px-8 py-14 relative z-10 w-full bg-tertiary-200`}>
                            <img width="50" height="50" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" alt="external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo" />
                            <h1 className={`tracking-widest text-2xl font-oxygen text-white mb-1 mt-3`}>
                                Web Development
                            </h1>
                            <p className={`leading-relaxed text-white font-nunito text-sm`}>
                                Revolutionize your business with Webgenics' bespoke software solutions. Our expert team ensures tailored, efficient, and quality software for your success.
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2">
                        <div className={`px-8 py-14 relative z-10 w-full bg-tertiary-300`}>
                            <img width="50" height="50" src="https://img.icons8.com/office/40/figma.png" alt="figma" />
                            <h1 className={`tracking-widest text-2xl font-oxygen text-black mb-1 mt-3`}>
                                UI/UX Design
                            </h1>
                            <p className={`leading-relaxed text-black font-nunito text-sm`}>
                                Transform user experiences with Webgenics' UI/UX design services. Our creative team crafts intuitive, visually engaging interfaces for an exceptional digital journey.                            </p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2">
                        <div className={`px-8 py-14 relative z-10 w-full bg-tertiary-100`}>
                            <img width="48" height="48" src="https://img.icons8.com/pulsar-line/48/backend-development.png" alt="backend-development" />
                            <h1 className={`tracking-widest text-2xl font-oxygen text-black mb-1 mt-3`}>
                                Mobile Development
                            </h1>
                            <p className={`leading-relaxed text-black font-nunito text-sm`}>
                                Enhance your business with Webgenics' mobile app development services. Our team delivers robust, scalable, and secure apps for iOS and Android platforms.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -m-4 mt-[-1rem]">
                    <div className="lg:w-1/3 sm:w-1/2">
                        <div className={`px-8 py-14 relative z-10 w-full bg-tertiary-300`}>
                            <img width="50" height="50" src="https://img.icons8.com/ios/50/us-news.png" alt="us-news" />
                            <h1 className={`tracking-widest text-2xl font-oxygen text-black mb-1 mt-3`}>
                                Publication Services
                            </h1>
                            <p className="text-black font-nunito text-sm">
                                Accelerate your research with Webgenics' publication services. Our experts help you publish in top journals and conferences, ensuring your research reaches the right audience.
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2">
                        <div className={`px-8 py-14 relative z-10 w-full bg-tertiary-100`}>
                            <img width="50" height="50" src="https://img.icons8.com/fluency/48/animation-rig.png" alt="animation-rig" />
                            <h1 className={`tracking-widest text-2xl font-oxygen text-black mb-1 mt-3`}>
                                3D/4D Animations
                            </h1>
                            <p className="text-black font-nunito text-sm">
                                Bring your ideas to life with Webgenics' 3D/4D animation services. Our team creates stunning visuals and immersive experiences for your business.
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 sm:w-1/2">
                        <div className={`px-8 py-14 relative z-10 w-full bg-tertiary-200`}>
                            <img width="48" height="48" src="https://img.icons8.com/fluency/48/consultation.png" alt="consultation" />                            <h1 className={`tracking-widest text-2xl font-oxygen text-white mb-1 mt-3`}>
                                Consultation
                            </h1>
                            <p className="text-white font-nunito text-sm">
                                Get expert advice on your business challenges. Our team helps you identify the right technology, process, and strategy to achieve your business goals.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Services;
