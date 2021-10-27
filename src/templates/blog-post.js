import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Wrapper from '../components/Wrapper'
import PostHero from '../components/PostHero'
import Article from '../components/Article'
import PrevNextPost from '../components/PrevNextPost'
import SEO from '../components/SEO'
import Disqus from '../components/Disqus'
import styled from 'styled-components'

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

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.post
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        <SEO
          title={post.frontmatter.title}
          description={post.excerpt}
          cover={post.frontmatter.cover && post.frontmatter.cover.publicURL}
          imageShare={
            post.frontmatter.imageShare && post.frontmatter.imageShare.publicURL
          }
          lang={post.frontmatter.language}
          translations={post.frontmatter.translations}
          path={post.frontmatter.slug}
          isBlogPost
        />

        <PostHero
          heroImg={post.frontmatter.cover && post.frontmatter.cover.publicURL}
          title={post.frontmatter.title}
        />

        <PageBody>
          <Article post={post} />
        </PageBody>

        <Wrapper as="aside">
          <Disqus slug={post.frontmatter.slug} title={post.frontmatter.title} />
        </Wrapper>

        <PrevNextPost previous={previous} next={next} />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    post: mdx(frontmatter: { slug: { eq: $slug } }) {
      excerpt
      body
      frontmatter {
        title
        date
        slug
        language
        tags
        cover {
          publicURL
        }
        imageShare {
          publicURL
        }
        translations {
          language
          link
          hreflang
        }
      }
    }
  }
`
