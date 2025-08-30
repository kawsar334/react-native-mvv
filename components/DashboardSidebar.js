import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import DropDown from "../components/DropDown";
const DashboardSidebar = ({ open, setOpen }) => {
  const [show, setShow] = useState(false);
  return (
    <View style={[styles.container]}>
      <View style={styles.wrapper}>
        <View style={styles.closeBtn}>
          <Image
            style={styles.icon}
            source={require("../assets/images/i1.png")}
          />

          

        
          <TouchableOpacity onPress={() => setOpen(!open)}>
            <Text style={styles.closetBtn_Text}>x</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.list}>
          <Image
            style={styles.icon}
            // source={require("../assets/images/i1.png")}
            source={require("../assets/images/i1.png")}

          />
          <TouchableOpacity onPress={() => setOpen(!open)}>
            <Text>Dashboard</Text>
          </TouchableOpacity>
        </View>

            {/* <Chart/> */}
        <View style={styles.list}>
          <Image
            style={styles.icon}
            source={require("../assets/images/i7.png")}
          />
          <TouchableOpacity onPress={() => setOpen(!open)}>
            <Text>Super Admin</Text>
          </TouchableOpacity>
        </View>

        {/* dropdown ================================== */}
        <DropDown show={show} setShow={setShow} />

        <View style={styles.list}>
          <Image
            style={styles.icon}
            source={require("../assets/images/i4.png")}
          />
          <TouchableOpacity onPress={() => setOpen(!open)}>
            <Text>Live Payment Cost</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.list}>
          <Image
            style={styles.icon}
            source={require("../assets/images/i2.png")}
          />
          <TouchableOpacity onPress={() => setOpen(!open)}>
            <Text>Quote Details</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.list}>
          <Image
            style={styles.icon}
            source={require("../assets/images/i3.png")}
          />
          <TouchableOpacity onPress={() => setOpen(!open)}>
            <Text>Interim Evaluation</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.list}>
          <Image
            style={styles.icon}
            source={require("../assets/images/i6.png")}
          />
          <TouchableOpacity onPress={() => setOpen(!open)}>
            <Text>Site Pictures & Reports</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.list}>
          <Image
            style={styles.icon}
            source={require("../assets/images/i7.png")}
          />
          <TouchableOpacity onPress={() => setOpen(!open)}>
            <Text>Site Pictures & Reports</Text>
          </TouchableOpacity>
        </View>
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
 
    width: 30,
    height: 30,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "white",
  },
  closetBtn_Text: {
    fontSize: "25px",
    fontWeight: "bold",
    color:"crimson"
   
  },
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

export default DashboardSidebar;
