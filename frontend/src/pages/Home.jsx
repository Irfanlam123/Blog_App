import Footer from "../components/Footer";
import Blog from "../pages/Blog";
import { Link } from "react-router-dom";
import Docs from "./Doc/Docs";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Dot Mask */}
      <div className="relative min-h-[70vh] flex flex-col justify-center items-center px-6 overflow-hidden">
        {/* Dot Mask Background (only for Hero) */}
        <div className="dot-mask"></div>

        <div className="text-center relative z-10">
          <h1 className="text-2xl md:text-5xl font-sans text-gray-900 mb-6 leading-tight tracking-normal">
            Create, collaborate, and
            <br className="hidden md:block" />
            scale your blogs and docs.
          </h1>

          <p className="text-lg md:text-[18px] text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed tracking-normal">
            Effortlessly build blogs, Docs, and product guides with{" "}
            <span className="text-gray-400 font-sans">Minimal</span>,<br className="hidden md:block" />
            with the flexibility of a headless CMS and more.
          </p>

          {/* Buttons Section */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              to="/login"
              className="bg-black text-white font-sans text-sm px-7 py-3 rounded-full border border-black hover:bg-gray-800 transition-colors"
            >
              Sign up for free
            </Link>
            <button className="bg-transparent text-gray-700 font-sans text-sm px-7 py-3 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
              📍 Talk to founders
            </button>
          </div>
        </div>
      </div>

      {/* Blog Section (No dot-mask here) */}
      <div className="w-full bg-gray-100 py-4">
        <Blog />
      </div>

      {/* Docs/API Section */}
      {/* <div>
        <Doc/>
      </div> */}
<div>
  <Docs/>
</div>
      <Footer />
    </div>
  );
}






