import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {ReactNode, useState} from 'react';
import {Button, TextInput} from 'react-native';

const ToDoList = () => {
  const [toDoTask, setToDoTask] = useState('');
  const [taskList, setTaskList] = useState<
    {id: number; task: string | ReactNode; completed: boolean}[]
  >([
    {id: 0, task: 'work', completed: false},
    {id: 1, task: 'study', completed: false},
    {id: 2, task: 'play', completed: false},
    {id: 3, task: 'sleep', completed: false},
  ]);
  const [editTaskId, setEditTaskId] = useState<number | null>(null);

  const onHandlePress = () => {
    if (toDoTask.trim() !== '') {
      if (editTaskId !== null) {
        setTaskList(prevTasks =>
          prevTasks.map(task =>
            task.id === editTaskId ? {...task, task: toDoTask} : task,
          ),
        );
        setEditTaskId(null);
      } else {
        setTaskList([
          {id: Date.now(), task: toDoTask, completed: false}, // Use Date.now() for unique id
          ...taskList,
        ]);
      }
      setToDoTask('');
    }
  };

  const onDeleteTask = (id: number) => {
    setTaskList(taskList.filter(task => task.id !== id));
  };

  const onEditTask = (id: number, task: string | ReactNode) => {
    setEditTaskId(id);
    setToDoTask(task as string);
  };

  const onToggleCompleteTask = (id: number) => {
    setTaskList(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? {...task, completed: !task.completed} : task,
      ),
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.toDoInput}
        autoCapitalize="words"
        autoCorrect={true}
        onChangeText={setToDoTask}
        value={toDoTask}
        placeholder={'Please type Your Task Name'}
      />
      <Button
        onPress={onHandlePress}
        title={editTaskId !== null ? 'Update Task' : 'Add Task'}
      />
      <Text style={styles.title}>Your Tasks </Text>
      <FlatList
        data={taskList}
        renderItem={({item}) => (
          <View style={styles.taskItem}>
            <Text
              style={[
                styles.taskText,
                item.completed && styles.completedTaskText,
              ]}>
              {item.task}
            </Text>
            <TouchableOpacity
              onPress={() => onToggleCompleteTask(item.id)}
              style={styles.iconButton}>
              <Text
                style={[
                  styles.buttonText,
                  item.completed && styles.completedButtonText,
                ]}>
                {item.completed ? 'Undo' : 'Complete'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onEditTask(item.id, item.task)}
              style={styles.iconButton}>
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onDeleteTask(item.id)}
              style={styles.iconButton}>
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    flex: 1,
  },
  toDoInput: {
    padding: 16,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: 'plum',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  taskText: {
    flex: 1,
    fontSize: 16,
  },
  completedTaskText: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  iconButton: {
    marginHorizontal: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#007bff',
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  completedButtonText: {
    backgroundColor: 'green',
  },
});
