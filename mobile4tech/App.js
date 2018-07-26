import React from 'react';
import { StyleSheet, Text, Image, SafeAreaView, View, FlatList } from 'react-native';

import CardJob from './componet/CardJob'


export default class App extends React.Component {

  renderList() {
    const vagas = [
      {nome: 'Vaga1', id: '1'},
      {nome: 'Vaga2', id: '2'},
      {nome: 'Vaga3', id: '3'},
      {nome: 'Vaga4', id: '4'},
      {nome: 'Vaga5', id: '5'},
      {nome: 'Vaga6', id: '6'},
      {nome: 'Vaga7', id: '7'},
      {nome: 'Vaga8', id: '8'},
      {nome: 'Vaga9', id: '9'},
    ]
    const separatorStyle = {
      borderWidth: 1,
      marginBottom: 20,
      borderColor: '#000',
      backgroundColor: '#ccc'
    }

    return(
      <FlatList data={vagas}
          style={{ flex:1, backgroundColor: 'white'}}
          renderItem={({item}) => this.renderItem(item)}
          ItemSeparatorComponent= {() => <View style={separatorStyle}/>}
          keyExtractor={(item) => `${item.id}`}/>
    );
  }

  renderItem(vaga) {
    return (
      <View>
        <CardJob
            nome={vaga.name}
            description={vaga.name}
        />
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.renderList()}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginVertical: 30,
  },
});
