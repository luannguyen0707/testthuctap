import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Lists from "./Lists";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
    }
  }, []);
  return (
    <>
      <Lists />
      <div className="post">
        <div className="post__wrapper">
          {items.map((item, index) => (
            <div key={index} className="post__item" id={index}>
              <div className="post__heading">
                <h2>{item.title}</h2>
                <Link to={`/edit/${index}`} className="post__edit">Sửa</Link>
              </div>
              <p
                className="post__desc"
                dangerouslySetInnerHTML={{ __html: item.desc }}
              ></p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
