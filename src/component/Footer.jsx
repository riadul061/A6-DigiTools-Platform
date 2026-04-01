import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#0B1A2E] text-white px-10 py-16 mt-10">
      
      {/* Top Section */}
      <div className="grid md:grid-cols-4 gap-10">

        {/* Left */}
        <div>
          <h2 className="text-2xl font-bold mb-3">DigiTools</h2>
          <p className="text-gray-400 text-sm">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="font-semibold mb-3">Product</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>

          {/* Social */}
          <div className="flex gap-3 mt-3">
            <div className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full hover:bg-purple-500 hover:text-white">
                <FaTwitter />
            </div>
            
            <div className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full hover:bg-purple-500 hover:text-white">
                <FaFacebook />    
            </div>
            
            <div className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full hover:bg-purple-500 hover:text-white">
                <FaInstagram />
            </div>
            
        </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-8"></div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row justify-between text-gray-400 text-sm">
        <p>© 2026 Digitools. All rights reserved.</p>

        <div className="flex gap-6 mt-3 md:mt-0">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookies</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;