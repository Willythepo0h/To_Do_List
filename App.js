import { TouchableOpacity, StyleSheet, View, ImageBackground, FlatList, Pressable, Text, Modal} from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import Header from "./components/Header";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function App() {
  const [courseGoals , setCourseGoals] = useState([]);
  const [goalNumber, setGoalNumber] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [clearModalVisible, setClearModalVisible] = useState(false);
  const [isWarningModalVisible, setWarningModalVisible] = useState(false);

  function addGoalHandler(enteredGoalText) {
    setGoalNumber(goalNumber + 1);
    const newGoal = `${goalNumber}. ${enteredGoalText}`;

    if (courseGoals.length >= 5) {
      setWarningModalVisible(true);
    }
    else {
    setCourseGoals((currentCourseGoals) =>[
      ...currentCourseGoals, 
      {text: newGoal, key: Math.random().toString()}
    ]);}
  };

  function resetGoalsHandler() {
    setCourseGoals([]);
    setGoalNumber(1);
  }

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const toggleClearModal = () => {
    setClearModalVisible(!clearModalVisible)
  }

  const closeModal = () => {
    setWarningModalVisible(false);
  };

    return(
        <ImageBackground
                  source={require('./assets/something.jpg')}
                  style={styles.backgroundImage}>

          <View style={styles.appContainer}>

            <Pressable >
              <TouchableOpacity onPress={toggleModal}>
                <AccountCircleIcon style={styles.Icon_Style} />
              </TouchableOpacity>
            </Pressable>
            <Modal visible={modalVisible}
            animationType="fade"
            transparent={true}>
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Text style={styles.Text_Style}>Welcome!User.</Text>
                  <Pressable onPress={toggleModal}>
                    <Text>Close</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>

            <GoalInput onAddGoal={addGoalHandler} onResetGoals={resetGoalsHandler}/>

              <View style={styles.goalListContainer}>
                  <Header title="List of Goals:" />
                      <FlatList style={styles.goalsContainer} 
                      data={courseGoals} 
                      renderItem={(itemData) => {
                        return(
                          <GoalItem
                          text={itemData.item.text}/>
                        );
                      }}
                        keyExtractor={(item, index) => item.key}
                        />
                        <Modal visible={isWarningModalVisible}
                        animationType="fade"
                        transparent={true}>
                        <View style={styles.modalContainer}>
                          <View style={styles.modalContent}>
                            <Text style={styles.Text_Style}>Warning! Don't overwhelm yourself with too much burden.</Text>
                            <Pressable onPress={closeModal}>
                              <Text>Close</Text>
                            </Pressable>
                          </View>
                        </View>
                      </Modal>
                </View>
                <View style={styles.Reset_Container}>
                      <Pressable style={styles.PressButton} >
                          <Text style={styles.PressButtonText}>Clear Goals</Text>
                      </Pressable>
                      <Modal visible={clearModalVisible}
                        animationType="fade"
                        transparent={true}>
                        <View style={styles.modalContainer}>
                          <View style={styles.modalContent}>
                            <Text style={styles.Text_Style}>Delete Goals?</Text>
                            <Pressable onPress={() => {resetGoalsHandler(), toggleClearModal()}}>
                              <Text>Yes</Text>
                            </Pressable>
                            <Pressable onPress={toggleClearModal}>
                              <Text>No</Text>
                            </Pressable>
                          </View>
                        </View>
                      </Modal>
                </View>
            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create ({
  appContainer: {
    flex: 1,
    paddingTop: 10,
    margin: 10,
  },
  Icon_Style: {
    fontSize: 40,
    color: 'black',
  },
  goalsContainer: {
    flex: 1,
  },
  backgroundImage: {
    flex:1,
    resizeMode: "cover",
  },
  goalListContainer: {
    flex: 7,
    borderWidth: 2,
    borderColor: 'black',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 1,
    marginBottom: 20,
  },
  Reset_Container: {
    bottom: 23
  },
  PressButton: {
    backgroundColor: 'pink',
    padding: 10,
    marginTop: 5,
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8
  },
  PressButtonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    width: '50%',
    alignItems: 'center',
  },
  Text_Style: {
    textAlign: 'center'
  }
});