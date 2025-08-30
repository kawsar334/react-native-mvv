import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function DropDown({ show, setShow }) {
  return (
    <View style={styles.dropdownContainer}>
      <View style={styles.list}>
        <Image
          style={styles.icon}
          source={require("../assets/images/i5.png")}
        />
        <TouchableOpacity
          onPress={() => setShow(!show)}
          style={styles.dropdown}
        >
          <Text>Payment Tracker</Text>
          <Image
            style={[
              styles.arrow,
              { transform: `rotate(${show ? "180deg" : "0deg"})` },
            ]}
            source={require("../assets/images/arrow.png")}
          />
        </TouchableOpacity>
      </View>
      {/* dropdown_List */}
      {show && (
        <View style={styles.dropdown_Ul}>
          <TouchableOpacity style={styles.dropdown_li}>
            Item one{" "}
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdown_li}>
            Item one{" "}
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdown_li}>
            Item one{" "}
          </TouchableOpacity>
        </View>
      )}
      {/* dropdown_List */}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    color: "white",
    fontSize: 18,
    marginBottom: 10,
    color: "red",
    display: "flex",
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
    // backgroundColor: "red",
    display: "flex",
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
