import React, {useEffect, useState} from "react";
import AsyncStorage from "@react-native-community/async-storage";
import Styles from "./styles";
import { Text, TextInput, View,  Button } from "react-native";

const Login = ({navigation}) =>{

const [username,setUserName] = useState("");

useEffect(()=>{
    checkAuth()
    },[])

const checkAuth=()=>{
    const username = AsyncStorage.getItem("username");
    if(username)
     {
       navigation.navigate("ViewNotes");
     }
     else{
       navigation.navigate("Login");
     }
}



const login=async()=>{
await AsyncStorage.setItem("username",username);
navigation.navigate("ViewNotes");
}

return (
    
         <View style={Styles.container}>
            <Text style={Styles.loginTextStyle}>Login</Text>
            <TextInput style={Styles.textInputStyle} onChangeText={(username) => setUserName(username)} placeholder="Username..." />
            <TextInput style={Styles.textInputStyle} placeholder="Password..." />
            <Button title="Log me in" onPress={login} />
        </View>     
   
)
}

export  {Login};