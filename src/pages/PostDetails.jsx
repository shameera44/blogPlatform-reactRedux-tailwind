import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import Comment from "../components/comment"

const PostDetails = () => {

  const { id } = useParams()

  const blogs = useSelector(state => state.blog.posts)

  const blog = blogs.find(post => post.id === Number(id))

  if (!blog) {
    return <h1 className="text-center mt-20 ">Blog not found</h1>
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

      <p className="mt-5 text-lg text-gray-700">
        {blog.description}
      </p>
      <p className="mt-5 text-lg text-gray-700">
        {blog.content}
      </p>
      <Comment />
    </div>
  )
}

export default PostDetails