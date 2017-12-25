import React from 'react'
import Link from 'gatsby-link'

import Footer from './components/Footer'
import Intro from './components/Intro'
import Header from './components/Header'
import Bubble from './components/Bubble'
// import AboutMe from './components/AboutMe'

const IndexPage = ({ data }) => (
  <div className="body home-colors">
    <div id="app" className="wrapper">
      <Header />
      <Intro />
      <section className="projects grid">
        {
          data.allMarkdownRemark.edges.map(post => (
            <div className="project grid__col grid__col--1-of-3" key={post.node.id}>
              <span className="meta-data code">{post.node.frontmatter.tags}</span>
              <Link to={post.node.frontmatter.path} href={post.node.frontmatter.path} className="faux-link">
                <span data-volume={post.node.frontmatter.volume} data-homeImage={post.node.frontmatter.homeImage}>{post.node.frontmatter.description}</span>
              </Link>
            </div>
          ))
        }
      </section>
      <Footer />
    </div>
    <Bubble />
  </div>)

export const pageQuery = graphql`
  query IndexQuery { allMarkdownRemark(
    limit: 10,
    sort: { fields:[ frontmatter___date], order: ASC }
    filter:{ frontmatter: { published: { eq: true } } }
  ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            published
            date
            description
            tags
            volume
            homeImage
            timePeriod
          }
        }
      }
    }
  }
`

export default IndexPage
