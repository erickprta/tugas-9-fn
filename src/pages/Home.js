// Import Footer, Hero, Movies, Navbar Components
import React, { useState } from 'react'
import Hero from "../components/Hero/Hero";
import Movies from '../components/Movies/Movies';


/**
 * Membuat Component Home.
 * Menampilkan Halaman Home.
 * Menampung Navbar, Main, dan Footer Component
 */

const Home = (props) => {
  const { item, setItem } = props

  return (
    <div>
      <Hero />
      <Movies item={item} setItem={setItem}/>
    </div>
  
  )
}
export default Home;