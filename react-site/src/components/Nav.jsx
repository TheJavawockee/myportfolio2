import React from 'react'

export default function Nav(){
  return (
    <header className="nav-wrap">
      <div className="container">
        <div className="brand">The Javawockee</div>
        <nav>
          <ul className="nav">
            <li><a href="../index.html">Home</a></li>
            <li><a href="../about.html">About</a></li>
            <li><a href="../gallery.html">Gallery</a></li>
            <li><a href="../games.html">Games</a></li>
            <li><a href="../contact.html">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
