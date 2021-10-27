import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import TagItem from './TagItem'

const ListContainer = styled.div`
  display: inline;
  color: var(--color-secondaryText);
  font-size: 0.5rem;
  
`

const TagListItemLink = styled(Link)`
  color: white;
  font-size: 15px;
  background-color: green;
  padding: 5px;
  border-radius: 2px;
  font-weight: 1000;
  transition: all 0.2s ease-in-out;
  align-items: center;
  text-align: center;

  
  &:hover {
    background-color: white;
    color: green;
  }

  &:not(:first-child) {
    margin-left: 0.3rem;
  }


`

const TagListItem = styled.span`
  align-items: center;
  text-align: center;
  font-size: 15px;
  background-color: green;
  color: var(--color-secondaryText);
  transition: all 0.2s ease-in-out;

  &:not(:first-child) {
    margin-left: 0.3rem;
  }
  
  &:hover {
    background-color: var(--color-secondaryText);
    color: green;
  }
`

class TagList extends React.Component {
  render() {
    const { tags, noLink } = this.props

    return (
      <ListContainer>
        {tags.map((tag, i) => {
          return (
            <Fragment key={`tag-list-${i}`}>
              {!noLink && (
                <TagItem type={tag} size='5px' border='3px' fontSize='15px' to={`/tags/${tag}`}>{tag}</TagItem>
              )}
              {noLink && <TagItem type={tag} size='5px' fontSize='15px' border='3px' to={`/tags/${tag}`}>{tag}</TagItem>}
              {i < tags.length - 1 ? ' ' : ''}
            </Fragment>
          )
        })}
      </ListContainer>
    )
  }
}

export default TagList