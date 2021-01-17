import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 20
       
    },
    
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',

        flex: 1
    },
    title: {
        fontSize: 24,
        margin:10,
        height:40,
        width: 340,
        borderWidth:2,
        borderColor:'gray',
       
    },
    text: {
        height: 300,
        width: 340,
        margin:10,
        fontSize: 16,
        borderWidth:2,
        borderColor:'gray',
        justifyContent:'space-evenly',
        alignItems:'baseline'      
    },
    Button : {
        marginRight:1000
    }

})


export default styles;