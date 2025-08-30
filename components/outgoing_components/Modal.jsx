import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Modal = ({ show, setShow, vissible, setVissible }) => {
  const toggleModal = () => {
    setShow(!show);
    setVissible(!vissible);
  };
  return (
    <TouchableOpacity style={styles.modal}>
      <View
        onPress={() => setShow(!show)}
        style={[
          styles.item,
          { borderBottomWidth: 1, borderBottomColor: "lightgray" },
        ]}
      >
        <Image
          style={styles.icon}
          source={require("../../assets/images/i10.png")}
        />
        <TouchableOpacity onPress={toggleModal} style={styles.itemText}>
          New Project
        </TouchableOpacity>
      </View>
      <View style={styles.item} onPress={() => setShow(!show)}>
        <Image
          style={styles.icon}
          source={require("../../assets/images/i11.png")}
        />
        <Text style={styles.itemText}>Switch Dashboard</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  modal: {
    position: "absolute",
    top: 70,
    right: "50%",
    width: 250,
    height: 100,
    transform: [{ translateX: "50%" }],
    backgroundColor: "white",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
    zIndex: 200,
    borderRadius: 5,
    padding: 10,
    justifyContent: "flex-start",
    alignItems: "start",
  },
  item: {
    padding: 5,
    marginBottom: 5,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
  itemText: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Modal;
