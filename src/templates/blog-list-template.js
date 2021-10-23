import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Wrapper from '../components/Wrapper'
import Hero from '../components/Hero'
import PostsList from '../components/PostsList'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import styled from 'styled-components'
import Button from '../components/Button'
import useSiteMetadata from '../hooks/use-site-config'
import { media } from '../tokens'
import useSiteImages from '../hooks/use-site-images'

const HomeContainer = styled.div`
    background-color: var(--color-darkColor);
    width: 100%;
    padding: 0;
    align-items: center
`

const HomeHero = styled.div`
    position: relative;
    width: 100%;
    height: 90vh;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background: black;
    top: 0;
    display: flex;
    align-items: center;
    text-align: center;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    
`
const HomeHeroLogo = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;



`
const HomeHeroInfo = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    color: var(--color-primaryColor)

`
const HomeHeroInfoHeading = styled.h1`
    text-decoration: none;
    padding-bottom: 20px;
    font-size: 4rem;
    font-weight: 1700;
    line-height: 1.3cm;
`
const HomeHeroInfoPara = styled.p`
    text-decoration: none;
    padding-bottom: 35px;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 0.85cm;
`
const HomeBodyWrapper = styled.div`
    background-color: black;
    width: 93%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 45px;
    transform: translateY(-50px);
    padding: 10px;

`

const RecentPostsSection = styled.div`
    position: relative;
    display: table;
    width: 100%;
    height: 100vh;
    border-radius: 45px;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background: var(--color-white);
    padding-top: 20px;

`

const RecentPostsSectionTitle = styled.h1`
    margin-left: 3%;
    text-decoration: none;
    font-size: 3.3rem;
    padding-top: 20px;
    font-weight: 1500;
    line-height: 1.3cm;
    color: var(--color-lightColor);
    border-bottom: 2px solid black;
`

const AllBtn = styled.div`
    position: absolute;
    right: 15px;
    transform: translateY(-55px);
`

const TagsSection = styled.div`
    position: relative;
    display: table;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background: var(--color-darkColor);
    border-top: 2px dashed var(--color-lightColor);
`

const TagsSectionTitle = styled.h1`
    margin-left: 3%;
    padding-top: 20px;
    text-decoration: none;
    padding-bottom: 20px;
    font-size: 3.3rem;
    font-weight: 1500;
    line-height: 1.3cm;
    color: var(--color-lightColor);
`

const TopicsWrapper = styled.div`
    padding-left: 150px;
    padding-right: 150px;
    padding-top: 10px;
    padding-bottom: 10px;
    list-style: none;
    display: grid;
    justify-items: center;
    grid-gap: 70px;
    grid-template-columns: repeat(3, 1fr);

    @media screen and (max-width: 500px) {
        & {
        grid-template-columns: repeat(1, 1fr);
        }
    }
`



class BlogList extends React.Component {

  render() {
    const { title, description } = this.props.data.site.siteMetadata
    const posts = this.props.data.posts.edges
    const { pageContext } = this.props

    return (
      <Layout>
        <SEO />
        <HomeContainer>
          <HomeHero>            
            <HomeHeroInfo>
              <HomeHeroInfoHeading>
                Code Circuit
              </HomeHeroInfoHeading>
              <HomeHeroInfoPara>
                Programming and Web Development tutorials.
              </HomeHeroInfoPara>
              <Button type="big-secondary" textColor='var(--color-darkColor)'>Secondary</Button>
            </HomeHeroInfo>
          </HomeHero>
          <HomeBodyWrapper>
            <RecentPostsSection>
              <RecentPostsSectionTitle>
                Recent Articles
                <AllBtn><Button type="mini-primary" textColor='var(--color-darkColor)'>All Posts ➡ </Button></AllBtn>
                <PostsList posts={posts} />
              </RecentPostsSectionTitle>
            </RecentPostsSection>
          </HomeBodyWrapper>
        </HomeContainer>
      </Layout>
    )
  }
}

export default BlogList

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
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
      limit: $limit
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
          }
        }
      }
    }
  }
`
