import { Link } from "react-router-dom"

const BlogCard = ({ id, title, description, author, category, image, readingTime, onEdit, onDelete, searchTerm }) => {

  const highlightText = (text) => {

    if (!searchTerm) return text

    const regex = new RegExp(`(${searchTerm})`, "gi")

    return text.split(regex).map((part, index) =>
      part.toLowerCase() === searchTerm.toLowerCase()
        ? <span key={index} className="bg-yellow-300 px-1 rounded">{part}</span>
        : part
    )
  }


  return (

    <Link to={`/postdetails/${id}`}>
      <div className="bg-white rounded-lg shadow-md ">

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
            {highlightText(title)}
          </h2>

          <p className="text-gray-600 text-sm mt-2">
            {highlightText(description)}
          </p>

          <div className="flex justify-between text-sm text-gray-500 mt-3">
            <span>By By {highlightText(author)}</span>
            <span>{readingTime} min read</span>
          </div>
          <div className="flex gap-2 mt-3">

            <button
              onClick={(e) => {
                e.preventDefault()
                onEdit()
              }}
              className="bg-yellow-500 text-white px-3 py-1 rounded cursor-pointer"> Edit</button>

            <button
              onClick={(e) => {
                e.preventDefault()
                onDelete()
              }}
              className="bg-red-600 text-white px-3 py-1 rounded cursor-pointer "
            >
              Delete
            </button>


          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard