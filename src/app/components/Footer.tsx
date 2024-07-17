

function Footer() {
  return (
    <footer className="bg-black text-gray py-12">
<div className="max-w-6xl text-center mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
<div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
          Haris Qadri Islamic Academy integrates Islamic teachings with academic excellence, empowering students to become ethical leaders in society. We aim to cultivate a strong foundation of Islamic knowledge and values for a purposeful future.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/courses"
                className="hover:text-white transition-colors duration-300"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex justify-center items-center space-x-4">
            <a
              href="https://www.facebook.com/mohammadharisqadri"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="https://www.github.com/mharisqadri"
              className="hover:text-white transition-colors duration-300"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/mharisqadri"
              className="hover:text-white transition-colors duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Flat#703 Shaheed-e-Millat Rd,</p>
          <p>Karachi,PK.</p>
          <p>Email: mharisqadri@gmail.com</p>
          <p>Phone: +92-336-2002819</p>
        </div>
        </div>
        <p className="text-center text-xs pt-8">Made with &#x2764;&#xFE0F; by Mohammad Haris Qadri.© All rights reserved.</p>
    </footer>
    
  )
}

export default Footer
