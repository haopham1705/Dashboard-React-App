import React from 'react'

function Header() {
  return (
    <>
      <div className="header-menu">
        <nav> 
          <Link to="">Home</Link>
          <Link to="products">Products</Link>
          <Link to="blog">Blog</Link>
        </nav>
      </div>
      <div className="header-banner">
        <h2>Header Banner Paragraph</h2>
      </div>
    </>
  )
}

export default Header