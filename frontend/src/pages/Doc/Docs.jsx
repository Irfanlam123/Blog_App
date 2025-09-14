import React from "react";

const Docs = () => {
  const sections = [
    { id: "intro", title: "Introduction" },
    { id: "getting-started", title: "Getting Started" },
    { id: "installation", title: "Installation" },
    { id: "usage", title: "Usage" },
    { id: "api", title: "API Reference" },
    { id: "faq", title: "FAQ" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-8">
      {/* Left Sidebar - Table of Contents */}
      <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto border-r border-gray-200 pr-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Contents</h2>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 space-y-12">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
              lorem nec sapien tristique tincidunt. Nulla facilisi. Mauris
              pharetra euismod sapien, sed gravida erat cursus a.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </section>
        ))}
      </main>
    </div>
  );
};

export default Docs;
