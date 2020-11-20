import React from "react"
import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
const GoalItem = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)
        }>
            <View style={
                styles.goalitem
            }>
                <Text>{
                    props.mygoal
                }</Text>
            </View>
        </TouchableOpacity>
    )

}
const styles = StyleSheet.create({
    goalitem: {
        width: "100%",
        backgroundColor: "#c5c3c3",
        marginTop: 20,
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderColor: "black",
        borderWidth: 1
    }
})
export default GoalItem;
