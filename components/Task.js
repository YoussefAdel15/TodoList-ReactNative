import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-web';

const Task=(props) =>{

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.squar}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor: '#fffafa',
        padding: 15,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20
    },
    itemLeft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap'
    },
    squar:{
        width:24,
        height:24,
        backgroundColor:'#6495ed',
        opacity: 0.4,
        borderRadius:5,
        marginRight:15,
    },
    itemText:{
        maxWidth:'80%',
    },
    circular:{
        width:12,
        height:12,
        borderColor:'#6495ed',
        borderWidth:2,
        borderRadius:5
    }

}
);

export default Task;