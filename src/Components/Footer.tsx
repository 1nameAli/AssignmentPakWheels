import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 px-56 mt-20">
            <div className="flex flex-col md:flex-row justify-between">
                <div className="mb-6">
                    <h3 className="text-[40px] font-semibold">About Pakwheels</h3>
                    <p className="text-sm w-[500px] text-gray-300">
                        Pakwheels is your one-stop solution for buying and selling cars in Pakistan. Explore our wide range of vehicles and connect with buyers and sellers effortlessly.
                    </p>
                </div>
                <div className='flex gap-10'><div className="mb-6">
                    <h3 className="text-lg font-semibold">Quick Links</h3>
                    <ul>
                        <li className="mb-2 text-gray-300"> About Us</li>
                        <li className="mb-2 text-gray-300">Contact Us</li>
                        <li className="mb-2 text-gray-300">FAQ</li>
                        <li className="mb-2 text-gray-300"> Terms & Conditions</li>
                        <li className="mb-2 text-gray-300"> Privacy Policy</li>
                    </ul>
                </div>
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold">Connect with Us</h3>
                        <div className="flex space-x-4">
                            <Link href="https://facebook.com" target="_blank" >
                                <FaFacebookF className="text-gray-400 hover:text-white" />
                            </Link>
                            <Link href="https://twitter.com" target="_blank" >
                                <FaTwitter className="text-gray-400 hover:text-white" />
                            </Link>
                            <Link href="https://instagram.com" target="_blank" >
                                <FaInstagram className="text-gray-400 hover:text-white" />
                            </Link>
                            <Link href="https://linkedin.com" target="_blank" >
                                <FaLinkedinIn className="text-gray-400 hover:text-white" />
                            </Link>
                        </div>
                    </div>
                </div></div>

            <div className="border-t border-gray-700 mt-8 pt-4 text-center">
                <p className="text-sm text-gray-400">&copy; 2024 Pakwheels. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
