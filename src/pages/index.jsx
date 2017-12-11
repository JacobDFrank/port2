import React from 'react'
import Link from 'gatsby-link'

// import Eboard from './components/Eboard'
// import Mailchimp from './components/Mailchimp'
// import About from './components/About'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Intro from './components/Intro'
import Header from './components/Header'
import Bubble from './components/Bubble'
import AboutMe from './components/AboutMe'

const IndexPage = ({data}) => (
  <div className="body home-colors">
  <div id="app" className="wrapper">
    <ul>
      {
        data.allMarkdownRemark.edges.map(post => (<li key={post.node.id}>
          <Link to={post.node.frontmatter.path}>
            {post.node.frontmatter.title}
          </Link>
        </li>))
      }
    </ul>
    <Header/>
    <Intro/>
    <Projects/>
    <Footer/>
  </div>
  <Bubble/>
</div>)

export const pageQuery = graphql `
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
          }
        }
      }
    }
  }
`

export default IndexPage
