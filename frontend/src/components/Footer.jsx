export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      
      {/* Top */}
      <div className="text-center py-4 bg-gray-800 cursor-pointer">
        <p className="text-sm">Back to top</p>
      </div>

      {/* Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-10 py-10 text-sm">
        <div>
          <h3 className="font-semibold text-white mb-2">
            Get to Know Us
          </h3>
          <ul className="space-y-1">
            <li>About Amazon</li>
            <li>Careers</li>
            <li>Press Releases</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-2">
            Connect with Us
          </h3>
          <ul className="space-y-1">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-2">
            Make Money with Us
          </h3>
          <ul className="space-y-1">
            <li>Sell on Amazon</li>
            <li>Advertise Your Products</li>
            <li>Affiliate Program</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-2">
            Let Us Help You
          </h3>
          <ul className="space-y-1">
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>Help</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs py-4 border-t border-gray-700">
        © {new Date().getFullYear()} Amazon Clone. All rights reserved.
      </div>
    </footer>
  );
}
