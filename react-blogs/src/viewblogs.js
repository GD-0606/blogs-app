import axios from "axios";
import React, { useEffect, useState } from "react";

const Viewblogs = () => {
  const [data, setDate] = useState([]);

  useEffect(() => {
    const fetchDta = async () => {
      const res = await axios.get("http://localhost:5000/posts");
      setDate(res.data);
    };
    fetchDta();
  }, []);
  return (
    <div>
      {data.length > 0 &&
        data.map((post, ind) => (
          <div key={ind}>
            <p>{post.title}</p>
            <p>{post.content}</p>
            <button>view Comments</button>
          </div>
        ))}
    </div>
  );
};

export default Viewblogs;
