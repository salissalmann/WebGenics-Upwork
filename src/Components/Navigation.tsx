
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navigation() {


    const [isMobile, setIsMobile] = useState(false);


    const handleOptionSelect = (value: string) => {
        Navigate(value)
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 600);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize(); // Check the initial screen size

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleToggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const [showServices, setShowServices] = useState(false)
    const [showinsights, setshowinsights] = useState(false)
    const toggleServices = () => {
        setShowServices(!showServices);
    };

    const dropdownIconStyles = {
        transition: 'transform 0.3s ease',
        transform: showServices ? 'rotate(180deg)' : 'rotate(0deg)',
    };

    const toggleinsights = () => {
        setshowinsights(!showinsights);
    };

    const dropdownIconStylesinsights = {
        transition: 'transform 0.3s ease',
        transform: showinsights ? 'rotate(180deg)' : 'rotate(0deg)',
    };



    const Navigate = useNavigate()

    return (
        <>
            {!isMobile &&
                <div className="fixed top-0 left-0 right-0 z-50">
                    <div className="flex flex-row justify-center">
                        <header className="text-gray-600 body-font w-3/4 border rounded-lg mt-3 bg-white">
                            <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
                                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                                    <img
                                        src="/assets/Webgenics-Logo.png"
                                        alt="Webgenics Logo"
                                        className="h-15 w-20"
                                    />
                                </a>
                                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-sm justify-center font-nunito">
                                    <a className="mr-10 text-gray-900 cursor-pointer"
                                        onClick={
                                            () => {
                                                handleOptionSelect('/')
                                            }
                                        }

                                    >Home</a>
                                    <div className="relative group">
                                        <div className="mr-10 flex flex-row items-center justify-center gap-1">
                                            <a className="text-gray-900 cursor-pointer">Services</a>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </div>
                                        <div className="absolute hidden  mt-1 space-y-2 w-80  bg-white text-gray-900 group-hover:block">
                                            <a className="block px-4 py-1 w-80 text-left hover:bg-orange-500 hover:text-white" href="#">Website Development Services</a>
                                            <a className="block px-4 py-1 w-80 hover:bg-orange-500 hover:text-white" href="#">Mobile Application Development Services</a>
                                            <a className="block px-4 py-1 w-80 hover:bg-orange-500 hover:text-white" href="#">UI/UX Designing Services</a>
                                            <a className="block px-4 py-1 w-80 hover:bg-orange-500 hover:text-white" href="#">Publication Services</a>
                                            <a className="block px-4 py-1 w-80 hover:bg-orange-500 hover:text-white" href="#">3D/4D Animations</a>
                                        </div>
                                    </div>
                                    <a className="mr-10 text-gray-900 cursor-pointer">Case Studies</a>
                                    <a className="mr-10 text-gray-900 cursor-pointer">About us</a>
                                    <a className="mr-10 text-gray-900 cursor-pointer">Pricing</a>
                                    <div className="relative group">
                                        <div className="mr-10 flex flex-row items-center justify-center gap-1">
                                            <a className="text-gray-900 cursor-pointer">Company</a>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </div>
                                        <div className="absolute hidden mt-1 space-y-2 bg-white text-gray-900 group-hover:block">
                                            <a className="block px-4 py-1 w-full text-left hover:bg-orange-500 hover:text-white"
                                                onClick={
                                                    () => {
                                                        handleOptionSelect('/teams')
                                                    }
                                                }
                                            >Our Team</a>
                                            <a className="block px-4 py-1  hover:bg-orange-500 hover:text-white" href="#">Portfolio</a>
                                            <a className="block px-4 py-1  hover:bg-orange-500 hover:text-white" href="#">Network</a>
                                        </div>
                                    </div>
                                </nav>
                                <button className="inline-flex items-center bg-secondary-100 border-0 text-white text-sm py-2 px-4 f rounded-2xl mt-4 md:mt-0">
                                    Get in Touch
                                </button>
                            </div>
                        </header>
                    </div>
                </div>
            }

            {isMobile &&
                <div className="fixed top-0 left-0 right-0 z-50">
                    <div className="flex flex-row justify-center">
                        <header className="text-gray-600 body-font w-3/4 border rounded-lg mt-3 bg-white">
                            <div className="container mx-auto flex p-1 flex-row  justify-between pl-4 pr-4 items-center">
                                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                                    <img
                                        src="/assets/Webgenics-Logo.png"
                                        alt="Webgenics Logo"
                                        className="h-18 w-24 mt-1"
                                    />
                                </a>
                                <MenuOutlined className="
                                text-2xl
                                text-primary
                                " onClick={handleToggleDrawer} />
                                <Drawer
                                    placement="left"
                                    closable={false}
                                    onClose={handleToggleDrawer}
                                    visible={isDrawerOpen}
                                    className='drawer'
                                >
                                    <div className='flex flex-row item-center justify-between'>
                                        <div className='text-xl text-gray-900 font-oxygen font-bold'>Web<span className="text-primary"></span>Genics</div>
                                        <CloseOutlined className='close-icon'
                                            onClick={handleToggleDrawer}
                                        />
                                    </div>
                                    <div className='flex flex-col p-3 items-center mt-4'>
                                        <div className='text-gray-900 font-oxygen font-bold border
                                        shadow w-full text-center p-2
                                        '>Home</div>
                                    </div>
                                    <div className="flex flex-col p-3 items-center">
                                        <div className="flex flex-row items-center justify-center gap-2 text-gray-900 font-oxygen font-bold border shadow w-full text-center p-2">
                                            <div onClick={toggleServices}>Services</div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                className="w-4 h-4"
                                                onClick={toggleServices}
                                                style={dropdownIconStyles}
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </div>
                                    </div>
                                    {showServices && (
                                        <div className="flex flex-col p-3 items-center mt-1 gap-1">
                                            <div className="text-gray-900 font-oxygen font-bold border shadow w-full text-center p-2">
                                                Website Development Services
                                            </div>
                                            <div className="text-gray-900 font-oxygen font-bold border shadow w-full text-center p-2">
                                                Mobile Application Development Services
                                            </div>
                                            <div className="text-gray-900 font-oxygen font-bold border shadow w-full text-center p-2">
                                                UI/UX Designing Services
                                            </div>
                                            <div className="text-gray-900 font-oxygen font-bold border shadow w-full text-center p-2">
                                                Publication Services
                                            </div>
                                            <div className="text-gray-900 font-oxygen font-bold border shadow w-full text-center p-2">
                                                3D/4D Animations
                                            </div>
                                        </div>
                                    )}                                    <div className='flex flex-col p-3 items-center'>
                                        <div className='text-gray-900 font-oxygen font-bold border
                                        shadow w-full text-center p-2
                                        '>Case Studies</div>
                                    </div>
                                    <div className='flex flex-col p-3 items-center'>
                                        <div className='text-gray-900 font-oxygen font-bold border
                                        shadow w-full text-center p-2
                                        '>About us</div>
                                    </div>
                                    <div className='flex flex-col p-3 items-center'>
                                        <div className='text-gray-900 font-oxygen font-bold border
                                        shadow w-full text-center p-2
                                        '>Pricing</div>
                                    </div>
                                    <div className='flex flex-col p-3 items-center' onClick={toggleinsights}>
                                        <div className='flex flex-row items-center justify-center gap-2 text-gray-900 font-oxygen font-bold border
                                        shadow w-full text-center p-2'>
                                            <div
                                            >Company</div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4
                                            " style={dropdownIconStylesinsights} onClick={toggleinsights}  >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </div>
                                    </div>
                                    {showinsights &&
                                        <div className='flex flex-col p-3 items-center mt-1 gap-1'>
                                            <div className='text-gray-900 font-oxygen font-bold border
                                        shadow w-full text-center p-2
                                        '
                                                onClick={
                                                    () => handleOptionSelect('/teams')
                                                }
                                            >Our Team</div>
                                            <div className='text-gray-900 font-oxygen font-bold border
                                        shadow w-full text-center p-2
                                        '>Portfolio</div>
                                            <div className='text-gray-900 font-oxygen font-bold border
                                        shadow w-full text-center p-2
                                        '>Network</div>
                                        </div>
                                    }
                                    <div className='flex flex-col p-3 items-center'>
                                        <div className='text-gray-900 font-oxygen font-bold border
                                        shadow w-full text-center p-2
                                        '>Contact us</div>
                                    </div>
                                    <div className='flex flex-col p-3 items-center'>
                                        <div className='text-gray-900 font-oxygen bg-orange-500  font-bold border
                                        shadow w-full text-center p-2
                                        '>Get in Touch</div>
                                    </div>

                                </Drawer>
                            </div>

                        </header>
                    </div >
                </div >
            }


        </>

    )
}
