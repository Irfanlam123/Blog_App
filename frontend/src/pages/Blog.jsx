import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { authorInfo } from "./blogData";

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/blogs") // API URL
      .then((res) => res.json())
      .then((data) => setBlogPosts(data))
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Blog cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article key={post._id || post.id} className="group">
                <div className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-all duration-500 border border-gray-100 h-full flex flex-col overflow-hidden">
                  <div className="relative w-full h-52 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex flex-col flex-grow p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3 tracking-wide">
                      <span className="font-sans">{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-sm font-sans font-semibold text-gray-900 mb-2 tracking-tight leading-snug group-hover:text-gray-700 transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-2 leading-relaxed tracking-normal text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto">
                      <a
                        href={`/blog/${post._id || post.id}`}
                        className="inline-flex items-center justify-center bg-[#0a1128] hover:bg-[#050a1a] px-5 py-2 rounded-full text-white text-sm font-medium transition-colors duration-300"
                      >
                        Read More
                        <svg
                          className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-24 h-24 mx-auto mb-4">
                <img
                  src="https://plus.unsplash.com/premium_photo-1705018501151-4045c97658a3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt={authorInfo.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md mx-auto"
                />
              </div>
              <h4 className="font-sans text-gray-900 tracking-tight text-lg">
                {authorInfo.name}
              </h4>
              <p className="text-sm text-gray-600 mb-4">{authorInfo.title}</p>
              <p className="text-gray-600 text-[15px] leading-relaxed tracking-normal mb-6">
                {authorInfo.bio}
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-900 transition"
                >
                  <span className="text-gray-600 text-sm">𝕏</span>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-900 transition"
                >
                  <span className="text-gray-600 text-sm">in</span>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-900 transition"
                >
                  <span className="text-gray-600 text-sm">⚡</span>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-sm border border-gray-100 mt-8">
              <h3 className="font-sans font-normal text-gray-900 text-xl mb-4 tracking-tight">
                Stay Updated
              </h3>
              <p className="text-gray-600 text-[15px] mb-6 leading-relaxed">
                Get the latest articles on design and technology delivered to
                your inbox.
              </p>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-300 focus:border-transparent transition-all duration-300"
                />
                <button className="w-full bg-black text-white py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



// import React, { useEffect, useState } from 'react'

// const Blog = () => {
  
//   const [blogs, setBlogs] = useState([])
// useEffect(() => {
//   fetch("http://localhost:8080/api/blogs")
//   .then((res) =>res.json())
//   .then((data)=>{
//     // console.log("Api data", data)
     
//       setBlogs(data)

   
//   }) 
//   .catch((err)=>{
//     console.log("error in fetching data" , err)
//   })
//   }, [])

//   return (
//     <div>
//         <h1>All blogs</h1>
//         {blogs.map((blog) => (
//           <div key={blog._id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
//             <h2>{blog.title}</h2>
//             <img src={blog.image} alt="blogImage"  style={{ width: "200px" }} />
//             <p>{blog.excerpt}</p>
//             <p>{blog.date} • {blog.readTime}</p>
//           </div>
//         ))}
//     </div>
//   )
// }

// export default Blog

