import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"
import Sidebar from "../components/sidebar"

export default function Contact() {
    return (
        <Layout>
            <Header headerText="Contact"/>
            <p>
                I'd love to talk! Email me at the address below
            </p>
            <p>
                <a href="mailto:me@example.com">me@example.com</a>
            </p>
            <Sidebar>      </Sidebar>  
            <Footer/>
        </Layout>
    )
}