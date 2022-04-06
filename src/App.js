import React from 'react';
import './App.css';

import CardComponent from './components/CardComponent'
import Hawker from './components/Hawker'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      foods: [
          {
              "name": "Nasi Lemak",
              "image_name": "nasilemak.jpg",
              "location": "ABC Restaurant",
              "description": "Our main set contains fried chicken, egg and samba",
              "quantity": 7
          },
          {
              "name": "Otak",
              "image_name": "otak.jpeg",
              "location": "Good Good Eat",
              "description": "Still very hot",
              "quantity": 3
          },
          {
              "name": "Laksa",
              "image_name": "laksa.jpeg",
              "location": "Kopitiam",
              "description": "With prawn, please put remark to seperate the soup",
              "quantity": 7
          },
          {
              "name": "Chicken Rice",
              "image_name": "chickenrice2.jpeg",
              "location": "Kopitiam",
              "description": "Still got chicken thigh",
              "quantity": 3
          },
          {
              "name": "Red Bean Bun",
              "image_name": "redbeanbun.jpeg",
              "location": "ABC Restaurant",
              "description": "Still hot",
              "quantity": 2
          },
          {
              "name": "Curry Puff",
              "image_name": "currypuff.jpeg",
              "location": "Ali Delicious",
              "description": "Still hot, going to close in 30 minutes",
              "quantity": 3
          },
          {
              "name": "Chwee Kueh",
              "image_name": "chweekueh.jpeg",
              "location": "ABC Restaurant",
              "description": "One packet got 3",
              "quantity": 1
          },
          {
              "name": "Carrot Cake",
              "image_name": "carrotcake.jpeg",
              "location": "Traditionally",
              "description": "We got 3 packets, each with 3 units",
              "quantity": 3
          },
          {
              "name": "Popiah",
              "image_name": "popiah.jpeg",
              "location": "Smiling Restaurant",
              "description": "Take and go",
              "quantity": 5
          },
          {
              "name": "Pancake",
              "image_name": "pancake.jpeg",
              "location": "Relaxia",
              "description": "3 packets with 3 units each",
              "quantity": 2
          },
          {
              "name": "Meat Ball Noodles",
              "image_name": "meatballnoodles.jpeg",
              "location": "PureD Restaurant",
              "description": "Leave remark if need dine in or take away",
              "quantity": 4
          },
          {
              "name": "Economic Rice",
              "image_name": "economicrice.jpeg",
              "location": "Favourato",
              "description": "We still have lady fingers, curry vege, curry chicken, steamed egg, tofu, otak, steamed fish",
              "quantity": 5
          },
          {
              "name": "Ban Mian",
              "image_name": "banmian.jpeg",
              "location": "ABC Restaurant",
              "description": "Only allow dabao",
              "quantity": 7
          },
          {
              "name": "Chicken Rice",
              "image_name": "chickenrice.jpeg",
              "location": "Hai Nan Champion",
              "description": "Left only chicken wings and chicken breast, white chicken",
              "quantity": 6
          },
          {
              "name": "Mee Soto",
              "image_name": "meesoto.jpeg",
              "location": "MalayaNice",
              "description": "Please leave a remark to seperate soup and mee if dabao if required",
              "quantity": 5
          },
          {
              "name": "Rojak",
              "image_name": "rojak.jpeg",
              "location": "ABC Restaurant",
              "description": "Allow dabao only",
              "quantity": 4
          },
          {
              "name": "Kuih",
              "image_name": "kuih.jpeg",
              "location": "Kopitiam",
              "description": "One packet inside got 3",
              "quantity": 1
          },
      ],
      page: "home"
    }    
  }

  setPage = (value) => {
    this.setState({page: value})
  }

  render(){
    return (
      <div className="App">
      {
        this.state.page === "home" ? <CardComponent foods={this.state.foods} setPage={this.setPage}/> : <Hawker setPage={this.setPage}/>
      }      
      </div>
    );
  }
}

export default App;
