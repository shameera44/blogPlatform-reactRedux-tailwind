const Sidebar = () => {

  const categories = [
    "All",
    "Health",
    "Education",
    "Fitness",
    "Travel"
  ]

  return (
    <div className=" min-h-screen w-60 bg-gray-100 p-5 rounded-lg shadow-lg ">

      <h2 className="text-2xl font-extrabold mb-4 text-orange-700">Categories</h2>

      <ul className="flex flex-col gap-5 text-xl text-blue-900">

        {categories.map((category, index) => (
          <li
            key={index}
            className="cursor-pointer hover:text-orange-600 font-medium"
          >
            {category}
          </li>
        ))}

      </ul>

    </div>
  )
}

export default Sidebar