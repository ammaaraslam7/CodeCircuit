import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import PostsList from '../components/PostsList'
import { graphql } from 'gatsby'

class AllArticlesPage extends React.Component {
    render() {
        const posts = this.props.data.posts.edges

        return (
            <Layout>
                <SEO title={`All Articles Page`} />
                <Hero title="All Articles Page" />
                <PostsList posts={posts} />
            </Layout>
        )
    }
}

export default AllArticlesPage
export const articlesQuery = graphql`
  query allArticlesQuery($skip: Int!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    posts: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "//content/posts//" }
        frontmatter: { published: { ne: false }, unlisted: { ne: true } }
      }
      limit: 50
      skip: $skip
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
            cover {
            publicURL
          }
          }
        }
      }
    }
  }
`