import Sidebar from "../components/Sidebar"
import BlogCard from "../components/BlogCard"
import { useSelector, useDispatch } from "react-redux"
import { deleteBlog } from "../features/blogSlice"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const Home = () => {

  const blogs = useSelector(state => state.blog.posts)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState("all")

  // filter
  const filteredBlogs =
    selectedCategory === "all"
      ? blogs
      : blogs.filter(blog => blog.category  ?.toLowerCase().replace(" ", "")  === selectedCategory)

  return (
    <div className="min-h-screen flex p-5">

      {/* sidebar added on the left */}

      <div><Sidebar setSelectedCategory={setSelectedCategory} /></div>


      {/* Hero section */}

      <div className="flex-1 p-5 pt-20">

        <div className="w-full h-80 lg:h-[500px] relative rounded-lg overflow-hidden">
          <img
            src="https://freerangestock.com/sample/178096/modern-workspace-with-laptop-coffee-and-plant-on-wooden-desk.jpg"
            alt="Hero"
            className="w-full h-full object-cover brightness-90"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-5">
            <h1 className="text-3xl lg:text-5xl font-bold mb-3">
              Welcome to BlogSphere
            </h1>
            <p className="text-lg lg:text-2xl">
              Explore blogs with blogSphere.
            </p>
          </div>
        </div>


        {/* blog card grid */}

        <h1 className="text-4xl font-bold mb-5 mt-2 bg-blue-700 text-center text-white">Latest Blogs </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {filteredBlogs?.map(blog => (
            <div key={blog.id} className="relative">
              <BlogCard {...blog} />
              <div className="absolute top-2 right-2 flex gap-2">
                <button
                  onClick={() => navigate(`/edit/${blog.id}`)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => dispatch(deleteBlog(blog.id))}
                  className="bg-red-600 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}

export default Home