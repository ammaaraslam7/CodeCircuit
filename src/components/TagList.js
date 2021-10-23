import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const ListContainer = styled.div`
  display: inline;
  color: var(--color-textSecondary);
  
  
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
  color: var(--color-textSecondary);
  transition: all 0.2s ease-in-out;

  &:not(:first-child) {
    margin-left: 0.3rem;
  }
  
  &:hover {
    background-color: var(--color-textSecondary);
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
                <TagListItemLink to={`/tags/${tag}`}>{tag}</TagListItemLink>
              )}
              {noLink && <TagListItem to={`/tags/${tag}`}>{tag}</TagListItem>}
              {i < tags.length - 1 ? ' ' : ''}
            </Fragment>
          )
        })}
      </ListContainer>
    )
  }
}

export default TagList