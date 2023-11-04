
export default function Offerings() {
    return (
        <>

            <div className="self-stretch flex w-full flex-col pb-8 px-5 max-md:max-w-full max-md:mt-10 bg-cover bg-center bg-no-repeat bg-[url('/assets/Cover.png')]">
                <div className="container py-24 mx-auto w-3/4 font-oxygen">
                    <div className="flex flex-col text-center w-full mb-4">
                        <h1 className="text-white text-4xl">Why companies work with{" "} <span className=" text-red-600 text-center text-4xl">WebGenics</span> </h1>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/2 sm:w-1/2">
                            <div className={`px-4 py-7 relative z-10 w-full`}>
                                <h1 className={`tracking-widest text-3xl font-oxygen text-white mb-1`}>
                                    Full transparency
                                </h1>
                                <p className={`leading-relaxed text-white font-nunito text-sm `} >
                                    The whole process is as transparent as possible. We immediately
                                    establish a roadmap, clear KPIs and conditions for their
                                    implementation, type of reporting, daily events, sync-ups, and
                                    product testing conditions.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 sm:w-1/2">
                            <div className={`px-4 py-7 relative z-10 w-full`}>
                                <h1 className={`tracking-widest text-3xl font-oxygen text-white mb-1`}>
                                    Client involvement
                                </h1>
                                <p className={`leading-relaxed text-white font-nunito text-sm`}>
                                    We determine the degree of Client involvement. We can work on a
                                    turnkey basis, or we may work with the direct participation of the
                                    Client’s management — our processes are adapted easily.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 sm:w-1/2">
                            <div className={`px-4 py-7 relative z-10 w-full`}>
                                <h1 className={`tracking-widest text-3xl font-oxygen text-white mb-1`}>
                                    Reasonable costs
                                </h1>
                                <p className={`leading-relaxed text-white font-nunito text-sm`}>
                                    We offer fair prices for both parties: you get a well-tested
                                    application with easily maintainable code, and we get enough
                                    resources to grow as professionals.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 sm:w-1/2">
                            <div className={`px-4 py-7 relative z-10 w-full`}>
                                <h1 className={`tracking-widest text-3xl font-oxygen text-white mb-1`}>
                                    No language barrier
                                </h1>
                                <p className={`leading-relaxed text-white font-nunito text-sm`}>
                                    There is no language barrier, as our employees speak English —
                                    at least B1 level for engineers and C1 level for managers.
                                </p>
                            </div>
                        </div>

                        <div className="lg:w-1/2 sm:w-1/2">
                            <div className={`px-4 py-7 relative z-10 w-full`}>
                                <h1 className={`tracking-widest text-3xl font-oxygen text-white mb-1`}>
                                    Effective time difference management
                                </h1>
                                <p className={`leading-relaxed text-white font-nunito text-sm`}>
                                    We adjust the development process and shift our working hours to
                                    match your working day. It allows us to provide the necessary
                                    number of hours of overlap.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


