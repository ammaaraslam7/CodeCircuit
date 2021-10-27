import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import Layout from '../components/layout'
import PostsList from '../components/PostsList'
import Wrapper from '../components/Wrapper'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import styled from 'styled-components'
import TagItem from '../components/TagItem'

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

const TagList = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 100px;
  padding-right: 100px;
  list-style: none;
  display: grid;
  justify-items: center;
  grid-gap: 100px;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 500px) {
    & {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
    <Layout>
        <SEO title={`All Tags`} />
        <Hero title="All Tags" />
        <PageBody>
          <TagList>
              {group.map(tag => (
              <li key={tag.fieldValue}>
                  <TagItem type={tag.fieldValue} to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                  </TagItem>
                  {/* <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                  </Link> */}
              </li>
              ))}
          </TagList>
        </PageBody>
    </Layout>
      
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`