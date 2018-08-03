import React from 'react';
import styled from 'styled-components';


// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file


const Topbar = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: none;
flex-direction: row;
position: fixed;
height: 44px;
background-color: #333;
        &.container{
          width: 100%;
          display: flex;
          justify-content: none;
          align-items: none;
          flex-direction: row;
          color: #fff;
          letter-spacing: 1px;
          padding: 0 10px;
          @media (min-width: 1280px) {
              width: 1280px;
            }
                &.left{
                  display: flex;
                  justify-content: none;
                  align-items: center;
                  flex-direction: row;
                  flex: 1;
                  font-size: 11px;
                  &span{
                    cursor: pointer;
                    margin-right: 25%;
                    font-weight: bold;
                  }
                }
                &.center{
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  flex-direction: row;
                  flex: 3;
                  font-size: 9px;
                  &span
                }
              }

`


const TopBar = () => {
  return (
    <div>
      <div className="container">
        <div className="container-left">
          <span>TOPICS</span><span>SEARCH</span>
        </div>
        <div className="container-center">
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </div>
        <div className="container-right">
          <span>LOG IN</span>
        </div>
      </div>
    </div>
  )
}

export default TopBar;
