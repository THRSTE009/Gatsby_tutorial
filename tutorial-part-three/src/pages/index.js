import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"
import Sidebar from "../components/sidebar"

export default function Home() {
  return (
    <Layout>
      <Header headerText="Welcome to my website!"/>
      <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
      <p>
        What do I like to do? Lots of course but definitely enjoy building
        websites.
      </p>
      <Sidebar/>   
      <Footer/>
    </Layout>
    
  )
}