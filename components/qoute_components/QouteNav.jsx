import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { black, shadowColor, white } from "../../constant/colors";

const QouteNav = ({ open, setOpen }) => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => setOpen(!open)}>
        <Image source={require("../../assets/images/bar.png")} style={styles.bar} />
      </TouchableOpacity>
      <Text style={styles.text}>Qoute Details.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    height: 60,
    justifyContent: "start",
    alignItems: "center",
    backgroundColor: white,
    display: "flex",
    flexDirection: "row",
    gap: 20,
    boxshadow: `0 4px 8px 0 rgba(0, 0, 0, 0.5)`,
  },
  bar:{
    width:25,
    height:25,
    marginLeft:10,
    cursor:"pointer",
    tintColor:black
  },
  text: {
    color: black,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default QouteNav;
