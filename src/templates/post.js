import React from 'react';
import Helmet from 'react-helmet';

import Footer from '../pages/components/Footer'
import Header from '../pages/components/Header'

export default function Template({data}) {
  const {markdownRemark: post} = data;
  return (
    <div id="app" className="wrapper body home-colors">
    <Header/>
    <section className="intro">
      <span className="meta-data code">{post.frontmatter.tags} - {post.frontmatter.timePeriod}</span>
      <h2><b>{post.frontmatter.title}</b> — {post.frontmatter.description}</h2>

    </section>
    <section className="content" dangerouslySetInnerHTML={{__html: post.html}} />
    <Footer/>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: {eq: $path} }) {
      html
      frontmatter {
        path
        title
        description
        tags
        volume
        homeImage
        timePeriod
      }
    }
  }
`
