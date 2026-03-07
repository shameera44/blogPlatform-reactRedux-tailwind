import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBlog } from "../features/blogSlice.js"; // ✅ Correct import
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [readingTime, setReadingTime] = useState(5);
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create new blog object
    const newBlog = {
      id: Date.now(), // simple unique ID
      title,
      description,
      author,
      category,
      readingTime,
      image: image || `https://picsum.photos/400/300?${Date.now()}`, // placeholder if empty
    };

    // Dispatch addBlog action
    dispatch(addBlog(newBlog));

    // Navigate back to home
    navigate("/");
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-20">
      <h1 className="text-2xl font-bold mb-4 text-center">Create New Blog</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          className="w-full border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          className="w-full border p-2 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author"
          className="w-full border p-2 rounded"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Category"
          className="w-full border p-2 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Reading Time (min)"
          className="w-full border p-2 rounded"
          value={readingTime}
          onChange={(e) => setReadingTime(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image URL (optional)"
          className="w-full border p-2 rounded"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700 transition">
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default CreatePost;