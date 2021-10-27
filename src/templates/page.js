import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Content from '../components/Content'
import Wrapper from '../components/Wrapper'
import Hero from '../components/Hero'
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

const Page = props => {
  const page = props.data.page

  return (
    <Layout location={props.location}>
      <SEO
        title={page.frontmatter.title}
        description={page.excerpt}
        path={page.frontmatter.slug}
        cover={page.frontmatter.cover && page.frontmatter.cover.publicURL}
      />

      <Hero
        heroImg={page.frontmatter.cover && page.frontmatter.cover.publicURL}
        title={page.frontmatter.title}
      />

      <PageBody>
        <article>
          <Content content={page.body} date={page.frontmatter.date} />
        </article>
      </PageBody>

      {page.frontmatter.disqus && (
        <Wrapper as="aside">
          <Disqus slug={page.frontmatter.slug} title={page.frontmatter.title} />
        </Wrapper>
      )}
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query($slug: String!) {
    page: mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
        disqus
        cover {
          publicURL
        }
      }
    }
  }
`
