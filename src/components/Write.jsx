import React, { useEffect, useState } from 'react';
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { Link } from 'react-router-dom';

const Write = () => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || []);
  const { quill, quillRef } = useQuill();
  useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        setDesc(quillRef.current.firstChild.innerHTML);
      });
    }
  }, [quill, quillRef]);

  const handleSubmit = (e) => {
    e.preventDefault();  
    const newPost = {
      title,
      desc,
    };
    setItems([...items, newPost])
    setShow(true);
  }
  localStorage.setItem('items', JSON.stringify(items));
  // console.log(items);
  return (
    
    <div className="write">
    <div className="write__wrapper">
      <form className="write__form" onSubmit={handleSubmit}>
        <div className="write__formGroup">
        <input
          type="text"
          className="write__input"
          placeholder="Tiêu đề"
          autoFocus={true}
          onChange={(e) => setTitle(e.target.value)}
        />
        </div>

        <div className="write__formGroup">
          <div
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <div ref={quillRef} />
          </div>
        </div>

        <button
          className="write__submit"
          type="submit"
        >
          Đăng bài
        </button>
      </form>
      {show && <p className='notification'>Đăng bài thành công<Link to="/">Xem bài viết</Link></p>}
    </div>
  </div>
  )
}

export default Write