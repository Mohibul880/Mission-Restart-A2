import { FaEnvelope, FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-1 max-w-sm">
          <h2 className="text-2xl font-bold text-white">Customer Support Zone</h2>
          <p className="mt-4 text-sm text-gray-400">
          A modern customer ticket management system built with React.
          It allows teams to create, track, and manage customer support tickets easily.
          The system helps resolve issues efficiently and improve support workflow.
          </p>
        </div>

        <div>
          <h3 className="text-xl text-white font-medium mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a className="hover:text-white transition" href="#">About us</a></li>
            <li><a className="hover:text-white transition" href="#">Our Mission</a></li>
            <li><a className="hover:text-white transition" href="#">Contact Sales</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl text-white font-medium mb-3">Services</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a className="hover:text-white transition" href="#">Products &amp; Services</a></li>
            <li><a className="hover:text-white transition" href="#">Customer Stories</a></li>
            <li><a className="hover:text-white transition" href="#">Download Apps</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl text-white font-medium mb-3">Information</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a className="hover:text-white transition" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-white transition" href="#">Terms &amp; Conditions</a></li>
            <li><a className="hover:text-white transition" href="#">Join Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl text-white font-medium mb-3">Social Links</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <FaXTwitter className="text-white" />
              <a className="hover:text-white transition" href="#">@Customer Support Zone</a>
            </li>
            <li className="flex items-center gap-2">
              <FaLinkedin className="text-white" />
              <a className="hover:text-white transition" href="#">@Customer Support Zone</a>
            </li>
            <li className="flex items-center gap-2">
              <FaFacebook className="text-white" />
              <a className="hover:text-white transition" href="#">@Customer Support Zone</a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-white" />
              <a className="hover:text-white transition" href="mailto:support@example.com">
                support@example.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Customer Support Zone. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;