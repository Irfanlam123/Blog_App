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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

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
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Get in Touch
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Have a question, want to collaborate, or just say hello? We'd love to
          hear from you.
        </p>
      </section>

      {/* Contact Form & Info Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-sans text-gray-900 mb-6">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-300"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-300"
                    required
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-300"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-300"
                  required
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Message"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-300 resize-none"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-900 text-white py-4 rounded-xl font-medium hover:bg-gray-800 transition disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                {submitStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-green-700 mt-2 text-center">
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <h2 className="text-xl font-sans text-gray-900 mb-4">
                Contact Info
              </h2>
              <div className="space-y-3">
                {contactInfo.map((c, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-lg">{c.icon}</span>
                    <div>
                      <p className="text-sm text-gray-500">{c.type}</p>
                      <p className="text-gray-900 font-medium">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <h2 className="text-xl font-sans text-gray-900 mb-4">
                Follow Us
              </h2>
              <div className="space-y-3">
                {socialMedia.map((s, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span>{s.icon}</span>
                      <p className="font-medium text-gray-900">{s.handle}</p>
                    </div>
                    <p className="text-sm text-gray-500">{s.followers}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Times */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <h2 className="text-xl font-sans text-gray-900 mb-4">
                Response Time
              </h2>
              <div className="space-y-3">
                {responseInfo.map((r, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center p-2 bg-gray-50 rounded-xl"
                  >
                    <div className="flex items-center gap-2">
                      <span>{r.icon}</span>
                      <p className="text-gray-900 font-medium">{r.title}</p>
                    </div>
                    <span className="text-sm bg-white px-3 py-1 rounded-full border border-gray-200 text-gray-700">
                      {r.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Common questions about Minimal and our content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start mb-2 gap-3">
                <span className="text-2xl">❓</span>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {faq.question}
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base pl-9">
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
