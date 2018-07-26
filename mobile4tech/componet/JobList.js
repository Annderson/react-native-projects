import React from 'react';
import { StyleSheet, Text, Image, SafeAreaView, View, FlatList, TouchableHighlight } from 'react-native';
import { getJobs } from '../API'

//import CardJob from 'CardJob'


export default class JobList extends React.Component {

  constructor(props){
    super(props)
    this.state = { jobs: []}

  }

componentDidMount() {
    getJobs()
    .then(jobsR => this.setState({jobs: jobsR}))
    .catch(error => console.log(error))
    console.log(this.state.jobs)
  }


  renderList() {
    
    const separatorStyle = {
      borderWidth: 1,
      marginBottom: 20,
      borderColor: '#000',
      backgroundColor: '#ccc'
    }

    return(
      <FlatList data={this.state.jobs}
          style={{ flex:1, backgroundColor: 'white', height: 50}}
          renderItem={({item}) => this.renderItem(item)}
          ItemSeparatorComponent= {() => <View style={separatorStyle}/>}
          keyExtractor={(item) => `${item.id}`}/>
    );
  }
/*

*/
  renderItem(vaga) {

    return (
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Details', vaga.name)}>
            <View style={{ width: '100%', height: 300,  }}>
                <Image style={{ 
                    marginBottom: 10,
                    width: '100%',
                    height: 120,
                }}
                source={require('../assets/img/designer.png')}/>
                <View style={{ marginHorizontal: 20 }}>
                <Text style={{ fontWeight: 'bold',
                               fontSize: 18,
                               marginBottom: 10}}>
                    {vaga.name}
                </Text>

                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                    marginBottom: 10}}>
                    {vaga.description}
                </Text>
                </View>
            </View>
        </TouchableHighlight>
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
    backgroundColor: '#666',
    marginHorizontal: 20,
    marginVertical: 30,
  },
  app: {
    marginTop: 40,fontSize: 30,
  }
});
