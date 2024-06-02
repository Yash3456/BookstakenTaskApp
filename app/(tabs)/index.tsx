import { StyleSheet, FlatList, SafeAreaView, Pressable, TouchableOpacity } from 'react-native';
import TaskCard from '@/components/TaskCard';
import { useEffect, useState } from 'react';
import { Text, View } from '@/components/Themed';
import { Feather } from '@expo/vector-icons';
import { RotateInDownLeft } from 'react-native-reanimated';

interface CardDetail {
  symbol: String
  username: String 
  position: String
  Description: String
  date: String
  Status: String
}

export default function TabOneScreen() {

  const [tasks,settasks] = useState();

  const getDataagain = async () => {

    const apiResponse = await fetch(
      'http://192.168.0.156:9000/gettask',{
        method:"GET"
      }
    );
    const data = await apiResponse.json();
    settasks(data);
    console.log(tasks);
  };  
  
  useEffect(() => {

    const getData = async () => {
      const apiResponse = await fetch(
        'http://192.168.0.156:9000/gettask',{
          method:"GET"
        }
      );
      const data = await apiResponse.json();
      settasks(data);
      console.log(tasks);
    };  

    getData();
  }, []);


 const renderItem = ({item}) =>{
  return <TaskCard username={item.username} date={item.date} symbol={item.symbol} position={item.position} Description={item.Description} Status={item.Status}  />
 }

  return (
    <SafeAreaView style={styles.container}>
        <FlatList
        data={tasks} 
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item)=> item.id}
         />

      <TouchableOpacity style={{position:"absolute",bottom:0,right:0,borderWidth:2,borderColor:"#acacac",borderRadius:50,backgroundColor:"#fff",alignItems:"flex-end",justifyContent:"flex-end", marginBottom:10,marginRight:10,paddingHorizontal:10,paddingVertical:10}} onPress={getDataagain} > 
      <Feather name="rotate-ccw" size={30} color="black" />
      </TouchableOpacity>  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

