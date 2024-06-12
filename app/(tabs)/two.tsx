import { Alert, StyleSheet, TextInput, TouchableOpacity, useColorScheme } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useState } from 'react';
import axios from 'axios';

export default function TabTwoScreen() {

  const colorscheme = useColorScheme();

  const [username, setusername] = useState("");
  const [task,settask] = useState("");


  const details = {
    username: username,
    task: task,
    symbol:username[0],
    position: username[0] === 'Y' ? "CTO" : username[0] === 'S' ? "CEO" : "COO"
  };

  const requestOptions = { 
    method: 'POST', 
    headers: { 'Content-Type': 'application/json' }, 
    body: JSON.stringify(details) 
}; 

const postData = async () => { 
    try { 
        await fetch( 
            'https://bookstakentaskbackend.vercel.app/newtask', requestOptions) 
            .then(response => { 
                response.json() 
                    .then(()=>{
                      setusername("");
                      settask("");
                    }); 
            }) 
    } 
    catch (error) { 
        console.error(error); 
    } 
} 
    
  

  return (
    <View style={styles.container}>
      <View style={[styles.form,{borderColor: colorscheme === "dark" ? "#fff" : "#acacac" }]}>
        <Text style={{ fontSize: 20 }}>Create Task</Text>

        <View style={{ width: "96%",marginHorizontal:"auto",marginVertical:"auto"}}>
          <View
            style={{
              flexDirection: 'col',
              borderBottomColor: colorscheme === "dark" ? '#ccc' : '#000',
              borderBottomWidth: 1,
              paddingBottom: 8,
              marginVertical: 10,
              marginHorizontal: 4
            }}>
            <Text style={{ marginTop: 10, color: colorscheme === "dark" ? "#ffffffCC" : "#000" }}>UserName</Text>
            <TextInput style={{ color: colorscheme === "dark" ? "#fff" : "#000" }} value={username} onChangeText={val=> setusername(val)} />
          </View>

          <View
            style={{
              flexDirection: 'col',
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              paddingBottom: 8,
              marginVertical: 10,
              marginHorizontal: 4
            }}>
            <Text style={{ marginTop: 10, color: colorscheme === "dark" ? "#ffffffCC" : "#000" }}>Task</Text>
            <TextInput style={{ color: colorscheme === "dark" ? "#fff" : "#000" }} value={task} onChangeText={text=> settask(text)} />
          </View>
        </View>
        
      <TouchableOpacity style={[styles.submit,{ backgroundColor:colorscheme === "dark" ? "#fff" : "#000", bottom:0 }]} onPress={postData} >
     <Text style={[styles.SubmitText,{color:colorscheme === "dark" ? "#000" : "#fff"}]}>Register</Text>
     </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    width: "90%",
    marginHorizontal: "auto",
    height: "70%",
    marginVertical: "auto",
    alignItems: "center",
    paddingVertical: 30,
    borderRadius: 20,
    borderWidth:2
  },
  submit:{
    width:"90%",
    marginHorizontal:"auto",
    alignItems:"center",
    paddingVertical:20,
    marginTop:20,
    borderRadius:20,
  },
  SubmitText:{
     fontSize:20,
     fontWeight:"600"
  },
});
