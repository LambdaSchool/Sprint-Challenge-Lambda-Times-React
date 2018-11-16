import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;

  `

  const Heading = styled.h1`
    font-size: 60px;
    font-family: Didot, serif;
    font-weight: bold;
    flex: 8;
    text-align: center;
    color: #000;
  `

  const DateTemp = styled.span`
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;

    ${props => props.type === 'date' ? 
    `margin-left: 25px;
    flex: 1;`: null}

    ${props => props.type === 'temp' ? 
    `text-align: right;
     magin-right: 25px;
     flex: 1;`: null}
  `


// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderContainer>
      <DateTemp type='date'>SMARCH 32, 2018</DateTemp>
      <Heading>Lambda Times</Heading>
      <DateTemp type="temp">98°</DateTemp>
    </HeaderContainer>
  )
}

export default Header