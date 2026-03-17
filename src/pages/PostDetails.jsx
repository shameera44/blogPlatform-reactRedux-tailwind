import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { useState } from "react"
import Comment from "../components/comment"
import ShareButtons from "../components/ShareButton"

const PostDetails = () => {

  const { id } = useParams()
const blogs = useSelector(state => state.blog.posts)
 const blog = blogs.find(post => post.id === Number(id))
const [summary, setSummary] = useState("")

const generateSummary = () => {

    const cleanText = blog.content.replace(/<[^>]+>/g, "")
const words = cleanText.split(" ").slice(0, 30).join(" ")

  setSummary(words + "...")
  }

  if (!blog) {
    return <h1 className="text-center mt-20">Blog not found</h1>
  }

  return (
    <div className="max-w-4xl mx-auto p-5 mt-20">

      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-96 object-cover rounded-lg"
      />

      <h1 className="text-4xl font-bold mt-5">
        {blog.title}
      </h1>

      <p className="text-gray-500 mt-2">
        By {blog.author} • {blog.readingTime} min read
      </p>

      <span className="text-blue-600 font-semibold">
        {blog.category}
      </span>

      {/* FULL CONTENT FIRST */}
<div
  className="mt-5 text-lg text-gray-700"
  dangerouslySetInnerHTML={{ __html: blog.content }}
></div>

{/* Summary Button */}
{!summary && (
  <button
    onClick={generateSummary}
    className="bg-green-600 text-white px-4 py-2 mt-5 rounded cursor-pointer hover:bg-green-700"
  >
    Generate AI Summary
  </button>
)}

{/* Summary BELOW content */}
{summary && (
  <div className="mt-6 p-4 bg-gray-100 rounded-lg">
    <h3 className="font-bold text-lg mb-2">
      AI Summary
    </h3>
    <p className="text-gray-700">{summary}</p>
  </div>
)}

      <ShareButtons title={blog.title} />

      <Comment />

    </div>
  )
}

export default PostDetails