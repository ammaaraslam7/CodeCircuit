import React, { useState } from 'react';

import styled from 'styled-components'
import {Link} from 'gatsby'

const Topic = styled(Link)`
  position: relative;
  color: var(--color-secondaryText);
  padding: 25px;
  border-radius: 15px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  width: 300;
  height: 200;

`

const TopicComponent = ({children, onClick, to, tagName, disabled, type, style, ...props}) => {
  const [
    hover,
    setHover
  ] = useState(false);
  const toggleHover = () => {
    setHover(!hover);
};
  const defaultColor = {
    backgroundColor : 'var(--color-primaryColor)',
  }
  const gatsby = {
    backgroundColor : 'var(--color-gatsbyColor)',
    border : '2px solid var(--color-gatsbyColor)',
  }
  const gatsbyHover = {
    border : '2px solid var(--color-gatsbyColor)',
    backgroundColor: 'transparent',
  }
  const react = {
    backgroundColor : 'var(--color-reactColor)',
    border : '2px solid var(--color-reactColor)',
  }
  const reactHover = {
    border : '2px solid var(--color-reactColor)',
    backgroundColor: 'transparent',
  }
  const python = {
    backgroundColor : 'var(--color-pythonColor)',
    border : '2px solid var(--color-pythonColor)',
  }
  const pythonHover = {
    border : '2px solid var(--color-pythonColor)',
    backgroundColor: 'transparent',
  }
  const js = {
    backgroundColor : 'var(--color-jsColor)',
    border : '2px solid var(--color-jsColor)',
  }
  const jsHover = {
    border : '2px solid var(--color-jsColor)',
    backgroundColor: 'transparent',
  }
  const html = {
    backgroundColor : 'var(--color-htmlColor)',
    textTransform : 'uppercase',
    border : '2px solid var(--color-htmlColor)',

  }
  const htmlHover = {
    border : '2px solid var(--color-htmlColor)',
    backgroundColor: 'transparent',
  }
  const css= {
    backgroundColor : 'var(--color-cssColor)',
    textTransform : 'uppercase',
    border : '2px solid var(--color-cssColor)',

  }
  const cssHover = {
    border : '2px solid var(--color-cssColor)',
    backgroundColor: 'transparent',
  }
  const django = {
    backgroundColor : 'var(--color-djangoColor)',
    border : '2px solid var(--color-djangoColor)',

  }
  const djangoHover = {
    border : '2px solid var(--color-djangoColor)',
    backgroundColor: 'transparent',
  }
  const flask = {
    backgroundColor : 'var(--color-flaskColor)',
    border : '2px solid var(--color-flaskColor)',

  }
  const flaskHover = {
    border : '2px solid var(--color-flaskColor)',
    backgroundColor: 'transparent',
  }
  const nodejs = {
    backgroundColor : 'var(--color-nodejsColor)',
    border : '2px solid var(--color-nodejsColor)',
  }
  const nodejsHover = {
    border : '2px solid var(--color-nodejsColor)',
    backgroundColor: 'transparent',
  }
  const flutter = {
    backgroundColor : 'var(--color-flutterColor)',
    border : '2px solid var(--color-flutterColor)',
  }
  const flutterHover = {
    border : '2px solid var(--color-flutterColor)',
    backgroundColor: 'transparent',
  }
  const graphql = {
    backgroundColor : 'var(--color-graphqlColor)',
    border : '2px solid var(--color-graphqlColor)',
  }
  const graphqlHover = {
    border : '2px solid var(--color-graphqlColor)',
    backgroundColor: 'transparent',
  }
  const netlify = {
    backgroundColor : 'var(--color-netlifyColor)',
    border : '2px solid var(--color-netlifyColor)',

  }
  const netlifyHover = {
    border : '2px solid var(--color-netlifyColor)',
    backgroundColor: 'transparent',
  }
  const git = {
    backgroundColor : 'var(--color-gitColor)',
    border : '2px solid var(--color-gitColor)',

  }
  const gitHover = {
    border : '2px solid var(--color-gitColor)',
    backgroundColor: 'transparent',
  }
  const sass = {
    backgroundColor : 'var(--color-sassColor)',
    border : '2px solid var(--color-sassColor)',

  }
  const sassHover = {
    border : '2px solid var(--color-sassColor)',
    backgroundColor: 'transparent',
  }
  const github = {
    backgroundColor : 'var(--color-githubColor)',
    border : '2px solid var(--color-githubColor)',

  }
  const githubHover = {
    border : '2px solid var(--color-githubColor)',
    backgroundColor: 'transparent',
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
          tagStyle = gatsbyHover;
        }
        break;
      case 'react':
        if (hover) {
          tagStyle = react;
        }
        else {
          tagStyle = reactHover;
        }
        break;
      case 'python':
        if (hover) {
          tagStyle = python;
        }
        else {
          tagStyle = pythonHover;
        }
        break;
      case 'js':
        if (hover) {
          tagStyle = js;
        }
        else {
          tagStyle = jsHover;
          }
          break;
        case 'html':
          if (hover) {
            tagStyle = html;
            }
          else {
            tagStyle = htmlHover;
            }
          break;
        case 'css':
          if (hover) {
            tagStyle = css;
            }
          else {
            tagStyle = cssHover;
            }
          break;
        case 'django':
          if (hover) {
            tagStyle = django;
          }
          else {
            tagStyle = djangoHover;
          }
          break;
        case 'flask':
          if (hover) {
            tagStyle = flask;
          }
          else {
            tagStyle = flaskHover;
          }
          break;
        case 'nodejs':
          if (hover) {
            tagStyle = nodejs;
          }
          else {
            tagStyle = nodejsHover;
            }
          break;
        case 'flutter':
          if (hover) {
            tagStyle = flutter;
          }
          else {
            tagStyle = flutterHover;
          }
          break;
        case 'graphql':
          if (hover) {
            tagStyle = graphql;
          }
          else {
            tagStyle = graphqlHover;
            }
          break;
        case 'netlify':
          if (hover) {
            tagStyle = netlify;
          }
          else {
            tagStyle = netlifyHover;
          }
          break;
        case 'git':
          if (hover) {
            tagStyle = git;
          }
          else {
            tagStyle = gitHover;
          }
          break;
        case 'github':
          if (hover) {
            tagStyle = github;
          }
          else {
            tagStyle = githubHover;
          }
          break;
        case 'sass':
          if (hover) {
            tagStyle = sass;
        }
          else {
            tagStyle = sassHover;
          }
          break;
        default:
            tagStyle = defaultColor;
            break;
      }
      return (
        <Topic
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
        </Topic>
    );
}
export default TopicComponent;
