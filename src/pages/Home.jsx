import Sidebar from "../components/Sidebar"
import BlogCard from "../components/BlogCard"
import { useSelector, useDispatch } from "react-redux"
import { deleteBlog } from "../features/blog/blogSlice"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import toast from "react-hot-toast"
const Home = ({ searchTerm }) => {

  const blogs = useSelector(state => state.blog.posts)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState("all")
  const user = useSelector(state => state.auth.loggedinUser)

  // category filter
  const categoryFiltered =
    selectedCategory === "all"
      ? blogs
      : blogs.filter(blog =>
        blog.category?.toLowerCase().replace(" ", "") === selectedCategory
      )

  // search filter
  const searchFiltered = categoryFiltered.filter(blog =>
    blog.title?.toLowerCase().includes(searchTerm?.toLowerCase() || "") ||
    blog.description?.toLowerCase().includes(searchTerm?.toLowerCase() || "") ||
    blog.author?.toLowerCase().includes(searchTerm?.toLowerCase() || "")
  )

  return (
    <div className="min-h-screen flex flex-col lg:flex-row p-5">

      {/* sidebar added on the left */}

      <div><Sidebar setSelectedCategory={setSelectedCategory} /></div>


      {/* Hero section */}

      <div className="flex-1 p-5 pt-10">

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

        <h1 className="text-4xl font-bold mb-2 mt-2 bg-gray-600 text-center text-white">Latest Blogs </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">


          {searchFiltered.length > 0 ? (
            searchFiltered?.map(blog => (
              <div key={blog.id} className="relative">
                <BlogCard {...blog}
                  onEdit={() => navigate(`/edit/${blog.id}`)}
                  onDelete={() => {
                    if (!user) {
                      toast("Please login to delete blog")
                      navigate("/login")
                      return
                    }
                    dispatch(deleteBlog(blog.id))
                  }} />
              </div>))) : (
            <p className=" text-center text-red-500 font-bold text-xl">
              No Blogs Found</p>
          )}

        </div>
      </div>
    </div>
  )
}

export default Home