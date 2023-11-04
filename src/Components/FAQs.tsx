
export default function FAQs() {
    return (
        <>
            <div className="flex justify-center w-full mt-5">
                <div className="container px-5 py-24 mx-auto flex flex-wrap lg:w-3/4">
                    <div className="flex flex-col text-center w-full mb-4">
                        <h1
                            className="sm:text-3xl text-3xl font-medium title-font mb-4 text-secondary-300"
                        >
                            Frequently Asked <span className="text-white font-nunito">Questions</span>
                        </h1>
                    </div>

                    <div className="space-y-4">
                        <details
                            className="group border-s-4 border-primary bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                            open
                        >
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                                <h2 className="text-lg font-medium text-secondary-300 font-nunito">
                                    Lorem ipsum dolor sit amet consectetur adipisicing?
                                </h2>

                                <span className="shrink-0 rounded-full bg-white p-1.5 text-white font-nunito sm:p-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45 text-secondary-300"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <p className="mt-4 leading-relaxed text-gray-700">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                                molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                                voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                                earum similique!
                            </p>
                        </details>

                        <details
                            className="group border-s-4 border-primary bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                        >
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                                <h2 className="text-lg font-medium text-secondary-300 font-nunito">
                                    Lorem ipsum dolor sit amet consectetur adipisicing?
                                </h2>

                                <span className="shrink-0 rounded-full bg-white p-1.5 text-white font-nunito sm:p-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45 text-secondary-300"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <p className="mt-4 leading-relaxed text-gray-700">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                                molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                                voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                                earum similique!
                            </p>
                        </details>
                    </div>
                </div>
            </div >
        </>
    )
}
