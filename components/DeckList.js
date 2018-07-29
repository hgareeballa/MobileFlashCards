import React, { Component } from 'react';
import { FlatList, View, Text, Alert,StyleSheet,Platform,TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { MaterialIcons,FontAwesome, Ionicons } from '@expo/vector-icons'
import {styles} from '../utils/mystyle'
import {getDecks, resetKey, initialDeckData} from '../utils/api'
import { addNewDeckFull, ClearDecks } from '../actions/deckActions'
import PropTypes from 'prop-types';
import LoadingPage from './LoadingPage'

class DeckList extends Component { 
  LoadDefaults = () =>{
    const { dispatch } = this.props  
    Alert.alert(
      'Warning!!',
      'App will Load Default Decks! Are you Sure?',
      [      
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => dispatch(addNewDeckFull(initialDeckData))  },
      ],
      { cancelable: false }
    )//Alert    
  }//
  clearall = () =>{
    const { dispatch } = this.props  
    Alert.alert(
      'Warning!!',
      'You Are Going to Delete All Decks? Are you Sure?',
      [      
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => dispatch(ClearDecks()) },
      ],
      { cancelable: false }
    )//Alert  
  }//     
componentDidMount () {  
    const { dispatch } = this.props  
    getDecks()
      .then(
        (value)=>{
          if (value === null) {
            console.log("RESULTS from INI---------------->>",value)
            dispatch(addNewDeckFull(initialDeckData))           
          } else {
            console.log("RESULTS from DB---------------->>",value)
            dispatch(addNewDeckFull(JSON.parse(value))) 
          }          
        }
      ).catch((error)=>console.log("Error---------------->>",error))
      .then(
        setTimeout(() => {
        //  this.setState({ loading: false })
        }, 1000)
      )
}//

  render() {
    const { content } = this.props    
    return (      
      <View style={styles.container}>        
          <FlatList
            data={content}
            renderItem={({ item }) =>
              <View style={styles.item}>
                <TouchableOpacity  
                onPress={()=>this.props.navigation.navigate('IndiDeckView',{title:item.title,questions:item.questions})}>
                <Text style={styles.text}> <Ionicons color="red" size={25} name='ios-list-box-outline'/>{item.title}</Text>                                                             
                <Text style={styles.text}> <FontAwesome color="red" size={25} name='question'/>:[{item.questions.length}] Cards</Text>                                                
                <FontAwesome style={styles.submitBtnText}name='folder-open-o' size={30}/>                
                </TouchableOpacity>
              </View>
            }
            keyExtractor={item => item.title}
          />      
          <View style={styles.item4}>
            <View style={styles.item_wrong}>
            <Ionicons name='ios-nuclear' size={15}onPress={()=>this.clearall()}>
            Delete All</Ionicons>
            </View>
            <View style={styles.item_load}>
            <Ionicons name='ios-cloud-download-outline' size={15}onPress={()=>this.LoadDefaults()}>
            Load Default</Ionicons>
            </View>
          </View>  
      </View>
    );
  }
}

DeckList.propTypes = {
  content: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
};

function mapDispatchToProps (dispatch) {
  return {    
    dispatch
  }
}//

const mapStateToProps = state => ({
  content: selectDeckTitleAndQuestions(state)
});

export default connect(mapStateToProps,mapDispatchToProps)(DeckList);

export const selectDeckTitleAndQuestions = ({ decks }) =>
  Object.keys(decks).map(key => ({
    title: decks[key].title,
    questions: decks[key].questions,
  }));
