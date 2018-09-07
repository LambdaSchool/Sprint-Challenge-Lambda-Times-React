import React, { Component } from 'react';
import Tabs from './Tabs';
import Cards from './Cards';
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.mapData();
  }
  
  mapData() {
    this.setState({ tabs: [...tabData] });
    this.setState({ cards: [...cardData] });
  }

  changeSelected = event => {
    console.log("Changed selected tab to ", this.state.selected)
    // NEEDS TESTING this function should take in the tab and update the state with the new tab.
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value })
  };

  filterCards = () => {
    /* NEEDS TESTING Right now this function only returns the cards on state.
      We're going to make this function more dynamic
      by using it to filter out our cards for when a tab is selcted
      
      Notice that we're passing this function to our <Cards /> component below.
      This function returns an array of cards, so we can just pass it down as such.

      Your algorithim for the logic here is as follows: 
        - if the selected tab is 'all' it should return all of the items from cardData. 
        - else, it should only return those cards whose 'tab' matched this.state.selected.
    */
    let changedSelection = [...this.state.selected];
    changedSelection = changedSelection.filter(card => {
      if(this.state.selected === 'all') {
        return card;
      } else if(card.tab === this.state.selected) {
        return card;
      }
    })
    return this.state.cards;
  };

  render() {
    return (
      <div className="content-container">
        <Tabs 
          tabs={this.state.tabs} 
          selectedTab = {this.state.selected}
          selectedTabHandler = {this.changeSelected}
        />
        <Cards 
          cards={this.filterCards()} 
        />
      </div>
    );
  }
}
