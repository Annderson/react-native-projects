import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';


const vagas = [
  {name: 'vaga1', id: '1'},
  {name: 'vaga2', id: '2'},
  {name: 'vaga3', id: '3'},
  {name: 'vaga4', id: '4'},
  {name: 'vaga5', id: '5'},
  {name: 'vaga6', id: '6'},
  {name: 'vaga7', id: '7'},
  {name: 'vaga8', id: '8'},
  {name: 'vaga9', id: '9'},
  {name: 'vaga10', id: '10'},
]

export default class App extends React.Component {

 
  renderList(){
    vagas.map(vaga =>{
      return(<Text>{vaga.name}</Text>)
    })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>{this.renderList()}</Text>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
