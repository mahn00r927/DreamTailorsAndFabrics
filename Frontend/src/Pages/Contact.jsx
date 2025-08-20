export function Contact() {
  return (
    <section className="py-16 bg-white" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-600 mb-8">
          Have questions? Fill out the form and we’ll get back to you shortly.
        </p>
        <form className="space-y-4 max-w-lg mx-auto text-left">
          <div>
            <label className="block font-medium mb-1 ml-2">Name</label>
            <input 
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 mx-4 sm:mx-0"
            />
          </div>
          <div>
            <label className="block font-medium mb-1 ml-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 mx-4 sm:mx-0"
            />
          </div>
          <div>
            <label className="block font-medium mb-1 ml-2">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 mx-4 sm:mx-0"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-orange-700 text-white px-6 py-2 rounded-lg shadow-md hover:bg-orange-600 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
