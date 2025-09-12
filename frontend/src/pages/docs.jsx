import Footer from "../components/Footer";

export default function Docs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Docs Section (Left part from the image) */}
      <div className="w-full py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sans text-gray-900 mb-4">
              Docs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The modern content engine for API docs and product guides.
            </p>
            <p className="text-gray-500 mt-2">
              Create and scale dynamic developer docs and API references. Built
              for teams needing full control and customization — no heavy
              lifting, no upkeep, no reinventing the wheel.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-8 mt-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Explore docs
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Architecture Column */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                  Architecture
                </h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                    Documentation
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                    Seminars
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                    API References
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                    S&P packages
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                    All interfaces
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                    About us
                  </li>
                </ul>
              </div>

              {/* Introduction Column */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                  Introduction
                </h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                    Overview
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                    Getting Started
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                    Promotions
                  </li>
                </ul>
              </div>

              {/* Settings Column */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                  Settings your environment
                </h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                    Settings Performed
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                    Configurings your first project
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                    Working with on-Direct API
                  </li>
                </ul>
              </div>

              {/* Building application Column */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                  Building application
                </h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                    Creating a new application
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                    Understanding the architectural flexibility they undertake
                  </li>
                </ul>
              </div>

              {/* Developing applications Column */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                  Developing applications
                </h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                    Development options
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                    Monitoring and logging
                  </li>
                </ul>
              </div>

              {/* Advanced themes Column */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                  Advanced themes
                </h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                    Employment Options
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                    Monitoring and logging
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
