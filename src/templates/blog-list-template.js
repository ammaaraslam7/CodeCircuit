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
import TopicComponent from '../components/TopicsComponent'

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
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    
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
    background-color: white;
    width: 96%;
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
    padding-bottom: 15px;

`

const SectionTitle = styled.h1`
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
const RecentPosts = styled.div`
  padding-top: 10px;
  padding-left: 25px;
  padding-right: 25px;
`
const TopicsSection = styled.div`
  position: relative;
  display: table;
  width: 100%;
  height: 75vh;
  border-radius: 45px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background: var(--color-white);
  padding-top: 20px;
`

const Topics = styled.div`
  padding-top: 15px;
  padding-left: 45px;
  padding-right: 45px;
  list-style: none;
  display: grid;
  justify-items: center;
  grid-gap: 50px;
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
              <SectionTitle>
                Recent Articles
                <AllBtn><Button type="mini-primary" textColor='var(--color-darkColor)' to="/articles">All Posts ➡ </Button></AllBtn>
              </SectionTitle>
              <RecentPosts>
                <PostsList posts={posts} />
              </RecentPosts>
            </RecentPostsSection>
            <TopicsSection>
              <SectionTitle>
                Popular Topics
                <AllBtn><Button type="mini-primary" textColor='var(--color-darkColor)' to="/tags">All Topics ➡ </Button></AllBtn>
              </SectionTitle>
              <Topics>
                <TopicComponent backgroundColor="var(--color-primaryColor)" textColor="var(--color-darkColor)">Python</TopicComponent>
                <TopicComponent backgroundColor="var(--color-primaryColor)" textColor="var(--color-darkColor)">Python</TopicComponent>
                <TopicComponent backgroundColor="var(--color-primaryColor)" textColor="var(--color-darkColor)">Python</TopicComponent>
                <TopicComponent backgroundColor="var(--color-primaryColor)" textColor="var(--color-darkColor)">Python</TopicComponent>
                <TopicComponent backgroundColor="var(--color-primaryColor)" textColor="var(--color-darkColor)">Python</TopicComponent>
                <TopicComponent backgroundColor="var(--color-primaryColor)" textColor="var(--color-darkColor)">Python</TopicComponent>
              </Topics>
            </TopicsSection>
          </HomeBodyWrapper>
        </HomeContainer>
      </Layout>
    )
  }
}

export default BlogList

export const pageQuery = graphql`
  query blogListQuery($skip: Int!) {
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
      limit: 3
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
