import React from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../ThemeContext'
import {BsMoonStarsFill} from 'react-icons/bs'
import {BsFillSunFill} from 'react-icons/bs'
import '@fontsource/rubik/800.css'

const DarkModeButton = styled.button`
  background: transparent;
  border: none;
  padding: 8px 10px;
  color: #ffffff;
  font-weight: 700;
  margin: 10px 0;
  font-family: 'Rubik';
`

const MoonIcon = styled(BsMoonStarsFill)`
  font-size: 26px;
  color: var(--color-primaryColor);
  transition: all 0.2s;
  &:hover{
    color: var(--color-secondaryColor);
    transform: rotate(360deg);
    cursor: pointer;
  }
`
const SunIcon = styled(BsFillSunFill)`
  font-size: 26px;
  color: var(--color-primaryColor);
  transition: all 0.2s;
  &:hover{
    color: var(--color-secondaryColor);
    cursor: pointer;
    transform: rotate(360deg);
  }
`
const DarkToggle = ({ isExpanded = false }) => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext)

  if (!colorMode) {
    return null
  }

  const toggleMode = () =>
    colorMode === 'light' ? setColorMode('dark') : setColorMode('light')
  const oppositeColor = colorMode === 'light' ? 'dark' : 'light'

  return (
    <DarkModeButton
      onClick={toggleMode}
      aria-label={`Activate ${oppositeColor} mode`}
    >
      {colorMode === 'dark' ? (
        <SunIcon />

      ) : (
        <MoonIcon />
      )}
      {isExpanded && `Toggle ${oppositeColor} mode`}
    </DarkModeButton>
  )
}

export default DarkToggle
