import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
export default  function Footer(){
   return(
   <>

   


    <footer className="bg-white border-t border-gray-200 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
          {/* Column 1 */}
          <div className="relative group p-4">
            <div className="absolute left-0 top-0 h-full w-1 bg-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-pink-500 transition">AI Consulting</a></li>
              <li><a href="#" className="hover:text-pink-500 transition">Finance Strategy</a></li>
              <li><a href="#" className="hover:text-pink-500 transition">GenAI Tools</a></li>
              <li><a href="#" className="hover:text-pink-500 transition">Support</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="relative group p-4">
            <div className="absolute left-0 top-0 h-full w-1 bg-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-pink-500 transition">About Us</a></li>
              <li><a href="#" className="hover:text-pink-500 transition">Careers</a></li>
              <li><a href="#" className="hover:text-pink-500 transition">Blog</a></li>
              <li><a href="#" className="hover:text-pink-500 transition">Contact</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="relative group p-4">
            <div className="absolute left-0 top-0 h-full w-1 bg-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-pink-500 transition">Help Center</a></li>
              <li><a href="#" className="hover:text-pink-500 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-pink-500 transition">Terms</a></li>
              <li><a href="#" className="hover:text-pink-500 transition">Partners</a></li>
            </ul>
          </div>

          {/* Column 4: Social Icons */}
          <div className="relative group p-4">
            <div className="absolute left-0 top-0 h-full w-1 bg-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="w-6 h-6 hover:text-pink-500 transition" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook className="w-6 h-6 hover:text-pink-500 transition" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="w-6 h-6 hover:text-pink-500 transition" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="w-6 h-6 hover:text-pink-500 transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Paves Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  



   </>
   )
}