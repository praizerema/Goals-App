import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, ScrollView } from 'react-native';

export default function App() {
  const[goalInput, setGoalInput]= useState('')
  const[goalList, setGoalList]= useState([])
  
const handleSubmit=()=>{
  // alert("You pressed")
  setGoalList([...goalList,   {key: Math.random().toString(), value:goalInput}])
}
const handleInput=(enteredGoal)=>{
  setGoalInput(enteredGoal)
}
console.log(goalList)
  return (
    <View style={{padding:50}}>
      <View style={styles.goalForm}> 
        {/* <View style={{}}> */}
  
      <TextInput  placeholder="Enter goal" style={ styles.goaltxtInput} onChangeText={handleInput}/>
     {/* </View> */}
      {/* <View style={{ }}> */}
      
      <Button 
      onPress={handleSubmit}
      title="Add" />
      {/* </View> */}
      </View>

    <FlatList data= {goalList} renderItem={goalItem =>(
       <View style={styles.goalitem}>
   <Text>{goalItem.item.value}</Text>
   </View>
      )}/>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  goalForm:{
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center'
    // width: '80%'
  },
  goalitem:{
width: "100%",
backgroundColor: "#c5c3c3",
marginTop: 20,
paddingVertical: 20,
paddingHorizontal: 10,
borderColor: "black",
borderWidth: 1
  },
  goaltxtInput:{  borderColor: 'gray', borderWidth: 1, padding:10, width:'80%'}
});
