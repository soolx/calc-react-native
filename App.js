/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      current: 0,
      cache: undefined,
      symbol: undefined,
    }
  }

  onNumberPress = (number) => {
    if(!this.state.current){
      this.setState({current: number});
    }else if(this.state.current < 99999999999999){
      this.setState(prevState => ({current: prevState.current * 10 + number}));
    }
    
  }

  clearcurrent = () => {
    this.setState({current: 0, cache: undefined, symbol: undefined});
  }

  addsymbol = (symbol) => {
    this.setState(prevState => ({cache: prevState.current, current: undefined, symbol}));
  }

  equal = () => {
    let result = 0;
    const { symbol, cache, current } = this.state;
    if(symbol === '+'){
      result = cache + current;
    }
    if(symbol === '-'){
      result = cache - current;
    }
    if(symbol === '*'){
      result = cache * current;
    }
    if(symbol === '/'){
      result = cache / current;
    }
    this.setState({cache: undefined, current: result, symbol: undefined});
  }

  backspace = () => {
    this.setState(prevState => ({current: (prevState.current / 10).slice}));
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Calc</Text>
        </View>
        <View style={styles.main}>
          <Text style={{textAlign: 'right', fontSize: 25, color: '#888'}}>{this.state.cache}</Text>
          <Text style={{textAlign: 'right', fontSize: 40, color: '#000'}}>{this.state.symbol?(this.state.symbol + ' '):null}{this.state.current}</Text>
        </View>
        <View style={styles.keyboard}>
          <View style={styles.nbr}>
            <TouchableHighlight underlayColor="#999" onPress={()=>this.clearcurrent()} style={styles.nbv}>
              <Text style={styles.nb}>C</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#999" onPress={()=>this.onNumberPress(3)} style={styles.nbv}>
              <Text style={styles.nb}>Backspace</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#999" onPress={()=>this.addsymbol('/')} style={styles.nbv}>
              <Text style={styles.nb}>/</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#999" onPress={()=>this.addsymbol('*')} style={styles.nbv}>
              <Text style={styles.nb}>*</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.nbr}>
            <TouchableHighlight underlayColor="#999" onPress={()=>this.onNumberPress(1)} style={styles.nbv}>
              <Text style={styles.nb}>1</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#999" onPress={()=>this.onNumberPress(2)} style={styles.nbv}>
              <Text style={styles.nb}>2</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#999" onPress={()=>this.onNumberPress(3)} style={styles.nbv}>
              <Text style={styles.nb}>3</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#999" onPress={()=>this.addsymbol('-')} style={styles.nbv}>
              <Text style={styles.nb}>-</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.nbr}>
            <TouchableHighlight underlayColor="#999" onPress={()=>this.onNumberPress(4)} style={styles.nbv}>
              <Text style={styles.nb}>4</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#999" onPress={()=>this.onNumberPress(5)} style={styles.nbv}>
              <Text style={styles.nb}>5</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#999" onPress={()=>this.onNumberPress(6)} style={styles.nbv}>
              <Text style={styles.nb}>6</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#999" onPress={()=>this.addsymbol('+')} style={styles.nbv}>
              <Text style={styles.nb}>+</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.nbr}>
            <View style={{flex:1}}>
              <TouchableHighlight underlayColor="#999" onPress={()=>this.onNumberPress(7)} style={styles.nbv}>
                <Text style={styles.nb}>7</Text>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#999" onPress={()=>this.onNumberPress(7)} style={styles.nbv}>
                <Text style={styles.nb}>%</Text>
              </TouchableHighlight>
            </View>
            <View style={{flex:1}}>
              <TouchableHighlight underlayColor="#999" onPress={()=>this.onNumberPress(8)} style={styles.nbv}>
                <Text style={styles.nb}>8</Text>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#999" onPress={()=>this.onNumberPress(0)} style={styles.nbv}>
                <Text style={styles.nb}>0</Text>
              </TouchableHighlight>
            </View>
            <View style={{flex:1}}>
              <TouchableHighlight underlayColor="#999" onPress={()=>this.onNumberPress(9)} style={styles.nbv}>
                <Text style={styles.nb}>9</Text>
              </TouchableHighlight>
              <TouchableHighlight underlayColor="#999" onPress={()=>this.onNumberPress(7)} style={styles.nbv}>
                <Text style={styles.nb}>.</Text>
              </TouchableHighlight>
            </View>
            <View style={{flex:1}}>
              <TouchableHighlight underlayColor="#999" onPress={()=>this.equal()} style={styles.nbe}>
                <Text style={styles.nb}>=</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
var Dimensions = require("Dimensions"); 
const height= Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    height:50,
    backgroundColor: '#7cafe7',
    alignItems: 'center',
    justifyContent: 'center'
  },
  main: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 20,
    justifyContent: 'flex-end',
  },
  keyboard: {
    height:height / 2,
    backgroundColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: 5
  },
  title: {
    color: '#fff',
    fontSize: 50
  },
  nbr: {
    flexDirection: 'row',
  },
  nbv: {
    flex: 1,
    margin: 0.3,
    height: height / 10 - 0.6,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  nb: {
    fontSize: 30,
    textAlign: 'center'
  },
  nbe: {
    // flex: 1,
    margin: 0.3,
    height: height / 5 - 0.6,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
