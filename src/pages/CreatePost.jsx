import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addBlog } from "../features/blog/blogSlice.js";
import { useNavigate } from "react-router-dom";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const CreatePost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(""); // short preview
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [readingTime, setReadingTime] = useState(5);
  const [image, setImage] = useState("");
  const [content, setContent] = useState(""); // full blog

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    if (!quillRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
        placeholder: "Write full blog content...",
        modules: {
          toolbar: [
            ["bold", "italic", "underline"],
            [{ header: [1, 2, 3, false] }],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link"]
          ]
        }
      });

      // ✅ ONLY ONE listener
      quillRef.current.on("text-change", () => {
        const html = quillRef.current.root.innerHTML;
        setContent(html);
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = {
      id: Date.now(),
      title,
      description, // short
      content,     // full HTML
      author,
      category,
      readingTime,
      image,
    };

    dispatch(addBlog(newBlog));
    navigate("/");
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-20">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Create New Blog
      </h1>

      <form
        className="space-y-4 border-2 border-gray-200 p-5 rounded-xl shadow-xl"
        onSubmit={handleSubmit}
      >

        {/* Title */}
        <input
          type="text"
          placeholder="Title"
          className="w-full border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        {/*  Description (separate) */}
        <textarea
          placeholder="Short Description (for blog card)"
          className="w-full border p-2 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength={150}
        />

        {/*  Content Editor */}
        <label className="font-semibold ">Blog Content</label>
        <div
          ref={editorRef}
          className="bg-white h-64 border rounded p-2 mb-2"
        ></div>

        {/* Author */}
        <input
          type="text"
          placeholder="Author"
          className="w-full border p-2 rounded"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />

        {/* Category */}
        <input
          type="text"
          placeholder="Category"
          className="w-full border p-2 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />

        {/* Reading Time */}
        <input
          type="number"
          placeholder="Reading Time (min)"
          className="w-full border p-2 rounded"
          value={readingTime}
          onChange={(e) => setReadingTime(e.target.value)}
          required
        />

        {/* Image */}
        <input
          type="text"
          placeholder="Image URL (optional)"
          className="w-full border p-2 rounded"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        {/* Submit */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700 transition">
          Add Blog
        </button>

      </form>
    </div>
  );
};

export default CreatePost;