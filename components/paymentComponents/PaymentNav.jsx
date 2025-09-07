import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { maincolor, shadowColor, white } from "../../constant/colors";
import * as Animatable from "react-native-animatable";
const PaymentNav = ({ open, setOpen }) => {
  return (
    <View style={styles.navbar}>
      <Animatable.View
        animation="slideInDown"
        iterationCount={1}
        direction="alternate"
        style={styles.navbarLeft}
      >
        <TouchableOpacity onPress={() => setOpen(!open)}>
          <Image
            style={styles.bar}
            source={require("../../assets/images/bar.png")}
          />
        </TouchableOpacity>
        <Text style={styles.text}>Payment Tracker </Text>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  //   navbar
  navbar: {
    backgroundColor: white,
    height: 60,
    padding: 10,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 100,
    boxShadow: `0 0 5px ${shadowColor}`,
  },
  navbarLeft: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
  },
  bar: {
    width: 25,
    height: 25,
    tintColor: maincolor,
  },
  text: {
    fontSize: 18,
  },
});

export default PaymentNav;
