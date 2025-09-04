import Footer from "../components/Footer";
import Blog from "../pages/Blog";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="min-h-[70vh] flex flex-col justify-center items-center px-6">
        <div className="text-center">
          <h1 className="text-2xl md:text-5xl font-sans text-gray-900 mb-6 leading-tight tracking-normal">
            Thoughtful Writing About <br className="hidden md:block" />
            Design & Technology
          </h1>

          <p className="text-lg md:text-[18px] text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed tracking-normal">
            Explore insights on minimalist design, user experience, and the
            future
            <br className="hidden md:block" /> of digital products.
          </p>
        </div>
      </div>
      <div className="w-full bg-gray-100 py-4">
        <Blog />
      </div>
     
    </div>
  );
}
