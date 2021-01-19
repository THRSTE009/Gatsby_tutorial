import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"
import Sidebar from "../components/sidebar"

export default function About() {
    return (
        <Layout>
            <Header headerText="About us"/>
            <p>
                I’m good enough, I’m smart enough, and gosh darn it, people like me!
            </p>
            <Sidebar>      </Sidebar>  
            <Footer/>
        </Layout>
    )
}