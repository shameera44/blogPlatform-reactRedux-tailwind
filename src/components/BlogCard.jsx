import { Link } from "react-router-dom"

const BlogCard = ({ id, title, description, author, category, image, readingTime }) => {
  return (

    <Link to={`/postdetails/${id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg">

        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />

        <div className="p-4">

          <span className="text-xs text-blue-600 font-semibold">
            {category}
          </span>

          <h2 className="text-lg font-bold mt-2">
            {title}
          </h2>

          <p className="text-gray-600 text-sm mt-2">
            {description}
          </p>

          <div className="flex justify-between text-sm text-gray-500 mt-3">
            <span>By {author}</span>
            <span>{readingTime} min read</span>
          </div>

        </div>

      </div>
    </Link>
  )
}

export default BlogCard