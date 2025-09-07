import React, { Component, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { maincolor, shadowColor, white, whiteSmoke } from "../constant/colors";
import PaymentNav from "../components/paymentComponents/PaymentNav";
import PaymentSidebar from "../components/paymentComponents/PaymentSidebar";
import { menuItems } from "../constant/MenuItems";
import AnimationComponent from "../components/paymentComponents/AnimationComponent";

import * as Animatable from 'react-native-animatable';

const Payment = () => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState({});
  const handleData = (item) => {
    setOpenModal(!openModal);
    setData(item);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <PaymentNav open={open} setOpen={setOpen} />
        <PaymentSidebar open={open} setOpen={setOpen} />
        {/* Modal */}
       {openModal && <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Text>{data?.label}, $5000</Text>
          <TouchableOpacity style={styles.closeBtn} onPress={()=>setOpenModal(!openModal)}>Close</TouchableOpacity>
          </View>
        </View>}
        {/* Modal */}
        <ScrollView style={styles.scrollContainer}>
          <FlatList
            data={menuItems}
            renderItem={({ item }) => {
              return (
                <Animatable.View animation="slideInDown" iterationCount={1} direction="alternate">

                <TouchableOpacity
                  onPress={() => handleData(item)}
                  style={styles.itemContainer}
                  >
                  <Text>{item.label}</Text>
                  <View style={styles.bottomContainer}>
                    <Text>value</Text>
                    <Text>$5,0000</Text>
                  </View>
                </TouchableOpacity>
                  </Animatable.View>
              );
            }}
          />
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

  scrollContainer: {
    paddingTop: 100,
    height: "100vh",
    padding: 20,
  },
  itemContainer: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    boxShadow: `0 0  5px ${shadowColor}`,
  },
  bottomContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  modalContainer:{
    position:"absolute",
    width:"100%",
    height:"100vh",
    backgroundColor:shadowColor,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    zIndex:200,
    top:0,
    left:0
  },
  modal:{
    width:"300px",
    height:"max-content",
    backgroundColor:white,
    borderRadius:10,
    padding:20,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  closeBtn:{
    width:"100%",
    backgroundColor:"crimson",
    padding:5,
    borderRadius:5,
    width:100,
    marginVertical:10,
    textAlign:"center",
    color:whiteSmoke
  }
});

export default Payment;
