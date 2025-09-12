import React from "react";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="bg-white">
      {/* About Minimal Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-sans font-semibold text-gray-900 mb-4 md:mb-6">
              About Minimal
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              We believe in the power of simplicity. Our mission is to create
              beautiful, thoughtful content about design, technology, and the
              intersection of both.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href="#"
                className="px-5 py-3 rounded-full bg-[#0a1128] text-white font-sans text-sm md:text-base shadow-sm hover:bg-[#050a1a] transition text-center"
              >
                Read Our Story
              </a>
              <a
                href="#"
                className="px-5 py-3 rounded-full border border-gray-300 text-gray-700 font-sans text-sm md:text-base hover:bg-gray-50 transition text-center"
              >
                Join Our Community
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1559136560-16ad036d85d3?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About Minimal"
              className="rounded-2xl shadow-lg w-full h-auto max-w-full md:max-w-[484px] mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Our Story"
              className="rounded-2xl shadow-lg w-full h-auto max-w-full md:max-w-[484px] mx-auto"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-sans font-semibold text-gray-900 mb-4 md:mb-6">Our Story</h2>
            <p className="text-gray-600 text-sm md:text-base font-sans leading-relaxed mb-4">
              Founded in 2024, Minimal started as a personal blog and has grown
              into a platform for designers, developers, and creative
              professionals who appreciate clean design and thoughtful writing.
            </p>
            <p className="text-gray-600 text-sm md:text-base font-sans leading-relaxed mb-4">
              We believe that great design isn't about adding more—it's about
              removing everything that doesn't serve a purpose. This philosophy
              guides not just our content, but how we approach every aspect of our
              platform.
            </p>
            <p className="text-gray-600 text-sm md:text-base font-sans leading-relaxed">
              Our community includes designers from Apple, Google, Stripe, and
              hundreds of other companies who value quality over quantity.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Our Values</h2>
        <p className="text-gray-600 text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto">
          The principles that guide everything we create and share.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
              className="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 mx-auto flex items-center justify-center rounded-full bg-[#0a1128] text-white text-lg md:text-xl mb-4 md:mb-6">
                {value.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="bg-gray-50 py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
            Meet the Team
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto">
            The people behind Minimal's thoughtful content and clean design.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition text-center"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto mb-3 md:mb-4 border-4 border-white shadow-md"
                />
                <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">
                  {member.name}
                </h4>
                <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">{member.role}</p>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
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