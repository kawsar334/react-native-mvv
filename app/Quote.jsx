import React, { Component, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import QouteNav from "../components/qoute_components/QouteNav";
import { white, whiteSmoke, shadowColor } from "../constant/colors";
import QouteSidebar from "../components/qoute_components/QouteSidebar";
const quotes = [
  { id: 1, name: "Document", amount: "1,200" },
  { id: 2, name: "Document", amount: "2,500" },
  { id: 3, name: "Document", amount: "3,000" },
  { id: 4, name: "Document", amount: "1,800" },
  { id: 5, name: "Document", amount: "2,100" },
];
const Quote = () => {
  const [open, setOpen] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <QouteNav open={open} setOpen={setOpen} />
      <QouteSidebar open={open} setOpen={setOpen} />
      <ScrollView
        contentContainerStyle={{
          paddingTop: 60,
          backgroundColor: white,
          height: 1000,
        }}
      >
        <View style={styles.itemsContainer}>
          {quotes.map((item) => (
            <View key={item.id} style={styles.item}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.amount}>{item.amount}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    position: "relative",
  },

  itemsContainer: {
    backgroundColor: white,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 20,
    padding: 20,
  },
  item: {
    boxShadow: `0 4px 8px 0 ${shadowColor}`,
    padding: 10,
    borderRadius: 5,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "start",
    gap: 20,
    backgroundColor: whiteSmoke,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
  },
  amount: {
    fontSize: 16,
    fontWeight: "500",
    color: "gray",
  },
});
export default Quote;
