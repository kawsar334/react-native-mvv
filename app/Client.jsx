import React, { Component } from "react";
import { Text, StyleSheet, View, SafeAreaView , Image} from "react-native";
import { buttonGreen, white, whiteSmoke } from "../constant/colors";

const Client = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>

      <Image source={require("../assets/images/i5.png")} />
      <Text style={styles.text}>File data will preview here</Text>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

    container:{

        flex:1,
        justifyContent:"center",
        alignItems:"center",    
        backgroundColor:"white",
        padding :60,
        justifyContent:"center",
        alignItems:"center",

    },
    wrapper:{
        backgroundColor:whiteSmoke,
        width:"90%",
        height:"95%",
        borderRadius:2,
        justifyContent:"center",
        alignItems:"center",
        // boxShadow: "1px 1px 10px rgba(0,0,0,0.2)",
        flexDirection:"column",
        gap:20,
        padding:20
    },
    text:{
        color:buttonGreen,
        fontSize:20,
        fontWeight:"600",
    }
});

export default Client;
