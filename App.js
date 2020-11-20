import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, ScrollView } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
export default function App() {
  const[goalList, setGoalList]= useState([])
  const [isAddMode, setIsAddMode] = useState(false)
const handleSubmit=(enteredGoal)=>{
  setGoalList(currentGoals=>[...currentGoals,   {key: Math.random().toString(), value:enteredGoal}]);
  setIsAddMode(false);
}
 const removeGoalHandler =(goalId)=>{
setGoalList(currentGoals=>{
  return currentGoals.filter((goal)=> goal.key !== goalId)
})
}
const cancelGoalAdditionHandler=()=>{
  setIsAddMode(false)
}
  return (
    <View style={{padding:50}}>
     <Button title="Add new goal" onPress={()=> setIsAddMode(true)}/>
<GoalInput visible={isAddMode} onSubmit={handleSubmit} onCancel={cancelGoalAdditionHandler}/>
    <FlatList data= {goalList} renderItem={goalItem =>(
     <GoalItem id={goalItem.item.key} mygoal={goalItem.item.value} onDelete={removeGoalHandler}/>
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

});
