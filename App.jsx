import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>hihi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 30,
  },
});

export default App;
