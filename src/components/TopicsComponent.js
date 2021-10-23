//Button.js

import React, { useState } from 'react';
import styled from 'styled-components'

const Topic = styled.div`
    font-family: "Ubuntu", sans-serif;
    position: relative;
    font-weight: 540;
    line-height: 2;
    transition: all 0.2s ease-in-out;
    border-radius: 15px;
    letter-spacing: 1px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    align-self: center;
    cursor: pointer;
    text-transform: capitalize;
    width: 260px;
    height: 110px;
    font-size: 2rem;

`


const TopicComponent = ({ children, onClick, textColor, topicLogo, disabled, backgroundColor, type, style, ...props }) => {
    const [
        hover,
        setHover
    ] = useState(false);
    const toggleHover = () => {
        setHover(!hover);
    };

    const topic = {
        backgroundColor : backgroundColor,
        color           : textColor,
    }
    const topicHover = {
        backgroundColor : backgroundColor,
        color           : textColor,
        transform       : 'translateY(5px)',
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
    const blockStyles = {
        width  : '95%',
        margin : '0 auto'
    };
    let btnStyle;
    switch (type) {
        default:
            if (hover) {
                btnStyle = topic;
            }
            else {
                btnStyle = topicHover;
            }
            break;
    }
    return (
        <Topic
             style={

                     disabled ? { ...commonStyles, ...btnStyle, ...disabledStyle, ...style } :
                     { ...commonStyles, ...btnStyle, ...style }
             }
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            {...props}
            type="button"
            onClick={

                    !disabled ? onClick :
                    () => {}
            }
        >
            {children || 'button'}
        </Topic>
    );
};

export default TopicComponent;


// use case

//<Button>Normal Button</Button>
//<Button btnColor="blue" type="outline">
//  Outline Button
//</Button>
//<Button btnColor="red" disabled>
//  Disabled Button
//</Button>
//<Button btnColor="yellow" type="rounded" labelColor="black">
//  Rounded Button
//</Button>
//<Button type="block" btnColor="black">
//  Block Button
//</Button>