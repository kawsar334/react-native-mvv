import { useState } from "react";
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import Modal from "./Modal";
import ProjectModal from "./ProjectModal";

const OutgoingNav = ({ open, setOpen }) => {
  const [show, setShow] = useState(false);
  const [vissible, setVissible] = useState(false);

  return (
    <SafeAreaView style={styles.main}>
      {/* modal  */}
      {show && (
        <Modal
          show={show}
          setShow={setShow}
          vissible={vissible}
          setVissible={setVissible}
        />
      )}
      {/* modal */}

      {/* second Modal */}
      {vissible && (
        <ProjectModal
          vissible={vissible}
          setVissible={setVissible}
          show={show}
          setShow={setShow}
        />
      )}
      {/* second Modal */}

      <View style={styles.container}>
        <View style={styles.left}>
          <TouchableOpacity onPress={() => setOpen(!open)}>
            <Image
              style={styles.bar}
              source={require("../../assets/images/bar.png")}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Ongoing Projects </Text>
        </View>

        <TouchableOpacity style={styles.right} onPress={() => setShow(!show)}>
          <Image
            style={styles.bar}
            source={require("../../assets/images/i9.png")}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    position: "relative",
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: "white",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    zIndex: 100,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  bar: {
    width: 25,
    height: 25,
    cursor: "pointer",
  },
  left: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  right: {},
});

export default OutgoingNav;
