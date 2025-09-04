import React, { Component, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import { maincolor, white } from "../constant/colors";
import PaymentNav from "../components/paymentComponents/PaymentNav";
import PaymentSidebar from "../components/paymentComponents/PaymentSidebar";
const Payment = () => {

    const [open, setOpen]= useState(false)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <PaymentNav open={open} setOpen={setOpen}/>
        <PaymentSidebar open={open} setOpen={setOpen}/>
      <ScrollView style={styles.scrollContainer}>
        <Text>kawsar firoz</Text>
        <Text>kawsar firoz</Text>
        <Text>kawsar firoz</Text>
        <Text>kawsar firoz</Text>
        <Text>kawsar firoz</Text>
        <Text>kawsar firoz</Text>
        <Text>kawsar firoz</Text>

      </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: white,
    flex: 1,
  },
  wrapper: {
    position: "relative",
    width: "100%",
  },

  scrollContainer:{
    paddingTop:70,
    height:"30px"
  }


});

export default Payment;
