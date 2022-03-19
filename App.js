import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import ICON from 'react-native-vector-icons/MaterialIcons'
import { StyleSheet, Text, View , KeyboardAvoidingView ,TextInput ,TouchableOpacity ,Keyboard ,ScrollView , Alert } from 'react-native';
import Task from './Components/Task';
export default function App() {
  const [text , setText] = useState('');
  const [task , setTask] = useState();
  const [taskItems,setTaskItems]=useState([]);
  const [isEmpty , setIsEmpty] = useState();
  const clearText=(text)=>{
    setText(text);
  }
  const checkEmpty=(isEmpty)=>{
    if(isEmpty==true){
      setIsEmpty(true);
    }
    else
    setIsEmpty(false);
  }
  const handleAddTask=()=>{
    Keyboard.dismiss();
    if(isEmpty==false){
      setTaskItems([...taskItems,task])
      setTask('');
    }
    else{
      Alert.alert('OOPS!','Todos must contain at least 1 character',[
        {text:'Okay', onPress: ()=> console.log('Alert closed')}
      ]);
      setTask('');
    }
  }
  const completeTask =(index)=>{
    let itemsCopy=[...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
  }
  const deleteAll=()=>{
    let zeroItems =[];
    setTaskItems(zeroItems);
  }
  return (
    <View style={styles.container}>
      {/* Today,s Tasks */}
      <View style={styles.tasksWrapper}>
        <View style={styles.header}>
          <Text style={styles.sectionTitle}>Today's Tasks</Text>
          <ICON name="delete" size={25} color="#b22222" onPress={()=>deleteAll()}/>
        </View>
        
        <ScrollView style={styles.items}>
          {/*this is where the tasks will go! */}
          {
            taskItems.map((item, index)=>{
              return <TouchableOpacity key={index} onPress={()=>completeTask(index)}>
                <Task  text={item}/>
              </TouchableOpacity>
            })
          }
        </ScrollView>
      </View>
      {/* Write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios"? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text =>{
          console.log(text.length)
          if(text.length==0){
            checkEmpty(true);
            setTask(null);
          }
          else{
            checkEmpty(false);
            setTask(text);
            clearText('');
          }
          }} clearButtonMode="always"/>
        <TouchableOpacity onPress={()=>{
        handleAddTask();
        }}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header:{
    padding:20,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  tasksWrapper:{
    paddingTop: 50,
    paddingHorizontal:20,

  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold',

  },
  items:{
    marginTop:30,
    height:580
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems:'center'
  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    width:250,
    backgroundColor:'#fffafa',
    borderRadius:60,
    borderColor:'#C0C0C0',
    borderWidth:1
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:'#fffafa',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#C0C0C0',
    borderWidth:1
  },
  addText:{}
});
