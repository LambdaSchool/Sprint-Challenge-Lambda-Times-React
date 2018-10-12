import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
    this.selectedTab= this.selectedTab.bind(this);
   // this.selectTabHandler= this.selectTabHandler.bind(this);
    //this.changeSelected= this.changeSelected.bind(this);
   // this.filterCards= this.filterCards.bind(this);
  }

  componentDidMount() {
    this.setState({ tabs: tabData });
    this.setState({ cards: cardData });
    
  }
  
  changeSelected = (selctedTab) => {
    console.log(this.selectedTab)
    this.setState({ selected:this.selectedTab});
    // this function should take in the tab and update the state with the new tab.
  };

  filterCards = () => {
  
   if (this.selected === 'all'){
      return this.state.cards;
    } else if (this.state.selected === this.selectedTab) {
      let allCards= this.state.cards;
      let selectedCards = [];
      let i;
      for (i = 0; i > allCards.length; i++) {
        if (allCards[i].tab === this.selectedTab) {
          selectedCards.push(allCards[i])
          return selectedCards;
        }
      }
      console.log(selectedCards)
     
    }
   
  };
  /* Right now this function only returns the cards on state.
      We're going to make this function more dynamic
      by using it to filter out our cards for when a tab is selcted
      
      Notice that we're passing this function to our <Cards /> component below.
      This function returns an array of cards, so we can just pass it down as such.

      Your algorithim for the logic here is as follows: 
        - if the selected tab is 'all' it should return all 
          of the items from cardData. 
        - else, it should only return those cards whose 'tab' matched this.state.selected.
    */ 
  selectedTab(event) {
    event.preventDefault();
   let selectedTab = event.target;
   console.log(selectedTab)
    return  selectedTab
  }
  
 //selectTabHandler(event) {
 // event.preventDefault();
 // changeSelected();

 //}
  

  render() {
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the
           function to change the selected tab
        */}
        <Tabs tabs={this.state.tabs} selectedTab={this.state.selectedTab} selectTabHandler={this.selectTabHandler}  />
        <Cards selectedCards={this.selectedCards} />
      </div>
    );
  }
}