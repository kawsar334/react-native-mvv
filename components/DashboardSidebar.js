

import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DropDown from "../components/DropDown";
import { menuItems } from "../constant/MenuItems";

const DashboardSidebar = ({ open, setOpen }) => {
  const [show, setShow] = useState(false);

  return (
    <View style={[styles.container]}>
      <View style={styles.wrapper}>
        <View style={styles.closeBtn}>
       
          <TouchableOpacity onPress={() => setOpen(!open)}>
            <Text style={styles.closetBtn_Text}>Close</Text>
          </TouchableOpacity>
        </View>
        {menuItems.map((item, idx) =>
          item.type === "dropdown" ? (
            <DropDown key={idx} show={show} setShow={setShow} />
          ) : (
            <View style={styles.list} key={idx}>
              <Image style={styles.icon} source={item.icon} />
              <TouchableOpacity onPress={() => setOpen(!open)}>
                <Text>{item.label}</Text>
              </TouchableOpacity>
            </View>
          )
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: "white",
    zIndex: 50,
    padding:10
  },
  wrapper: {
    flex: 1,
    padding: 10,
    position: "relative",
  },
  closeBtn: {
    position: "absolute",
    top: 10,
    right: 10,
    cursor: "pointer",
    zIndex: 100,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "white",
    borderWidth:1,
    borderColor:"red",
    padding:3,
    borderRadius:5,

  },
  closetBtn_Text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "crimson",
  },
  list: {
    fontSize: 18,
    marginBottom: 10,
    color: "red",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 5,
    padding: 5,
  },
  icon: {
    width: 15,
    height: 15,
  },
  // dropdown
  dropdownContainer: {
    flexDirection: "column",
    gap: 0,
  },
  dropdown: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  arrow: {
    width: 18,
    height: 18,
    marginTop: 5,
  },
  dropdown_Ul: {
    gap: 5,
    marginLeft: 20,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
  dropdown_li: {
    paddingVertical: 5,
  },
});

export default DashboardSidebar;
