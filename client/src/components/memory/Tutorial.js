import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons'; // 6.2.2

import Score from './Score';
import Card from './Card';
import Memory from '../../pages/Memory/Memory'
import helpers from './helpers';

export default class Tutorial extends React.Component {

  constructor(props) {
    super(props);
    this.renderCards = this.renderCards.bind(this);
    this.step=0;

    let sources = {
      'fontawesome': FontAwesome,
      'entypo': Entypo,
      'ionicons': Ionicons,
      'null': Text
    };

    let cards = [
      {
        src: 'fontawesome',
        name: 'heart',
        color: 'red'
      },
      {
        src: 'entypo',
        name: 'feather',
        color: '#7d4b12'
      },
      {
        src: 'entypo',
        name: 'flashlight',
        color: '#f7911f'
      },
      {
        src: 'entypo',
        name: 'flower',
        color: '#37b24d'
      },
      
    ];

    let nameCards = [
        {
          src: 'null',
          name: 'feather',
          color: '#7d4b12'
        },
        {
          src: 'null',
          name: "flashlight",
          color: '#f7911f'
        },
        {
          src: 'null',
          name: 'heart',
          color: 'red'
        },
        {
          src: 'null',
          name: 'flower',
          color: '#37b24d'
        },
        
      ];

    let clone = JSON.parse(JSON.stringify(nameCards));

    this.cards = cards.concat(clone);
    this.cards.map((obj) => {
      let id = Math.random().toString(36).substring(7);
      obj.id = id;
      obj.src = sources[obj.src];
      obj.is_open = false;
    });

    this.state = {
      current_selection: [],
      selected_pairs: [],
      score: 0,
      cards: this.cards
    }
  
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          { 
            this.renderRows.call(this) 
          }
        </View>
        <View style={styles.body}>
          <Score score={this.state.score} />
        </View>
        <Button
          onPress={() => this.next()}
          title="Avanti"
          color="#008CFA"
          style={
            {
              position: 'absolute',
            }
          } 
        />
      </View>
    );
  }

  next() {
     //contatore per tenere traccia 2 coppie e poi mostra tutte le coppie girate
     //switch per cambiare lo stato
     if(this.step===5){
        this.props.navigation.navigate(Memory)
     }
        //da fare il render del game component
     switch(this.step){
      case 0:
        this.clickCard(0);
        this.props.setMessage("Prima carta girata");
        break;
      case 1:
        this.clickCard(6);
        this.props.setMessage("Prima coppia trovata!");
        this.setState({
          score: this.state.score+=1
        });
        break;
      case 2:
        this.clickCard(1);
        this.props.setMessage("Ora devi individuare la seconda coppia!");
        break;
      case 3:
        this.clickCard(4);
        this.props.setMessage("Seconda coppia trovata!");
        this.setState({
          score: this.state.score+=1
        });
        break;
      case 4:
        this.clickCard(2);
        this.clickCard(3);
        this.clickCard(5);
        this.clickCard(7);
        this.setState({
          score: this.state.score+=2
        });
        this.props.setMessage("Adesso hai trovato tutte le coppie e hai vinto. Clicca su avanti per iniziare a giocare!");
        break;
      default:
        break;
     }
     this.step+=1;

  }

  renderRows() {
   
    let contents = this.getRowContents(this.state.cards);
    return contents.map((cards, index) => {
      return (
        <View key={index} style={styles.row}>
          { this.renderCards(cards) }
        </View>
      );
    });
   
  }


  renderCards(cards) {
    return cards.map((card, index) => {
      return (
        <Card 
          key={index} 
          src={card.src} 
          name={card.name} 
          color={card.color} 
          is_open={card.is_open}
          clickCard={() => {}} 
        />
      );
    });
  }


  clickCard(id) {
    let selected_pairs = this.state.selected_pairs;
    let current_selection = this.state.current_selection;

    let index = id;

    let cards = this.state.cards;
    if(cards[index].is_open == false && selected_pairs.indexOf(cards[index].name) === -1){
      
      cards[index].is_open = true;
      
      current_selection.push({ 
        index: index,
        name: cards[index].name
      });

      this.setState({
        cards: cards,
        current_selection: current_selection
      });

    }
  
  }


  getRowContents(cards) {
    let contents_r = [];
    let contents = [];
    let count = 0;
    cards.forEach((item) => {
      count += 1;
      contents.push(item);
      if(count == 4){
        contents_r.push(contents)
        count = 0;
        contents = [];
      }
    });

    return contents_r;
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff'
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  body: {
    flex: 18,
    justifyContent: 'space-between',
    padding: 0,
    marginTop: 10
  }
});
