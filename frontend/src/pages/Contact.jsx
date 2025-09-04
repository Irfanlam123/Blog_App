import React, { useState } from "react";
import Footer from "../components/Footer";

// FAQ data
const faqs = [
  {
    question: "How often do you publish new content?",
    answer:
      "We publish 2-3 high-quality articles per week, focusing on depth over frequency.",
  },
  {
    question: "Do you offer design consultations?",
    answer:
      "We occasionally take on select consulting projects. Reach out to discuss your needs.",
  },
  {
    question: "Can I contribute to Minimal?",
    answer:
      "Yes! We welcome guest posts from experienced designers and developers. Email us your pitch.",
  },
  {
    question: "Is there a newsletter?",
    answer:
      "Yes, we send a weekly newsletter with our latest articles and design inspiration.",
  },
];

// Social media data
const socialMedia = [
  {
    platform: "Twitter",
    handle: "@minimal.blog",
    followers: "12.5K followers",
    icon: "🐦",
    url: "#",
  },
  {
    platform: "LinkedIn",
    handle: "Minimal Blog",
    followers: "8.2K followers",
    icon: "💼",
    url: "#",
  },
  {
    platform: "GitHub",
    handle: "minimal-blog",
    followers: "3.1K stars",
    icon: "💻",
    url: "#",
  },
];

// Contact info
const contactInfo = [
  {
    type: "Email",
    value: "hello@minimal.blog",
    icon: "✉️",
  },
  {
    type: "Phone",
    value: "+1 (555) 123-4567",
    icon: "📞",
  },
  {
    type: "Location",
    value: "San Francisco, CA",
    icon: "📍",
  },
];

// Response time card data
const responseInfo = [
  {
    title: "General Inquiries",
    time: "Within 24 hours",
    icon: "⏱️",
  },
  {
    title: "Support Requests",
    time: "Within 12 hours",
    icon: "🔧",
  },
  {
    title: "Collaborations",
    time: "Within 48 hours",
    icon: "🤝",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });

      // Clear success message after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Have a question, want to collaborate, or just say hello? We'd love to
          hear from you.
        </p>
      </section>

      {/* Contact Form & Info Section */}
      <section className="min-h-screen flex justify-center items-center ml-[358px]">
        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-8">
          {/* Contact Form Card */}
          <div className="lg:col-span-1 flex">
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 w-full max-w-2xl flex flex-col justify-between">
              <h2 className="text-xl font-sans text-gray-900 mb-8">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 flex-1">
                {/* Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-300"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-300"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-300"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-300"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-300 resize-none"
                    placeholder="Tell us more about your inquiry..."
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-900 text-white py-4 rounded-xl font-medium hover:bg-gray-800 transition disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {/* Success Message */}
                {submitStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-green-700">
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8 flex flex-col justify-between">
            {/* Direct Contact Card */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <h2 className="text-xl font-sans text-gray-900 mb-2">
                Direct Contact
              </h2>
              <div className="space-y-3 mb-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-sm mr-4 bg-gray-100 p-2 rounded-lg">
                      {contact.icon}
                    </span>
                    <div>
                      <p className="text-sm font-sans text-gray-500">
                        {contact.type}
                      </p>
                      <p className="text-gray-900 font-sans">{contact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* socialMedia card  */}

            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-xl font-sans text-gray-800 mb-4">
                Follow Us
              </h2>

              <div className="space-y-4">
                {/* Twitter */}
                <div>
                  <p className="text-sm font-medium text-gray-600">Twitter</p>
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-sans text-gray-900">
                      @minimal.blog
                    </p>
                    <p className="text-sm text-gray-500">12.5K followers</p>
                  </div>
                </div>

                {/* LinkedIn */}
                <div>
                  <p className="text-sm font-medium text-gray-600">LinkedIn</p>
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-sans text-gray-900">
                      Minimal Blog
                    </p>
                    <p className="text-sm text-gray-500">8.2K followers</p>
                  </div>
                </div>

                {/* GitHub */}
                <div>
                  <p className="text-sm font-medium text-gray-600">GitHub</p>
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-sans text-gray-900">
                      minimal-blog
                    </p>
                    <p className="text-sm text-gray-500">3.1K stars</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time Card */}
            <div className="bg-white rounded-3xl p-4 shadow-lg border border-gray-100">
              <h2 className="text-xl font-sans text-gray-900 mb-4">
                Response Time
              </h2>
              <div className="space-y-2 space-x-1">
                {responseInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 bg-gray-50 rounded-xl"
                  >
                    <div className="flex items-center">
                      <span className=" font-sans mr-4">{info.icon}</span>
                      <div>
                        <p className="font-sans text-sm text-gray-900">
                          {info.title}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm bg-white px-3 py-1 rounded-full border border-gray-200 text-gray-700">
                      {info.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Common questions about Minimal and our content.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start mb-4">
                <span className="text-2xl mr-4">❓</span>
                <h3 className="text-xl font-semibold text-gray-900">
                  {faq.question}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed pl-10">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
