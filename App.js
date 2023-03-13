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
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

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
});

export default App;
