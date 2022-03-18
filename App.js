import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import ICON from 'react-native-vector-icons/MaterialIcons'
import { StyleSheet, Text, View , KeyboardAvoidingView ,TextInput ,TouchableOpacity ,Keyboard } from 'react-native';
import Task from './components/Task';
export default function App() {
  const [task , setTask] = useState();
  const [taskItems,setTaskItems]=useState([]);
  const handleAddTask=()=>{
    Keyboard.dismiss();
    setTaskItems([...taskItems,task])
    setTask(null);
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
        <View style={styles.items}>
          {/*this is where the tasks will go! */}
          {
            taskItems.map((item, index)=>{
              return <TouchableOpacity key={index} onPress={()=>completeTask()}>
                <Task  text={item}/>
              </TouchableOpacity>
            })
          }
        </View>
      </View>
      {/* Write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios"? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}/>
        <TouchableOpacity onPress={()=>handleAddTask()}>
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
    backgroundColor: '#5f9ea0',
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
    marginTop:30
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
