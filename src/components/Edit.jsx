import React, { useEffect, useState } from 'react';
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const Edit = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/")[2];
  // console.log(id);
  const [show, setShow] = useState(false);
  const [items] = useState(JSON.parse(localStorage.getItem('items')) || []);
  const [title, setTitle] = useState(items[id].title);
  const [desc, setDesc] = useState(items[id].desc);
  // console.log(title)
  const { quill, quillRef } = useQuill();
  useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML(desc);
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

    items[id] = newPost;
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
          autoFocus={true}
          value={title}
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
          Cập nhật
        </button>
      </form>
      {show && <p className='notification'>Chỉnh sửa thành công<Link to="/">Xem bài viết</Link></p>}
    </div>
  </div>
  )
}

export default Edit