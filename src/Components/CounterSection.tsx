import { AnimationControls, TargetAndTransition, VariantLabels, motion, useAnimation } from "framer-motion";
import { JSXElementConstructor, ReactElement, ReactNode, useEffect, useState } from "react";

export default function Homepage() {
    const controls = useAnimation();
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const targetCount1 = 20;
    const targetCount2 = 900;
    const targetCount3 = 700;

    useEffect(() => {
        controls.start({
            opacity: 1,
            x: 0,
        });

        const interval1 = setInterval(() => {
            if (count1 < targetCount1) {
                setCount1(count1 + 1);
            }
        }, 1);

        const interval2 = setInterval(() => {
            if (count2 < targetCount2) {
                setCount2(count2 + 1);
            }
        }, 1);

        const interval3 = setInterval(() => {
            if (count3 < targetCount3) {
                setCount3(count3 + 1);
            }
        }, 1);

        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
            clearInterval(interval3);
        };
    }, [count1, count2, count3, controls, targetCount1, targetCount2, targetCount3]);

    return (
        <>
            <div className="flex flex-col items-center justify-center mt-10">
                <section className="text-gray-600 body-font lg:w-3/4 bg-secondary-200">
                    <div className="container mx-auto flex px-5 py-3 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0">
                            <motion.img
                                className="object-cover object-center rounded"
                                alt="hero"
                                src="/assets/LandingImage1.png"
                            />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-8 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-secondary-300">
                                Who
                                <span className="text-gray-800"> we are</span>
                            </h1>
                            <p className="mb-2 leading-relaxed">
                                Webgenics, a software development company, helps to digitize businesses by focusing on Clients’ business challenges, needs, pain points by providing business goals-oriented software solutions.
                            </p>
                            <p className="mb-4 leading-relaxed">
                                We value close, transparent cooperation and encourage our
                                Clients to
                                participate actively in the project development life cycle.
                            </p>
                            <section className="grid gap-2 md:grid-cols-3 md:gap-8">
                                {renderCounter(count1, targetCount1, "Years of Experience", controls)}
                                {renderCounter(count2, targetCount2, "Clients Worldwide", controls)}
                                {renderCounter(count3, targetCount3, "Successful Projects", controls)}
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );

    function renderCounter(currentCount: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined, targetCount: number, label: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined, animationControls: boolean | AnimationControls | VariantLabels | TargetAndTransition | undefined) {
        console.log(targetCount)
        console.log(animationControls)

        return (
            <motion.article
                className="text-center"
            >
                <div className="w-12 h-12 rounded shadow-md bg-white flex justify-center items-center transform -rotate-3 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="20">
                        <path fill="none" stroke="#000" strokeWidth="2" d="M1 1l14 14 14-14" />
                        <path fill="#F9BABA" d="M15.5 1C10.8 1
                        7 4.8 7 9.5S10.8 18 15.5 18 24 14.2 24 9.5 20.2 1 15.5 1z" />
                    </svg>
                </div>
                <motion.h2 className="font-extrabold mb-2">
                    <span className="text-4xl font-oxygen">
                        +{currentCount}
                    </span>
                    <span className="text-lg inline-flex font-semibold bg-clip-text text-transparent bg-gradient-to-r from-secondary-300 to-indigo-300 ">
                        {label}
                    </span>
                </motion.h2>
            </motion.article>
        );
    }
}
