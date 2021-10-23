//Button.js

import React, { useState } from 'react';
import styled from 'styled-components'

const ButtonComponent = styled.div`
    font-family: "Ubuntu", sans-serif;
    position: relative;
    font-weight: 540;
    line-height: 2;
    transition: all 0.2s ease-in-out;
    border-radius: 8px;
    letter-spacing: 1px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    align-self: center;
    border: none;
    cursor: pointer;
    outline: 0;
`



const Button = ({ children, onClick, textColor, disabled, type, style, ...props }) => {
    const [
        hover,
        setHover
    ] = useState(false);
    const toggleHover = () => {
        setHover(!hover);
    };
    const miniPrimary = {
        letterSpacing: '0.5px',
        backgroundColor : 'transparent',
        color           : 'var(--color-primaryColor)',
        border          : `2px solid var(--color-primaryColor)`,
        width           : '90px',
        height          : '22px',
        fontSize        : '0.9rem',
    }
    const miniPrimaryHover = {
        backgroundColor : 'var(--color-primaryColor)',
        letterSpacing: '0.5px',
        border          : `2px solid var(--color-primaryColor)`,
        color           : textColor,
        width           : '90px',
        height          : '22px',
        fontSize        : '0.9rem',
        transform       : 'translateY(-2px)'
    }
    const miniSecondary = {
        backgroundColor : 'transparent',
        color           : 'var(--color-secondaryColor)',
        letterSpacing: '0.5px',
        border          : `2px solid var(--color-secondaryColor)`,
        width           : '90px',
        height          : '22px',
        fontSize        : '0.9rem',
    }
    const miniSecondaryHover = {
        backgroundColor : 'var(--color-secondaryColor)',
        border          : `2px solid var(--color-secondaryColor)`,
        letterSpacing: '0.5px',
        color           : textColor,
        width           : '90px',
        height          : '22px',
        fontSize        : '0.9rem',
        transform       : 'translateY(-2px)'
    }
    const smallPrimary = {
        backgroundColor : 'transparent',
        color           : 'var(--color-primaryColor)',
        border          : `2px solid var(--color-primaryColor)`,
        width           : '100px',
        height          : '45px',
        fontSize        : '1.35rem',
    }
    const smallPrimaryHover = {
        backgroundColor : 'var(--color-primaryColor)',
        border          : `2px solid var(--color-primaryColor)`,
        color           : textColor,
        width           : '100px',
        height          : '45px',
        fontSize        : '1.35rem',
        transform       : 'translateY(-5px)'
    }
    const bigPrimary = {
        backgroundColor : 'transparent',
        color           : 'var(--color-primaryColor)',
        border          : `2px solid var(--color-primaryColor)`,
        width           : '150px',
        height          : '50px',
        fontSize        : '1.5rem',
    }
    const bigPrimaryHover = {
        backgroundColor : 'var(--color-primaryColor)',
        border          : `2px solid var(--color-primaryColor)`,
        color           : textColor,
        width           : '150px',
        height          : '50px',
        fontSize        : '1.5rem',
        transform       : 'translateY(-5px)'
    }
    const bigSecondary = {
        backgroundColor : 'transparent',
        color           : 'var(--color-secondaryColor)',
        border          : `2px solid var(--color-secondaryColor)`,
        width           : '150px',
        height          : '50px',
        fontSize        : '1.5rem',
    }
    const bigSecondaryHover = {
        backgroundColor : 'var(--color-secondaryColor)',
        border          : `2px solid var(--color-secondaryColor)`,
        color           : textColor,
        width           : '150px',
        height          : '50px',
        fontSize        : '1.5rem',
        transform       : 'translateY(-5px)'
    }
    const smallSecondary = {
        backgroundColor : 'transparent',
        color           : 'var(--color-secondaryColor)',
        border          : `2px solid var(--color-secondaryColor)`,
        width           : '100px',
        height          : '45px',
        fontSize        : '1.35rem',
    }
    const smallSecondaryHover = {
        backgroundColor : 'var(--color-secondaryColor)',
        border          : `2px solid var(--color-secondaryColor)`,
        color           : textColor,
        width           : '100px',
        height          : '45px',
        fontSize        : '1.35rem',
        transform       : 'translateY(-5px)'
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
        case 'mini-primary':
            if (hover) {
                btnStyle = miniPrimaryHover;
            }
            else {
                btnStyle = miniPrimary;
            }
            break;
        case 'mini-secondary':
            if (hover) {
                btnStyle = miniSecondaryHover;
            }
            else {
                btnStyle = miniSecondary;
            }
            break;
        case 'small-primary':
            if (hover) {
                btnStyle = smallPrimaryHover;
            }
            else {
                btnStyle = smallPrimary;
            }
            break;
        case 'big-primary':
            if (hover) {
                btnStyle = bigPrimaryHover;
            }
            else {
                btnStyle = bigPrimary;
            }
            break;
        case 'small-secondary':
            if (hover) {
                btnStyle = smallSecondaryHover;
            }
            else {
                btnStyle = smallSecondary;
            }
            break;
        case 'big-secondary':
            if (hover) {
                btnStyle = bigSecondaryHover;
            }
            else {
                btnStyle = bigSecondary;
            }
            break;
        default:
            btnStyle = smallPrimary;
            break;
    }
    return (
        <ButtonComponent
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
        </ButtonComponent>
    );
};

export default Button;


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