import React from 'react'
import { Link } from 'react-router-dom'

const MainNav = () => {
  return (
    <div className="mainNav">
      <div className="mainNav__links">
        <Link className='mainNav__linkItem' to="/">Trang chủ</Link>
        <Link className='mainNav__linkItem' to="/write">Viết Bài</Link>
      </div>
    </div>
  )
}

export default MainNav