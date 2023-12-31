import { useEffect } from 'react';
import Footer from '../Components/Footer'
import Navigation from '../Components/Navigation'
import emailjs from '@emailjs/browser';
import { notification } from 'antd';
import { useState } from 'react';


export default function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    const [form, setForm] = useState({ name: "", email: "", message: "" })
    const [clicked, setClicked] = useState(false)


    const handleChange = (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        setClicked(false)
    }


    useEffect(() => emailjs.init("_mbbXu9un3XkRC5I2"), []);

    const submit = (e:
        | React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        setClicked(true)
        if (!form.email.includes('@')) {
            notification.error({
                message: 'Error!',
                description: 'Please enter a valid email address.'
            })
            setClicked(false)
            return
        }
        //Phone Validation
        if (form.email === '') {
            notification.error({
                message: 'Error!',
                description: 'Please enter your email.'
            })
            setClicked(false)
            return
        }

        if (form.message === '') {
            notification.error({
                message: 'Error!',
                description: 'Please enter your message.'
            })
            setClicked(false)
            return
        }

        if (form.name === '') {
            notification.error({
                message: 'Error!',
                description: 'Please enter your name.'
            })
            setClicked(false)
            return
        }

        notification.info(
            {
                message: 'Sending your request...'
            }
        )



        emailjs.send("service_xaaj5nb", "template_6rs47jc", {
            name: form.name,
            email: form.email,
            message: form.message,
        }).then(() => {
            notification.success({
                message: 'Request sent!',
                description: 'We have received your request. We will contact you soon.'
            })
            setForm({
                name: '',
                email: '',
                message: '',
            });
        }).catch(() => {
            notification.error({
                message: 'Error!',
                description: 'There was an error sending your request. Please try again later.'
            })
        });
        setClicked(false)
    }

    return (
        <>
            <Navigation />
            <section className="text-gray-600 body-font relative p-5">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe width="100%" height="100%" className="absolute inset-0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3983.774269074847!2d101.751537184019!3d3.15413283923038!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37aa3092dedf%3A0xaf599f1e3ecb8a12!2sOne%20Ampang%20Avenue%2C%2068000%20Ampang%20Jaya%2C%20Selangor%2C%20Malaysia!5e0!3m2!1sen!2s!4v1699493613839!5m2!1sen!2s" ></iframe>
                        <div className="bg-secondary-300 relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-white tracking-widest text-sm font-nunito">ADDRESS</h2>
                                <p className="mt-1 text-gray-300 font-nunito">One Ampang Avenue , 68000 Ampang Jaya, Selangor, Malaysia</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-white tracking-widest text-sm font-nunito">EMAIL</h2>
                                <a className="text-gray-300 leading-relaxed font-nunito">inquiry@webgenicsitsolutions.com</a>
                                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4 font-nunito">PHONE</h2>
                                <p className="leading-relaxed text-gray-300 font-nunito">+60-11-3769-0939</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
                        <p className="leading-relaxed mb-5 text-gray-600">
                            Leave a message and we will get back to you!
                        </p>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                onChange={handleChange}
                                value={form.name}
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                onChange={handleChange}
                                value={form.email}
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                onChange={handleChange}
                                value={form.message}
                            ></textarea>
                        </div>
                        <button className="text-white bg-secondary-300 font-nunito border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                            onClick={submit}
                            disabled={clicked}
                        >
                            Lets Connect
                        </button>
                        <p className="text-xs text-gray-500 mt-3">We will get back to you within 24 hours.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
