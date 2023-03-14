import {React, useEffect, useState} from 'react';
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
      <Text
          key={item.id}
          item={item}
          onPress={() => completedItem(item.id)}
          backgroundColor={backgroundColor}
          textColor={color}
          style={styles.listItem}
      />
        <TouchableOpacity onPress={() => handleDeleteTodo(item.id)} style={styles.deleteButton}>
          <View>
            <Text style={styles.deleteText}>delete</Text>
          </View>
        </TouchableOpacity>
    </View>
  );
};


  const Header = () => {
    return (
      <>
      <Text style={styles.heading}>To do list</Text>
      <View style={styles.writingWrapper}>
        <TextInput style={styles.input} placeholder={'Write a Todo...'} onChangeText={text => newText = text} />
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
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 32,
  },
  input: {
    height: 40,
    flex: 1,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  addWrapper: {
    width: 40,
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  heading: {
    fontSize:40,
    color: 'black',
    textAlign:'center',
    fontWeight: 'bold',
  }
});

export default App;
