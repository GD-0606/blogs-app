import axios from "axios";
import React, { useState } from "react";

const CreateBlog = () => {
  const [data, setData] = useState({ title: "", content: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/posts", data);
    console.log("success");
    setData({ title: "", content: "" });
  };
  return (
    <div>
      create a post
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          onChange={(e) => {
            setData((prev) => {
              return {
                ...prev,
                title: e.target.value,
              };
            });
          }}
          value={data.title}
        />
        <input
          type="text"
          onChange={(e) => {
            setData((prev) => {
              return {
                ...prev,
                content: e.target.value,
              };
            });
          }}
          value={data.content}
        />
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default CreateBlog;
