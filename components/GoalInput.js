import React, {useState} from "react"
import {View, TextInput, StyleSheet, Button, Modal} from "react-native"


const GoalInput= (props)=>{

  const[goalInput, setGoalInput]= useState('')


    const handleInput=(enteredGoal)=>{
        setGoalInput(enteredGoal)
      }
      const addGoalHandler =()=>{
        props.onSubmit(goalInput)
        // setGoalInput("")
    }
return( 
<Modal visible= {props.visible} animationType="slide">
<View style={styles.goalForm}> 
{/* <View style={{}}> */}

<TextInput  placeholder="Enter goal" style={ styles.goaltxtInput} onChangeText={handleInput}/>
{/* </View> */}
<View style={{flexDirection: "row", justifyContent:"space-evenly", alignItems:"center", width:"80%"}}>
<View style={styles.button}><Button title="Cancel" onPress={props.onCancel} color="red"/></View>
<View style={styles.button}><Button 
onPress={addGoalHandler} //or onPress={()=>props.onSubmit(goalInput)}
title="Add" /></View>
</View>
</View></Modal>
)
}
const styles = StyleSheet.create({
    goalForm:{
        flex: 1,
        // flexDirection: "row",
        justifyContent:"center",
        alignItems: 'center'
      },
      
      goaltxtInput:{  borderColor: 'gray', borderWidth: 1, padding:10, width:'80%', marginBottom: 10},
      btnCancel:{marginBottom: 10},
      button:{
          width: "40%"
      }
})
export default GoalInput