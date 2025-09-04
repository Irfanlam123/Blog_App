import React from "react";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="bg-white p-6">
      {/* About Minimal Section */}
      <section className="max-w-7xl mx-auto px-10 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-sans text-gray-900 mb-6">
            About Minimal
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            We believe in the power of simplicity. Our mission is to create
            beautiful, thoughtful content about design, technology, and the
            intersection of both.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="px-5 py-3 rounded-full bg-[#0a1128] text-white font-sans shadow-sm hover:bg-[#050a1a] transition"
            >
              Read Our Story
            </a>
            <a
              href="#"
              className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-sans hover:bg-gray-50 transition"
            >
              Join Our Community
            </a>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1559136560-16ad036d85d3?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About Minimal"
            className="rounded-2xl shadow-lg w-[484px]"
          />
        </div>
      </section>

      {/* Our Story Section */}
      <section className="max-w-7xl mx-auto px-12 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Our Story"
            className="rounded-2xl shadow-lg w-[484px]"
          />
        </div>
        <div>
          <h2 className="text-2xl font-sans text-gray-900 mb-6">Our Story</h2>
          <p className="text-gray-600 text-md font-sans leading-relaxed mb-3">
            Founded in 2024, Minimal started as a personal blog and has grown
            into a platform for designers, developers, and creative
            professionals who appreciate clean design and thoughtful writing.
          </p>
          <p className="text-gray-600 text-md font-sans leading-relaxed mb-3">
            We believe that great design isn't about adding more—it's about
            removing everything that doesn't serve a purpose. This philosophy
            guides not just our content, but how we approach every aspect of our
            platform.
          </p>
          <p className="text-gray-600 text-md font-sans leading-relaxed">
            Our community includes designers from Apple, Google, Stripe, and
            hundreds of other companies who value quality over quantity.
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
        <p className="text-gray-600 text-lg mb-12">
          The principles that guide everything we create and share.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "◯",
              title: "Simplicity",
              desc: "We believe in removing complexity, not adding features. Every design decision should serve the user's goal.",
            },
            {
              icon: "◆",
              title: "Quality",
              desc: "We choose depth over breadth. Every piece of content is carefully crafted and thoroughly researched.",
            },
            {
              icon: "△",
              title: "Community",
              desc: "Great design happens through collaboration. We foster a community of thoughtful designers and developers.",
            },
          ].map((value, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-[#0a1128] text-white text-xl mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Meet the Team
          </h2>
          <p className="text-gray-600 text-lg mb-12">
            The people behind Minimal's thoughtful content and clean design.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Rivera",
                role: "Founder & Editor",
                desc: "Former design lead at a Fortune 500 company. Passionate about minimalist design and its impact on user experience.",
                img: "https://randomuser.me/api/portraits/women/44.jpg",
              },
              {
                name: "Sarah Chen",
                role: "Content Strategist",
                desc: "Award-winning writer and design researcher. Focuses on the intersection of technology and human behavior.",
                img: "https://randomuser.me/api/portraits/women/65.jpg",
              },
              {
                name: "David Park",
                role: "Technical Lead",
                desc: "Full-stack developer with expertise in performance optimization and accessible web technologies.",
                img: "https://randomuser.me/api/portraits/men/32.jpg",
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition text-center"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white shadow-md"
                />
                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                  {member.name}
                </h4>
                <p className="text-sm text-gray-600 mb-4">{member.role}</p>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
