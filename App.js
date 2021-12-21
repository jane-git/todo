import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, TextInput } from 'react-native';
import { theme } from './colors';

export default function App() {
  const [working, setWorking] = useState(true);
  const [text, setText] =useState("");
  const travel = () => setWorking(false);
  const work = () => setWorking(true);
  const onChanegeText = (payload) => setText(event);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
        <Text style={{...styles.btnText, color: working ? "white": theme.grey}}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}> 
          <Text style={{...styles.btnText, color: !working ? "white": theme.grey}}>Travel</Text>
        </TouchableOpacity>
      </View>
     
        <TextInput 
        //keyboardType="email-address" 
       // autoCapitalize={"words"}
         onChangeText={onChangeText}
         value={text}
      //  returnKeyType="send"
        //multiline
       // secureTextEntry
        keyboardType="email-address" 
        placeholder={working ? "Add a To Do": "Where do you want to go?"}
        style={styles.input}/>
      
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
    fontSize: 100,
    fontWeight: "600",
   // color: "white",
  },
  input:{
    backgroundColor:"white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 20,
    fontSize: 18,
  }
});
