
const Sidebar = () => {

  const categories = [
    { name: "Web Development", tag: "webdev" },
    { name: "React", tag: "react" },
    { name: "JavaScript", tag: "javascript" },
    { name: "Python", tag: "python" },
    { name: "Artificial Intelligence", tag: "ai" }
  ]

  return (
    <div className=" min-h-screen w-60  p-5 pt-30  ">

      <h2 className="text-2xl font-extrabold mb-7 mt-5 text-orange-700">Categories</h2>

      <ul className="flex flex-col gap-7 text-xl text-blue-900">

        {categories.map((category) => (
          <li
            key={category.tag}
             onClick={() => console.log(category.tag)}
            className="cursor-pointer hover:text-orange-600 font-medium"
          >
            {category.name}
          </li>
        ))}

      </ul>

    </div>
  )
}

export default Sidebar