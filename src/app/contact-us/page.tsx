import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

// app/contact/page.tsx
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#101010]">
      <Navbar />
      {/* Header */}
      <div className="text-center py-40 bg-[#1F299C] text-white">
        <h1 className="text-4xl font-bold font-poppins">Contact Savnest</h1>
        <p className="mt-3 text-lg font-space">
          We d love to hear from you. Reach out and let s build financial freedom together.
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Contact Form */}
        <div className="bg-white p-8 shadow-lg rounded-2xl">
          <h2 className="text-2xl font-semibold mb-6 font-poppins text-[#1F299C]">
            Send us a message
          </h2>
          <form className="space-y-5">
            <div>
              <label className="block text-sm mb-1 font-space">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0466C8] font-space"
              />
            </div>
            <div>
              <label className="block text-sm mb-1 font-space">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0466C8] font-space"
              />
            </div>
            <div>
              <label className="block text-sm mb-1 font-space">Message</label>
              <textarea
                rows={5}
                placeholder="Type your message here..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0466C8] font-space"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#FF9F1C] text-white px-6 py-3 rounded-lg font-semibold font-poppins hover:bg-[#1F299C] transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <h3 className="text-xl font-semibold font-poppins text-[#1F299C]">Our Office</h3>
            <p className="mt-2 font-space">
              Savnest HQ <br />
              45 Adeola Odeku Street, Victoria Island, Lagos, Nigeria
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold font-poppins text-[#1F299C]">Call Us</h3>
            <p className="mt-2 font-space">+234 800 123 4567</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold font-poppins text-[#1F299C]">Email Us</h3>
            <p className="mt-2 font-space">support@savnest.ng</p>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <Footer />
      {/* <div className="text-center py-6 bg-[#1F299C] text-white font-space">
        <p>© {new Date().getFullYear()} Savnest. All rights reserved.</p>
      </div> */}
    </div>
  );
}


