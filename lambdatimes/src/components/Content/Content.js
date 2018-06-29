import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      // Set this to an initial value
      selected: '',
      tabs: [],
      cards: []
    }
  }

  componentDidMount(){
    // Once the component has mounted, get the data and reflect that data on the state
    this.setState({tabs: tabData});
    this.setState({cards: cardData});
  }

  changeSelected = (tab) => {
    return () => {
      // Finish this function, reflecting the new selected tab in the state
      this.setState({selected: tab});
    }
  }

  /* Complete this function, if the selected tab is 'all' it should return all
     of the items from cardData. If it is something else, it shoudl only return
     those cards whose 'tab' mached that which is selected. */
  filterCards = () => {
    if (this.state.selected !== "all" && this.state.selected !== ''){
      let selectCards = this.state.cards.slice();
      selectCards = selectCards.filter(i => i.tab === this.state.selected);
      return selectCards;
    }
    return this.state.cards;
  }

  render(){
    return (
      <div className="content-container">
        {/*
          Add 2 props to the Tabs component,
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs
          selectedTab={this.state.selected}
          tabs={this.state.tabs}
          selectedHandler={this.changeSelected}
        />
        <Cards cards={this.filterCards()}/>
      </div>
    )
  }
}
