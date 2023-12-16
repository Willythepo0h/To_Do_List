import { StyleSheet, Text,  View,} from "react-native";

function GoalItem(props) {
    return (
        <Text style={styles.goalStyle}>{props.text}</Text>
    );
};

const styles = StyleSheet.create ({
    goalStyle: {
        color: 'black',
        fontSize: 18,
        backgroundColor: '#FDE5EC',
        borderRadius: 20,
        padding: 5,
        marginVertical: 2
      },
});

export default GoalItem;