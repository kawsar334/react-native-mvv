


import { Link, useRouter } from "expo-router";
import { Animated, Image, StyleSheet, Text, View, } from "react-native";
import { black, maincolor, white, whiteSmoke } from "../constant/colors";
import { useEffect, useRef } from "react";
import * as Animatable from 'react-native-animatable';
import {menuItems} from "../constant/MenuItems"
const Index = () => {
  const router = useRouter(); 
  const logoAnim = useRef(new Animated.Value(0)).current; 
// 
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(logoAnim, {
          toValue: 1, 
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(logoAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    const timing = setTimeout(() => {
      router.push("/Login");
    }, 5000);

    return () => clearTimeout(timing);
  }, []);

  const translateY = logoAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -10],
  });

  const opacity = logoAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });


  

  return (
    <View style={styles.container}>

      <View style={styles.menuContainer}>
        {menuItems?.map((item)=>(
          <View  style={styles.menus}>
            <Link style={styles.menu} href={`/${item?.link}`}>
            <Image source={item?.icon} style={styles.icon}/>
            </Link>
          </View>
        ))}
      </View>
      <Animated.Image
        style={[styles.tinyLogo, { transform: [{ translateY , rotate:`${opacity}"deg"`}], opacity }]}
        source={require("../assets/images/icon.png")}
      />

      {/* <Text style={styles.text}>TheMVV.co.uk</Text> */}
      <Animatable.Text  animation="zoomInUp" style={styles.text}>TheMVV.co.uk</Animatable.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: maincolor,
  },

  tinyLogo: {
    width: 83,
    height: 47,
    padding: 20,
    tintColor: white,
  },
  text: {
    color: white,
    padding: 10,
    fontSize: 22,
  },

  // 
  menuContainer:{
    width:"100%",
     display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    // backgroundColor:"gray",
    marginBottom:100
  },
  menus:{
    margin:1
  },
  menu:{
  },
  icon:{
    tintColor:white,
    width:25,
    height:25,
    margin:10
  }
});

export default Index;
