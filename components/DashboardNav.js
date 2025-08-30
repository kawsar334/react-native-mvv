import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import DashboardSideBar from "./DashboardSidebar";
export default function DashboardNav({ open, setOpen }) {
  return (
    <View style={[styles.navContainer]}>
      {open && <DashboardSideBar open={open} setOpen={setOpen} />}
      <View style={[styles.wrapper]}>
        {/* {display:open?"none":"flex"} */}

        <View style={styles.leftContainer}>
          <TouchableOpacity
            onPress={() => {
              setOpen(!open);
            }}
          >
            <Image
              style={styles.bar}
              source={require("../assets/images/bar.png")}
            />
          </TouchableOpacity>
          <Text style={styles.navHeader}>Dashboard</Text>
        </View>
        <Text>Switch Dashboard</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    width: "100%",
    display: "flex",
    position: "relative",
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    padding: 5,
    justifyContent: "space-between",
  },
  leftContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  bar: {
    width: 18,
    height: 18,
    cursor: "pointer",
  },
  navHeader: {
    fontSize: "18px",
    fontWeight: 600,
    marginLeft: "10px",
  },
});
