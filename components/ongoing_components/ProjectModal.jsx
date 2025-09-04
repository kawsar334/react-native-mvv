import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { black, white } from "../../constant/colors";

const ProjectModal = ({ vissible, setVissible, show, setShow }) => {
  const toggleModal = () => {
    setVissible(!vissible);
    setShow(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text>Project</Text>
        <TextInput placeholder="Untitle project" style={styles.input} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={toggleModal} style={styles.leftButton}>
            <Text>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rightButton}>
            <Text style={{ color: "white" }}>Create Project</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%",
    height: "100vh",
    zIndex: 100,
    padding: 20,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  wrapper: {
    width: "90%",
    height: "200px",
    backgroundColor: white,
    padding: 20,
    borderRadius: 10,
    boxShadow: "1px 1px 10px rgba(0,0,0,0.2)",

    marginTop: 100,
    position: "relative",
  },
  input: {
    borderWidth: 1,
    width: "80%",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    width: "90%",
  },
  leftButton: {
    width: "30%",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  rightButton: {
    backgroundColor: black,
    padding: 10,
    borderRadius: 5,
  },
});

export default ProjectModal;
