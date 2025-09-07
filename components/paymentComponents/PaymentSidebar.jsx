import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { menuItems } from "../../constant/MenuItems";
import { white, whiteSmoke } from "../../constant/colors";
import * as Animatable from "react-native-animatable";
const PaymentSidebar = ({ open, setOpen }) => {
  return (
    <View
      style={[styles.sidebarContainer, { left: `${open ? "0" : "-100%"}` }]}
    >
      <FlatList
        data={menuItems}
        renderItem={({ item }) => {
          return (
            <>
              {item.type == "dropdown" ? (
                <View style={{ display: "none" }}>Not found</View>
              ) : (
                <TouchableOpacity
                  style={styles.sidebarItems}
                  onPress={() => setOpen(!open)}
                >
                  <Animatable.View
                    animation="slideInDown"
                    iterationCount={1}
                    direction="alternate"
                    style={styles.item}
                  >
                    <Image style={styles.icon} source={item.icon} />
                    <Text>{item.label}</Text>
                  </Animatable.View>
                </TouchableOpacity>
              )}
            </>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  sidebarContainer: {
    position: "absolute",
    top: 60,
    backgroundColor: white,
    height: "100vh",
    width: "100vw",
    padding: 10,
    transition: "left 1s  ease",
    zIndex: 100,
  },
  sidebarItems: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  item: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
    backgroundColor: whiteSmoke,
    marginBottom: 5,
    gap: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
export default PaymentSidebar;
