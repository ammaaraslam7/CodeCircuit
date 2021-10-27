import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import PostsList from '../components/PostsList'
import Wrapper from '../components/Wrapper'
import SEO from '../components/SEO'
import Hero from '../components/Hero'

const PageBody = styled.div`
    background-color: white;
    width: 96%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 45px;
    transform: translateY(-50px);
    padding: 10px;
    padding-top: 20px;
    padding-bottom: 10px;
`

const PageTitle = styled.h1`
  padding-bottom: 10px;
  text-transform: capitalize;
`

class Tags extends React.Component {
  render() {
    const pageTitle = `${this.props.pageContext.tag}`
    const posts = this.props.data.posts.edges

    return (
      <Layout location={this.props.location}>
        <SEO title={`Top blog posts on ${this.props.pageContext.tag}`} />
        <Hero title={pageTitle} />

        <PageBody>
          <PageTitle>Posts on {this.props.pageContext.tag}</PageTitle>
          <PostsList posts={posts} />
        </PageBody>
      </Layout>
    )
  }
}

export default Tags

export const pageQuery = graphql`
  query PostsByTag($tag: String!) {
    posts: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          tags: { eq: $tag }
          published: { ne: false }
          unlisted: { ne: true }
        }
      }
    ) {
      edges {
        node {
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            language
            slug
          }
        }
      }
    }
  }
`
