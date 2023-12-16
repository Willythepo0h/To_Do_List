import { useState } from "react";
import { StyleSheet, TextInput,  View, Button, Pressable, Text} from "react-native";

function GoalInput(props) {
const [enteredGoalText, setEnteredText] = useState('');
const [goalNumber, setGoalNumber] = useState(1);

function textInputHandler(enteredText) {
    setEnteredText(enteredText);
}

function addGoalHandler() {
    if (enteredGoalText.trim() === "") {
      return;
    }
    //const newGoal = `${goalNumber}. ${enteredGoalText}`;
    props.onAddGoal(enteredGoalText);
    setEnteredText("");
    //setGoalNumber(goalNumber + 1);
  }
    return (
        <View style={styles.inputContainer}>
            <TextInput 
            onChangeText={textInputHandler} 
            style={styles.textInput} 
            placeholder="Your Course Goals"
            value={enteredGoalText} 
            />

            <View style={styles.buttonContainer}>
              <Button onPress={addGoalHandler} title="Add Goal" color={'pink'}/>
            </View>

        </View>
    );
}

const styles = StyleSheet.create ({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        marginBottom: 2,
      },
    textInput: {
        borderWidth: 2,
        borderColor: '#CCCCCC',
        width: '70%', 
        marginRight: 8,
        padding: 13,
        fontSize: 18,
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: 'white',
        color: 'black',
      },
    buttonContainer: {
      width: '30%',
    },
}); 

export default GoalInput;