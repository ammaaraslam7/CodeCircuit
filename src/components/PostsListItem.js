import React from 'react'
import { Link } from 'gatsby'
import Flag from './Flag'
import TagList from './TagList'
import useSiteMetadata from '../hooks/use-site-config'
import styled from 'styled-components'
import { Bull, ReadingTime } from './Commons'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {FaRegCalendarAlt} from 'react-icons/fa'
import {HiArrowRight} from 'react-icons/hi'
import useSiteImages from '../hooks/use-site-images'

const Post = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0.3rem;
  background-color: var(--color-secondaryContentBackground);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  width: 350px;
  height: 490px;
  transition: all 0.3s;
  box-shadow: 0 0 0 0, 0 6px 12px black;

  &:hover {
    transform: translateY(-10px);
  }

  @media screen and (max-width: 500px) {
    & {
      margin-top: var(--size-600);
    }
  }



`


const ReadPost = styled.div`
  font-size: 15px;
  text-decoration: none;
  letter-spacing: 0.05em;
  line-height: 2;
  color: black;
  position: absolute;
  bottom: 7px;
  right: 5px;
  padding: 10px;
  z-index: 1;
  transition: all 0.3s;
`
const RightArrowIcon = styled(HiArrowRight)`
  color: black;
  transform: translateY(3px);
  transition: all 0.3s;
`


const ReadPostText = styled(Link)`
  text-align: right;
  align-items: right;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 0.9rem;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 50px;
  transition: all 0.3s;

  &:hover {
    background-color: black;
    color: white;
    ${RightArrowIcon} {
      color: white;
      transform: translateY(3px) translateX(5px);
    }
  }
`

const PostImage = styled.div`
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 190px;
  &:hover {
      cursor: pointer;
    }

`

const PostHeader = styled.header`
  padding: 0.5rem;
  z-index: 1;
`

const Excerpt = styled.p`
  margin-top: auto;
  color: black;
  padding: 0.5rem;
  z-index: 1;
  
`

const PostTitleLink = styled(Link)`
  font-weight: 1000;
  color: black;
  z-index: 1;
  &:hover {
    color: blue;
    border-bottom: 1px dotted blue;
  }
`
const PostTags = styled.div`
  transform: translateY(-20px) translateX(8px);
  align-items: right;
  text-align: right;

`
const FooterLine = styled.div`
  font-size: 13px;
  z-index: 1;
  padding: 0.5rem;
  position: absolute;
  bottom: 60px;
`

const Date = styled.span`
  color: black;
  transform: translateX(3px);
`


const ClockIcon = styled(AiOutlineClockCircle)`
  color: black;
  transform: translateY(1px) translateX(-2.3px);
`
const CalendarIcon = styled(FaRegCalendarAlt)`
  color: black;
  transform: translateY(1px) translateX(1.5px);
`



const PostsListItem = props => {
  const { title, excerpt, slug, language, cover, tags, timeToRead } = props
  const { defaultLang } = useSiteMetadata()
  const { siteCover } = useSiteMetadata()
  const { fluid } = useSiteImages(siteCover)
  const heroImg = (cover && cover.publicURL) || fluid.src
 
  return (
    <Post>
      <PostImage style={{ backgroundImage: `url("${heroImg}")` }} />
      <PostHeader>
        <PostTags>
          <TagList tags={tags} />
        </PostTags>
        <h2>
          <PostTitleLink to={`/${slug}`}>
            {defaultLang !== language && <Flag language={language} />}
            {title}
          </PostTitleLink>
        </h2>
      </PostHeader>

      <section>
        <Excerpt dangerouslySetInnerHTML={{ __html: excerpt }} />
      </section>

      <footer>
        <FooterLine>
          <ClockIcon />
          <ReadingTime min={timeToRead} />
          <Bull />
          <CalendarIcon />
          <Date>27 Sept 2021</Date>
        </FooterLine>
        <ReadPost>
          <ReadPostText to={`/${slug}`} aria-label={`View ${title} article`}>Read More <RightArrowIcon /></ReadPostText>
        </ReadPost>
      </footer>
    </Post>
  )
}
export default PostsListItem