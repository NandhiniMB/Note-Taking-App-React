import React from 'react';
import { useState } from 'react';
import {View,Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
// import { } from 'react-native-gesture-handler';
import styles from './styles';

function AddNotes({navigation,route}){

 const [noteTitle,setNoteTitle] = useState('');
 const [noteDesc,setNoteDesc] = useState('');
 function onSaveNote(){

  //navigation.params doesnt work
  console.log(route.params);
  route.params.addNote({noteTitle,noteDesc});
  navigation.goBack();
 }

 return(    

  
    <View style={styles.Container}>
  

    
        <TextInput placeholder="Title" value={noteTitle} mode="outlined" style={styles.title} onChangeText={setNoteTitle}/>
        <TextInput placeholder="Description"  value={noteDesc} mode="flat" multiline={true}  scrollEnabled={true} style={styles.text} onChangeText={setNoteDesc}></TextInput>
        <Button 
         icon={
         <Icon
               name="arrow-right"
               size={15}
               color="gray"
                
         />
         }
         iconRight
         title="Save" type="save" onPress={onSaveNote}
         />
 
   
   </View>
   );   
}
export  {AddNotes};