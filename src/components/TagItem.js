import React, { useState } from 'react';

import styled from 'styled-components'
import {Link} from 'gatsby'

const Tags = styled(Link)`
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 500;
  text-transform: capitalize;
  color: var(--color-secondaryText);

`

const TagItem = ({children, onClick, fontSize, to, tagName, disabled, size, type, style, border, ...props}) => {
  const [
    hover,
    setHover
  ] = useState(false);
  const toggleHover = () => {
      setHover(!hover);
  };
  const defaultColor = {
    backgroundColor : 'var(--color-primaryColor)',
    padding : size,
    borderRadius : border,
    fontSize : fontSize,
  }
  const gatsby = {
    backgroundColor : 'var(--color-gatsbyColor)',
    borderRadius : border,
    fontSize : fontSize,
    padding : size,
  }
  
  const react = {
    backgroundColor : 'var(--color-reactColor)',
    borderRadius : border,
    fontSize : fontSize,
    padding : size,
  }
  const python = {
    backgroundColor : 'var(--color-pythonColor)',
    borderRadius : border,
    fontSize : fontSize,
    padding : size,
  }
  const js = {
    backgroundColor : 'var(--color-jsColor)',
    borderRadius : border,
    fontSize : fontSize,
    padding : size,
  }
  const html = {
    backgroundColor : 'var(--color-htmlColor)',
    borderRadius : border,
    fontSize : fontSize,
    padding : size,
    textTransform : 'uppercase'
  }
  const css= {
    backgroundColor : 'var(--color-cssColor)',
    padding : size,
    textTransform : 'uppercase',
    fontSize : fontSize,
    borderRadius : border,
  }
  const django = {
    backgroundColor : 'var(--color-djangoColor)',
    fontSize : fontSize,
    padding : size,
    borderRadius : border,
  }
  const flask = {
    backgroundColor : 'var(--color-flaskColor)',
    fontSize : fontSize,
    padding : size,
    borderRadius : border,
  }
  const nodejs = {
    backgroundColor : 'var(--color-nodejsColor)',
    fontSize : fontSize,
    borderRadius : border,
    padding : size,
  }
  const flutter = {
    backgroundColor : 'var(--color-flutterColor)',
    fontSize : fontSize,
    borderRadius : border,
    padding : size,
  }
  const graphql = {
    backgroundColor : 'var(--color-graphqlColor)',
    fontSize : fontSize,
    borderRadius : border,
    padding : size,
  }
  const netlify = {
    backgroundColor : 'var(--color-netlifyColor)',
    borderRadius : border,
    fontSize : fontSize,
    padding : size,
  }
  const git = {
    backgroundColor : 'var(--color-gitColor)',
    fontSize : fontSize,
    borderRadius : border,
    padding : size,
  }
  const sass = {
    backgroundColor : 'var(--color-sassColor)',
    borderRadius : border,
    fontSize : fontSize,
    padding : size,
  }
  const github = {
    backgroundColor : 'var(--color-githubColor)',
    fontSize : fontSize,
    borderRadius : border,
    padding : size,
  }
  const commonStyles = {
    backgroundColor : 'var(--color-secondaryColor)',
    borderRadius : border,
    padding : size,
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
      case 'react':
        if (hover) {
          tagStyle = react;
        }
        else {
          tagStyle = react;
        }
        break;
      case 'python':
        if (hover) {
          tagStyle = python;
        }
        else {
          tagStyle = python;
        }
        break;
      case 'js':
        if (hover) {
          tagStyle = js;
        }
        else {
          tagStyle = js;
          }
          break;
        case 'html':
          if (hover) {
            tagStyle = html;
            }
          else {
            tagStyle = html;
            }
          break;
        case 'css':
          if (hover) {
            tagStyle = css;
            }
          else {
            tagStyle = css;
            }
          break;
        case 'django':
          if (hover) {
            tagStyle = django;
          }
          else {
            tagStyle = django;
          }
          break;
        case 'flask':
          if (hover) {
            tagStyle = flask;
          }
          else {
            tagStyle = flask;
          }
          break;
        case 'nodejs':
          if (hover) {
            tagStyle = nodejs;
          }
          else {
            tagStyle = nodejs;
            }
          break;
        case 'flutter':
          if (hover) {
            tagStyle = flutter;
          }
          else {
            tagStyle = flutter;
          }
          break;
        case 'graphql':
          if (hover) {
            tagStyle = graphql;
          }
          else {
            tagStyle = graphql;
            }
          break;
        case 'netlify':
          if (hover) {
            tagStyle = netlify;
          }
          else {
            tagStyle = netlify;
          }
          break;
        case 'git':
          if (hover) {
            tagStyle = git;
          }
          else {
            tagStyle = git;
          }
          break;
        case 'github':
          if (hover) {
            tagStyle = github;
          }
          else {
            tagStyle = github;
          }
          break;
        case 'sass':
          if (hover) {
            tagStyle = sass;
        }
          else {
            tagStyle = sass;
          }
          break;
        default:
            tagStyle = defaultColor;
            break;
      }
      return (
        <Tags
             style={

                     disabled ? { ...commonStyles, ...tagStyle, ...disabledStyle, ...style } :
                     { ...commonStyles, ...tagStyle, ...style }
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
