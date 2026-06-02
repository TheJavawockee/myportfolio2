import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="app-root">
      <Nav />
      <main>
        <Hero />
        <section className="content">
          <h3>Projects & Games</h3>
          <p className="muted">Explore the games and media — more content coming soon.</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}
