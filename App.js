import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { borderLeftColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import Task from './components/Task';
export default function App() {
  return (
    <View style={styles.container}>
      {/* Today,s Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}>
          {/*this is where the tasks will go! */}
          <Task text={'Task 1'} />
          <Task text={'Task 2'} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5f9ea0',
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
  }
});
