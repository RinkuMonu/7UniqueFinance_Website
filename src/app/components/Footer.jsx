import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-[#3a251a] text-[#f9f5f3] py-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4 underline underline-offset-6 decoration-[#b7603d] decoration-2">About Our Firm</h3>
                           <p className="text-sm">
                            We are a premier financial services firm dedicated to helping clients achieve their financial goals through expert wealth management, investment strategies, and financial planning. Our mission is to provide tailored solutions that grow and protect your assets.
                        </p>
                        <p className="text-sm mt-2">
                            With decades of combined experience, our team offers comprehensive services including portfolio management, retirement planning, tax optimization, and estate planning. We believe in building long-term relationships based on trust and exceptional service.
                        </p>
                    </div>

                    <div className='md:text-center'>
                        <h3 className="text-lg font-semibold mb-4 underline underline-offset-6 decoration-[#b7603d] decoration-2">Services</h3>
                        <ul className="space-y-2">
                            <li><a href="/about-us" className="text-sm hover:text-[#b7603d] transition-colors">ABOUT US</a></li>
                            <li><a href="/investors" className="text-sm hover:text-[#b7603d] transition-colors">INVERSTORE</a></li>
                            <li><a href="/media-centre" className="text-sm hover:text-[#b7603d] transition-colors">MEDIA CENTRE</a></li>
                            <li><a href="/career" className="text-sm hover:text-[#b7603d] transition-colors">CAREER</a></li>
                            <li><a href="/blog" className="text-sm hover:text-[#b7603d] transition-colors">BLOG</a></li>
                            <li><a href="/contact-us" className="text-sm hover:text-[#b7603d] transition-colors">CONTACT US</a></li>
                        </ul>
                    </div>

                    <div className='md:text-center'>
                        <h3 className="text-lg font-semibold mb-4 underline underline-offset-6 decoration-[#b7603d] decoration-2">Quick Links</h3>
                        <ul className="space-y-2">
                           
                            <li><a href="/blog" className="text-sm hover:text-[#b7603d] transition-colors">BLOGS</a></li>
                            <li><a href="/career" className="text-sm hover:text-[#b7603d] transition-colors">CAREER</a></li>
                            <li><a href="/branch-locator" className="text-sm hover:text-[#b7603d] transition-colors">BRANCH LOCATOR</a></li>
                            <li><a href="/nach-mandate" className="text-sm hover:text-[#b7603d] transition-colors">NACH MANDATE</a></li>
                            <li><a href="/revoke-consent" className="text-sm hover:text-[#b7603d] transition-colors">REVOKE CONSTENT</a></li>
                        </ul>
                    </div>

                    <div className='md:text-center'>
                        <h3 className="text-lg font-semibold mb-4 underline underline-offset-6 decoration-[#b7603d] decoration-2">Contact Our Team</h3>
                        <ul className="space-y-2">
                            <li className="text-sm font-semibold">Financial Partners Group</li>
                            <li className="text-sm">Address: 500 Financial District, Suite 200, New York, NY</li>
                            <li className="text-sm">Phone: (212) 555-1000</li>
                            <li className="text-sm">✉ Email: advisors@fpg.com</li>
                            <li className="text-sm">Website: <a href="https://www.fpg.com" className="text-[#b7603d] hover:underline">www.fpg.com</a></li>
                            <li className="text-sm">Office Hours: Mon-Fri, 8:30 AM - 5:30 PM EST</li>
                            <li className="text-sm">Schedule Consultation: <a href="/contact" className="text-[#b7603d] hover:underline">Book Online</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 border-t border-[#5c3d2e] pt-6 text-center">
                    <div className="flex justify-center space-x-6 mb-4">
                        <a href="https://facebook.com" className="text-[#f9f5f3] hover:text-[#b7603d] transition-colors">
                            <FaFacebook size={20} />
                        </a>
                        <a href="https://twitter.com" className="text-[#f9f5f3] hover:text-[#b7603d] transition-colors">
                            <FaTwitter size={20} />
                        </a>
                        <a href="https://instagram.com" className="text-[#f9f5f3] hover:text-[#b7603d] transition-colors">
                            <FaInstagram size={20} />
                        </a>
                        <a href="https://linkedin.com" className="text-[#f9f5f3] hover:text-[#b7603d] transition-colors">
                            <FaLinkedin size={20} />
                        </a>
                    </div>

                    <div className="text-sm text-[#b7a299]">
                        <p>© 2025 Financial Partners Group. All Rights Reserved.</p>
                        <p className="mt-1">Securities offered through FINRA member broker-dealers. Investment advisory services offered through properly registered advisers.</p>
                        <p className="mt-2 text-xs">
                            <a href="/disclaimer" className="hover:text-[#b7603d] mx-2">Disclaimer</a> | 
                            <a href="/privacy" className="hover:text-[#b7603d] mx-2">Privacy Policy</a> | 
                            <a href="/terms" className="hover:text-[#b7603d] mx-2">General Terms and Conditions</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}