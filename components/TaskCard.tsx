import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text } from './Themed';
import { FontAwesome } from '@expo/vector-icons';

interface CardDetail {
    symbol: String
    username: String 
    position: String
    Description: String
    date: String
    Status: String
}

const TaskCard = (props: CardDetail) => {

    const dateString = props.date;

    const parts = dateString.split(' ');

    console.log(props)

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <View style={styles.user}>
                    <Text style={{fontSize:16,color:"#fff"}}>{props.symbol}</Text>
                </View>
                <View style={styles.name}>
                    <Text style={styles.head2}>{props.username}</Text>
                    <Text style={styles.head3}>{props.position}</Text>
                </View>
            </View>

            <View style={styles.Task}>
             <Text style={{textAlign:"center"}} >{props.Description}</Text>
            </View>

            <View style={styles.Task}>
             <Text style={{color:"#acacac"}} >{parts[0] + ", " + parts[1]+" "+parts[3]}</Text>
             <TouchableOpacity style={{marginHorizontal:20,paddingHorizontal:20,borderWidth:2,borderColor:"#acacac66",paddingVertical:10,borderRadius:50}}>
                <Text style={{fontWeight:"600"}}>{props.Status}</Text>
             </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "column",
        borderWidth: 2,
        paddingHorizontal:10,
        alignItems: "center",
        borderColor: "#acacac80",
        borderRadius: 20,
        marginVertical:10
    },
    header: {
        flexDirection: "row",
        width:"100%",
        paddingVertical:10,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        paddingHorizontal:10
    },
    user: {
        paddingHorizontal:20,
        marginHorizontal:10,
        paddingVertical:15,
        borderRadius:50,
        backgroundColor:"#000",
        borderWidth:2,
        borderColor:"#fff"
    },
    head3: {
        fontSize: 14,
        color: "#acacac",
        alignItems:"flex-start",
        width:"80%",
        marginHorizontal: 6
    },
    head2: {
        fontSize: 18
    },
     name: {
        flexDirection: "column",
        width:"70%",
        alignItems:"flex-start",
    },
    Task:{
        width:"100%",
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        paddingHorizontal:10,
        paddingVertical:20,
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"flex-start"
    }
})

export default TaskCard;
