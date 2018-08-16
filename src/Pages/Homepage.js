import React, { Component } from "react";
import Container from "../Components/Container";
import Row from "../Components/Row";
import Col from "../Components/Col";
import Card from '../Components/Card';
import cards from '../cardList.json';
import Jumbotron from "../Components/Jumbotron/Jumbotron";


class Homepage extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      cards: cards,
      topScore: 0,
      currentScore: 0,
    };
    this.checkIfClicked = this.checkIfClicked.bind(this);
  }
  
  // Function for when a card is clicked
  checkIfClicked(id) {
    let clickedCard = this.state.cards.filter(card => card.id === id)[0];
    let cardsCopy = this.state.cards.slice().sort(function(a, b){return 0.5 - Math.random()});

    if (!clickedCard.clicked) {
      clickedCard.clicked = true;
      cardsCopy[cardsCopy.findIndex((card) => card.id === id)] = clickedCard;
      
      this.setState({
        cards: cardsCopy,
        currentScore: this.state.currentScore + 1,
        topScore: (this.state.currentScore + 1 > this.state.topScore ? this.state.currentScore + 1 : this.state.topScore),
      });
    }
    
    else {
      
      let resetCardsCopy = cardsCopy.map((card) => {
        return {
          id: card.id,
          image: card.image,
          clicked: false,
        }
      });
      this.setState({
        cards: resetCardsCopy,
        currentScore: 0,
      });
    } 
  }
  
  render() {
    return (
      <div className="container">
        <Jumbotron currentScore={this.state.currentScore} topScore={this.state.topScore}/>
        <Container>
          {this.state.cards.map(card => (
            <Card
              checkIfClicked={this.checkIfClicked}
              id={card.id}
              key={card.id}
              image={card.image}
              />
          ))}
          </Container>
      </div>
    );
  }
}


export default Homepage;