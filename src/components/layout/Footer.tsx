import Link from 'next/link'
import { Mail, Phone, Clock, MapPin } from 'lucide-react'

export const Footer = () => {
    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#services", label: "Services" },
        { href: "#achievements", label: "Achievements" },
        { href: "#about", label: "About" },
        { href: "#contact", label: "Contact" },
    ]

    return (
        <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
            <div className="max-w-6xl mx-auto px-4">
                {/* Main Footer Content */}
                <div className="py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        {/* About Section */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-white relative inline-block pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-12 after:bg-blue-500">
                                About Us
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                Your trusted healthcare partner providing quality medical supplies and services.
                            </p>
                            <div className="pt-4">
                                <Link
                                    href="#about"
                                    className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center group"
                                >
                                    Learn More
                                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                                </Link>
                            </div>
                        </div>

                        {/* Quick Links Section */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-white relative inline-block pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-12 after:bg-blue-500">
                                Quick Links
                            </h3>
                            <ul className="space-y-2">
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-300 hover:text-white transition-colors inline-flex items-center group"
                                        >
                                            <span className="transform group-hover:translate-x-1 transition-transform">
                                                {link.label}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Section */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-white relative inline-block pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-12 after:bg-blue-500">
                                Contact
                            </h3>
                            <ul className="space-y-3 text-gray-300">
                                <li>
                                    <Link
                                        href="tel:+2349025536929"
                                        className="inline-flex items-center hover:text-white transition-colors"
                                    >
                                        <Phone className="h-4 w-4 mr-2 text-blue-400" />
                                        +234 902 553 6929
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="mailto:marthaolung@gmail.com"
                                        className="inline-flex items-center hover:text-white transition-colors"
                                    >
                                        <Mail className="h-4 w-4 mr-2 text-blue-400" />
                                        marthaolung@gmail.com
                                    </Link>
                                </li>
                                <li className="inline-flex items-center">
                                    <MapPin className="h-4 w-4 mr-2 text-blue-400" />
                                    <span>58 Ogoja Abakaliki Express Ndiechi Igbeagu</span>
                                </li>
                            </ul>
                        </div>

                        {/* Opening Hours Section */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-white relative inline-block pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-12 after:bg-blue-500">
                                Opening Hours
                            </h3>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-center">
                                    <Clock className="h-4 w-4 mr-2 text-blue-400" />
                                    <div>
                                        <p>Monday - Saturday</p>
                                        <p className="text-gray-400">8:00 AM - 10:00 PM</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <Clock className="h-4 w-4 mr-2 text-blue-400" />
                                    <div>
                                        <p>Sunday</p>
                                        <p className="text-gray-400">12:00 PM - 10:00 PM</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-gray-700/50 py-6">
                    <p className="text-center text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} HealthCare Plus. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
