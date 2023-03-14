import React, { useEffect, useState, useRef, Button } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {

  const [todos, setTodos] = React.useState([]);
  let newText = "";

  const renderList = ({ item }) => {
    const backgroundColor = item.finished ? 'white' : 'white';
    const color = item.finished ? '#DADADA' : 'black';

    const completedItem = id => {
      console.log(id);
      const newTodos = todos.map(todo => {
        if (todo.id === id) {
          todo.finished = !todo.finished;
        }
        return todo;
      });
      console.log(newTodos);
      setTodos(newTodos);
    }

    return (
      <View style={styles.todo}>
        <Item
          key={item.id}
          item={item}
          onPress={() => completedItem(item.id)}
          backgroundColor={backgroundColor}
          textColor={color}
          style={styles.listItem}
        />
        <TouchableOpacity onPress={() => handleDeleteTodo(item.id)} style={styles.removeButton}>
          <View>
            <Text style={styles.deleteText}>Delete</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
      <Text style={[styles.title, { color: textColor }]}>{item.text}</Text>
    </TouchableOpacity>
  );

  const addTodo = () => {
    setTodos([...todos, { id: Date.now(), text: newText, finished: false }]);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    console.log();
  };

  const Header = () => {
    return (
      <>
        <Text style={styles.heading}>To Do List</Text>
        <View style={styles.writingWrapper}>
          <TextInput style={styles.addName} placeholder={'Write a Todo...'} onChangeText={text => newText = text} />
          <TouchableOpacity onPress={addTodo}>
            <View style={styles.addWrapper}>
              <Text style={styles.addList}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
      </>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={todos}
        renderItem={renderList}
        keyExtractor={item => item.id}
        ListHeaderComponent={Header}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    flex: 2,
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    color: 'white',
    fontSize: 20,
  },
  addName: {
    height: 40,
    flex: 1,
    margin: 12,
    borderWidth: 2,
    padding: 10,
  },
  addWrapper: {
    width: 40,
    height: 40,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  writingWrapper: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  addList: {
    fontSize: 20,
  },
  todo: {
    flexDirection: 'row',
    marginHorizontal: 20,
    margin: 10,
  },
  heading: {
    fontSize: 25,
    textIndent: 50,
    letterSpacing: 3,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'gray',
  },
  removeButton: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    color: 'white',
  },
  deleteText: {
    color: 'white',
  },
});

export default App;