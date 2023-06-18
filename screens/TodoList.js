import { StatusBar } from 'expo-status-bar';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from '../components/Task';
import { useState } from 'react';

export default function TodoList() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    console.log(task);
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    console.log("task nr ", index + 1, " deleted");
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Tasks for today:</Text>
        <View style={styles.items}>

          {/* tasks go here */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>

      {/* adding tasks here */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding": "height"}
        style={styles.writeTaskWrapper}>
          <TextInput style={styles.input} placeholder={'write a new task'} value={task} onChangeText={text => setTask(text)}></TextInput>
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addTaskButton}>+</Text>
            </View>
          </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC3F2',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingBottom: 40,
  },
  items: {
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

  },
  input: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 50,
    borderColor: '#CC57B2',
    borderWidth: 1
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 50,
    borderColor: '#CC57B2',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addTaskButton: {
    fontSize: 30,
    color: '#CC57B2'
  },
});
