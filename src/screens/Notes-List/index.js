import React , {useEffect, useState} from  'react';
import {Text,View,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import { AddNotes } from '../AddNotes';
import styles from './styles';
import AsyncStorage from "@react-native-community/async-storage";

function ViewNotes({navigation}) {

const [notes,setNotes] =useState([]);

useEffect(()=>{
    AsyncStorage.setItem("Notes",notes);
},[notes])

// useEffect(()=>{
//    if(JSON.parse(AsyncStorage.getItem("Notes")))
//        setNotes(JSON.parse(AsyncStorage.getItem("Notes")));
//     else
//     AsyncStorage.setItem("Notes",[]);
// },[])


const addNote= (note)=>{
note.id=notes.length+1;
setNotes([...notes,note])
}
const deleteNote =(note) =>{
console.log(note);
setNotes(notes.filter((el)=> el.id !== note.id));
}

 return(
     <View style={styles.container}>
      {
      notes.length === 0 ?(<View style={styles.titleContainer}>
      <Text style={styles.title}> You dont have any ViewNotes</Text>
      </View>) : (
        <FlatList data={notes}  
        renderItem= {({item}) =>{ return(
            <View>
            <Text style={styles.sectionHeader}>{item.noteTitle}</Text>
            <Text style={styles.item}>{item.noteDesc}</Text>
            <Button icon={
                            <Icon
                            name="arrow-right"
                            size={5}
                            color="white"
                            />
                            }
                           title="delete" type="clear" onPress={()=>{deleteNote(item)}}/>
            </View>
        )
        }
        }
        />
      )
      }
      
      <Button style={styles.fab} title="Add new Note" onPress={()=>navigation.navigate("AddNotes",{addNote:addNote})}></Button>
     </View>
 );
}

export  {ViewNotes};