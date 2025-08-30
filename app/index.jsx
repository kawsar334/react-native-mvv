
import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { darkGreen } from "../constant/colors";

const index = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require("../assets/images/icon.png")}
      />
      <Text style={styles.text}>TheMVV.co.uk</Text>
      <Pressable
        style={({pressed})=>[styles.button, pressed && styles.buttonPressed]}
        onPress={() => router.push("/Dashboard")}
      >
        <Text style={styles.buttonText}>Go to Details</Text>
      </Pressable>
      
      {/* <Button title="Go to Details" onPress={() => router.push("/Dashboard")} /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: darkGreen,
  },

  tinyLogo: {
    width: 83,
    height: 47,
    // backgroundColor:"red",
    // borderWidth:"2px",
    // objectFit:"cover",
    padding: 20,
  },
  text: {
    color: "#ffff",
    padding: 10,
    fontSize: 16,
  },
   button: {
    backgroundColor: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 22,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonPressed: {
    backgroundColor: "red",
  },
});
export default index;
