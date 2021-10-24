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

const Tags = styled.li`
  width: 30px;
  align-items: center;
  text-align: center;

`

const TagItem = ({children, onClick, to, tagName, disabled, type, style, ...props}) => {
  const [
    hover,
    setHover
  ] = useState(false);
  const toggleHover = () => {
      setHover(!hover);
  };
  const defaultColor = {
    backgroundColor : 'grey',
  }
  const gatsby = {
    backgroundColor : 'var(--color-gatsbyColor)',
  }
  const react = {
    backgroundColor : 'var(--color-reactColor)',
  }
  const python = {
    backgroundColor : 'var(--color-pythonColor)',
  }
  const js = {
    backgroundColor : 'var(--color-jsColor)',
  }
  const html = {
    backgroundColor : 'var(--color-htmlColor)',
  }
  const css= {
    backgroundColor : 'var(--color-cssColor)',
  }
  const django = {
    backgroundColor : 'var(--color-djangoColor)',
  }
  const flask = {
    backgroundColor : 'var(--color-flaskColor)',
  }
  const nodejs = {
    backgroundColor : 'var(--color-nodejsColor)',
  }
  const flutter = {
    backgroundColor : 'var(--color-flutterColor)',
  }
  const graphql = {
    backgroundColor : 'var(--color-graphqlColor)',
  }
  const netlify = {
    backgroundColor : 'var(--color-netlifyColor)',
  }
  const git = {
    backgroundColor : 'var(--color-gitColor)',
  }
  const sass = {
    backgroundColor : 'var(--color-sassColor)',
  }
  const github = {
    backgroundColor : 'var(--color-githubColor)',
  }
  const commonStyles = {
    backgroundColor : 'var(--color-secondaryColor)',
    color           : 'white'
  };
  const outlineStyles = {
      border          : `1px solid var(--color-primaryColor)`,
      color           : 'var(--color-primaryColor)',
      backgroundColor : 'white'
  };
  const outlineHoverStyle = {
      color           : 'white',
      backgroundColor : 'var(--color-primaryColor)'
  };

  const roundedStyle = {
      backgroundColor : 'var(--color-primaryColor)',
      color           : 'white',
      borderRadius    : '25px'
  };
  const disabledStyle = {
      cursor          : 'default',
      backgroundColor : 'var(--color-primaryColor)',
      color           : 'white',
      opacity         : 0.4
  };

  let tagStyle;
    switch (type) {
      case 'gatsby':
        if (hover) {
          tagStyle = gatsby;
        }
        else {
          tagStyle = gatsby;
        }
        break;
      case 'gatsby':
        if (hover) {
          tagStyle = gatsby;
        }
        else {
          tagStyle = gatsby;
        }
        break;
      case 'gatsby':
        if (hover) {
          tagStyle = gatsby;
        }
        else {
          tagStyle = gatsby;
        }
        break;
      case 'gatsby':
        if (hover) {
          tagStyle = gatsby;
        }
        else {
          tagStyle = gatsby;
          }
          break;
        case 'gatsby':
          if (hover) {
            tagStyle = gatsby;
            }
          else {
            tagStyle = gatsby;
            }
          break;
        case 'gatsby':
          if (hover) {
            tagStyle = gatsby;
            }
          else {
            tagStyle = gatsby;
            }
          break;
        case 'gatsby':
          if (hover) {
            tagStyle = gatsby;
          }
          else {
            tagStyle = gatsby;
          }
          break;
        case 'gatsby':
          if (hover) {
            tagStyle = gatsby;
          }
          else {
            tagStyle = gatsby;
          }
          break;
        case 'gatsby':
          if (hover) {
            tagStyle = gatsby;
          }
          else {
            tagStyle = gatsby;
            }
          break;
        case 'gatsby':
          if (hover) {
            tagStyle = gatsby;
          }
          else {
            tagStyle = gatsby;
          }
          break;
        case 'gatsby':
          if (hover) {
            tagStyle = gatsby;
          }
          else {
            tagStyle = gatsby;
            }
          break;
        case 'gatsby':
          if (hover) {
            tagStyle = gatsby;
          }
          else {
            tagStyle = gatsby;
          }
          break;
        default:
            tagStyle = defaultColor;
            break;
      }
      return (
        <Tags
             style={

                     disabled ? { ...commonStyles, ...btnStyle, ...disabledStyle, ...style } :
                     { ...commonStyles, ...btnStyle, ...style }
             }
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            {...props}
            type="button"
            to={to}
            onClick={

                    !disabled ? onClick :
                    () => {}
            }
        >
            {children || 'button'}
        </Tags>
    );
}
export default TagItem;

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
        <h1>All Tags</h1>
        <ul>
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
        </ul>
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