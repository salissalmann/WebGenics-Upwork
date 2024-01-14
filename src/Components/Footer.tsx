import { useNavigate } from "react-router-dom"
export default function Footer() {
    const navigate = useNavigate()
    return (<>
        <footer className="text-white cursor-pointer body-font mt-10">
            <div className="container px-5 py-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col bg-secondary-300">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left lg:pl-14 flex-col-reverse">
                    <a className="flex title-font font-medium items-center  md:justify-start  justify-center text-white font-nunito">
                        <img
                            src="/assets/LogoBlue.png"
                            alt="Webgenics Logo"
                            className="h-20 w-30"
                        />
                    </a>
                    <nav className="list-none mb-10">
                        <li className="pb-1">
                            <a className="text-white cursor-pointer hover:text-gray-400 font-nunito font-thin">HeadQuarters: One Ampang Avenue , 68000 Ampang Jaya, Selangor, Malaysia</a>
                        </li>
                        <li className="pb-1">
                            <a className="text-white cursor-pointer hover:text-gray-400 font-nunito font-thin"
                                href="https://wa.me/601137690939"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Phone: +60-11-37690939</a>
                        </li>
                        <li className="pb-1">
                            <a className="text-white cursor-pointer hover:text-gray-400 font-nunito font-thin">Email:{" "}
                                <span className="text-secondary-100">
                                    inquiry@webgenicsitsolutions.com</span></a>
                        </li>

                    </nav>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white font-nunito tracking-widest text-lg mb-3"
                            onClick={() => navigate('/services')}
                        >Services</h2>
                        <nav className="list-none mb-10">
                            <li className="pb-1">
                                <a className="text-white cursor-pointer hover:text-gray-400 font-nunito font-thin" onClick={() => navigate('/mobile-development')}>Mobile App Development</a>
                            </li>
                            <li className="pb-1">
                                <a className="text-white cursor-pointer hover:text-gray-400 font-nunito font-thin" onClick={() => navigate('/web-development')}>Web Development</a>
                            </li>
                            <li className="pb-1">
                                <a className="text-white cursor-pointer hover:text-gray-400 font-nunito font-thin" onClick={() => navigate('/ui-ux')}>UI/UX Design</a>
                            </li>
                            <li className="pb-1">
                                <a className="text-white cursor-pointer hover:text-gray-400 font-nunito font-thin" onClick={() => navigate('/animations')}>Animations</a>
                            </li>
                            <li className="pb-1">
                                <a className="text-white cursor-pointer hover:text-gray-400 font-nunito font-thin" onClick={() => navigate('/publication-services')}>Publication Services</a>
                            </li>
                            <li className="pb-1">
                                <a className="text-white cursor-pointer hover:text-gray-400 font-nunito font-thin" onClick={() => navigate('/consultation')}>Consultation</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white font-nunito tracking-widest text-lg mb-3">Technologies</h2>
                        <nav className="list-none mb-10">
                            <li className="pb-1">
                                <a className="text-white cursor-pointer hover:text-gray-400 font-nunito font-thin">NodeJS Development</a>
                            </li>
                            <li className="pb-1">
                                <a className="text-white cursor-pointer hover:text-gray-400 font-nunito font-thin">Ruby on Rails Development</a>
                            </li>
                            <li className="pb-1">
                                <a className="text-white cursor-pointer hover:text-gray-400 font-nunito font-thin">ReactJS Development</a>
                            </li>
                            <li className="pb-1">
                                <a className="text-white cursor-pointer hover:text-gray-400 font-nunito font-thin">NextJs Development</a>
                            </li>
                            <li className="pb-1">
                                <a className="text-white cursor-pointer hover:text-gray-400 font-nunito font-thin">Cloud Services ( AWS/AZURE )</a>
                            </li>
                            <li className="pb-1">
                                <a className="text-white cursor-pointer hover:text-gray-400 font-nunito font-thin">Flutter Development</a>
                            </li>
                            <li className="pb-1">
                                <a className="text-white cursor-pointer hover:text-gray-400 font-nunito font-thin">Kotlin Development</a>
                            </li>
                            <li className="pb-1">
                                <a className="text-white cursor-pointer hover:text-gray-400 font-nunito font-thin">Blender Animations</a>
                            </li>
                            <li className="pb-1">
                                <a className="text-white cursor-pointer hover:text-gray-400 font-nunito font-thin pb-3">Figma</a>
                            </li>
                            <li className="pb-1">
                                <a className="text-white cursor-pointer hover:text-gray-400 font-nunito font-thin pb-3">Adobe</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white font-nunito tracking-widest text-lg mb-3">Industries</h2>
                        <nav className="list-none mb-10">
                            <li className="pb-1">
                                <a className="text-white cursor-pointer hover:text-gray-400 font-nunito font-thin">Healthcare</a>
                            </li>
                            <li className="pb-1">
                                <a className="text-white cursor-pointer hover:text-gray-400 font-nunito font-thin">IoT Development</a>
                            </li>
                            <li className="pb-1">
                                <a className="text-white cursor-pointer hover:text-gray-400 font-nunito font-thin">IoT Remote Monitoring</a>
                            </li>
                            <li className="pb-1">
                                <a className="text-white cursor-pointer hover:text-gray-400 font-nunito font-thin">Healthcare IoT Development</a>
                            </li>
                            <li className="pb-1">
                                <a className="text-white cursor-pointer hover:text-gray-400 font-nunito font-thin">Climate IoT Development</a>
                            </li>
                            <li className="pb-1">
                                <a className="text-white cursor-pointer hover:text-gray-400 font-nunito font-thin">Healthcare Software</a>
                            </li>
                            <li className="pb-1">
                                <a className="text-white cursor-pointer hover:text-gray-400 font-nunito font-thin">AdTech Software Development</a>
                            </li>
                            <li className="pb-1">
                                <a className="text-white cursor-pointer hover:text-gray-400 font-nunito font-thin">EdTech Software Development</a>
                            </li>
                            <li className="pb-1">
                                <a className="text-white cursor-pointer hover:text-gray-400 font-nunito font-thin pb-3">E-Commerce Software</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white font-nunito tracking-widest text-lg mb-3">Company</h2>
                        <nav className="list-none mb-10">
                            <li className="pb-1">
                                <a className="text-white cursor-pointer hover:text-gray-400 font-nunito font-thin" onClick={() => navigate('/teams')}>Team</a>
                            </li>
                            <li className="pb-1">
                                <a className="text-white cursor-pointer hover:text-gray-400 font-nunito font-thin" onClick={() => navigate('/portfolio')}>Portfolio</a>
                            </li>
                            <li className="pb-1">
                                <a className="text-white cursor-pointer hover:text-gray-400 font-nunito pb-3 font-thin" onClick={() => navigate('/contact')}>Contact</a>
                            </li>
                            <li className="pb-1">
                                <a className="text-white cursor-pointer hover:text-gray-400 font-nunito pb-3" onClick={() => navigate('/quotation')}>Request Quotation</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-primary">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-white text-sm text-center sm:text-left">© 2016 WebGenics IT Solutions
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a className="text-white">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-white">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-white">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-white">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </footer>


    </>
    )
}
