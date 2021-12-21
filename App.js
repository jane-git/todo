import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import { theme } from './colors';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity>
        <Text style={styles.btnText}>Work</Text>
        </TouchableOpacity>
        <TouchableHighlight 
          underlayColor="red"
          activeOpacity={0.5}
        onPress={() => console.log("pressed")}
        >
        <Text style={styles.btnText}>Travel</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    padddingHorizontal: 20,
  },
  header:{
    justifyContent: "space-between",
    flexDirection:"row",
    marginTop: 100,
  },
  btnText: {
    fontSize: 44,
    fontWeight: "600",
    color: "white",
  },
});
