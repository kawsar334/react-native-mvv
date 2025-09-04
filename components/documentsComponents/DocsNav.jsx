import {
  Text,
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import { black, white } from "../../constant/colors";
const DocsNav = () => {
  return (
    <>
      <View style={styles.navbar}>
        <View style={styles.left}>
          <Link href="/Client">
            <Image
              style={styles.leftArrow}
              source={require("../../assets/images/i14.png")}
            />
          </Link>
          <Text style={styles.navText}>Documents </Text>
        </View>
        <TouchableOpacity style={styles.right}>
          <Text style={styles.rightText}>upload</Text>
          <Image
            style={styles.upArrow}
            source={require("../../assets/images/i15.png")}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: white,
    height: 60,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    gap: 20,
    boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2)`,
    position: "absolute",
    zIndex: 100,
    top: 0,
    left: 0,
    right: 0,
  },
  left: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  right: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  upArrow: {
    width: 25,
    height: 25,
    tintColor: black,
  },
  leftArrow: {
    width: 25,
    height: 25,
    tintColor: black,
  },
  rightText: {
    fontSize: 16,
    fontWeight: "500",
    color: black,
    textTransform: "capitalize",
  },
  navText: {
    color: black,
    fontSize: 18,
    fontWeight: "500",
  },
});
export default DocsNav;
