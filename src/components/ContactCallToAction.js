const ContactCallToAction = () => {
  return (
    <section  className="max-w-3xl mx-auto my-16 p-8 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 rounded-lg text-white text-center shadow-lg">
      <h2 className="text-3xl font-bold mb-4">Ready to work together?</h2>
      <p className="text-lg mb-6">
        I'm currently available for internship or full-time opportunities. Let's create something amazing together!
      </p>
      <a
        href="#contact"  // Adjust this if you have a contact section or email link
        className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
      >
        Get In Touch
      </a>
    </section>
  );
};
export default ContactCallToAction;
