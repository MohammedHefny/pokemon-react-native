import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {Component, ReactNode} from 'react';
import {Button, TextInput} from 'react-native';

interface Task {
  id: number;
  task: string | ReactNode;
  completed: boolean;
}

interface State {
  toDoTask: string;
  taskList: Task[];
  editTaskId: number | null;
}

class ToDoListClass extends Component<{}, State> {
  renderedTasks = ({item}: {item: Task}) => (
    <View style={styles.taskItem}>
      <Text
        style={[styles.taskText, item.completed && styles.completedTaskText]}>
        {item.task}
      </Text>
      <TouchableOpacity
        onPress={() => this.onToggleCompleteTask(item.id)}
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
        onPress={() => this.onEditTask(item.id, item.task)}
        style={styles.iconButton}>
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => this.onDeleteTask(item.id)}
        style={styles.iconButton}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
  state: State = {
    toDoTask: '',
    taskList: [
      {id: 0, task: 'work', completed: false},
      {id: 1, task: 'study', completed: false},
      {id: 2, task: 'play', completed: false},
      {id: 3, task: 'sleep', completed: false},
    ],
    editTaskId: null,
  };

  onHandlePress = () => {
    const {toDoTask, editTaskId, taskList} = this.state;
    if (toDoTask.trim() !== '') {
      if (editTaskId !== null) {
        this.setState({
          taskList: taskList.map(task =>
            task.id === editTaskId ? {...task, task: toDoTask} : task,
          ),
          editTaskId: null,
          toDoTask: '',
        });
      } else {
        this.setState({
          taskList: [
            {id: Date.now(), task: toDoTask, completed: false},
            ...taskList,
          ],
          toDoTask: '',
        });
      }
    }
  };

  onDeleteTask = (id: number) => {
    this.setState(prevState => ({
      taskList: prevState.taskList.filter(task => task.id !== id),
    }));
  };

  onEditTask = (id: number, task: string | ReactNode) => {
    this.setState({
      editTaskId: id,
      toDoTask: task as string,
    });
  };

  onToggleCompleteTask = (id: number) => {
    this.setState(prevState => ({
      taskList: prevState.taskList.map(task =>
        task.id === id ? {...task, completed: !task.completed} : task,
      ),
    }));
  };

  render() {
    const {toDoTask, taskList, editTaskId} = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.toDoInput}
          autoCapitalize="words"
          autoCorrect={true}
          onChangeText={text => this.setState({toDoTask: text})}
          value={toDoTask}
          placeholder={'Please type Your Task Name'}
        />
        <Button
          onPress={this.onHandlePress}
          title={editTaskId !== null ? 'Update Task' : 'Add Task'}
        />
        <Text style={styles.title}>Your Tasks Using Class Component</Text>
        <FlatList
          data={taskList}
          renderItem={this.renderedTasks}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}

export default ToDoListClass;

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
