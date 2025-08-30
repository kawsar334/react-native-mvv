import { useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from "react-native";
import Chart from "../components/Chart";
import DashboardNav from "../components/DashboardNav";
const Dashboard = () => {
  const [open, setOpen] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <DashboardNav open={open} setOpen={setOpen} />
      <View style={[styles.wrapper, { zIndex: open ? -1 : 50 }]}>
        <View style={styles.topContainer}>
          <View style={styles.item}>
            <View style={styles.itemLeft}>
              <Text style={styles.title}>Total Earning</Text>
              <Text style={styles.ammount}>$54,997</Text>
            </View>
            <View style={styles.itemRight}>
              <Image
                style={styles.icon}
                source={require("../assets/images/forward.png")}
              />
              <Text>17%</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.itemLeft}>
              <Text style={styles.title}>Total Earning</Text>
              <Text style={styles.ammount}>$54,997</Text>
            </View>
            <View style={styles.itemRight}>
              <Image
                style={styles.icon}
                source={require("../assets/images/forward.png")}
              />
              <Text>17%</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.itemLeft}>
              <Text style={styles.title}>Total Earning</Text>
              <Text style={styles.ammount}>$54,997</Text>
            </View>
            <View style={styles.itemRight}>
              <Image
                style={styles.icon}
                source={require("../assets/images/forward.png")}
              />
              <Text>17%</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.itemLeft}>
              <Text style={styles.title}>Total Earning</Text>
              <Text style={styles.ammount}>$54,997</Text>
            </View>
            <View style={styles.itemRight}>
              <Image
                style={styles.icon}
                source={require("../assets/images/forward.png")}

              />
              <Text>17%</Text>
            </View>
          </View>
        </View>

        <View style={styles.singleItemContainer}>
          <View style={styles.singleItemWrapper}>
            <Image
              style={styles.icon}
              source={require("../assets/images/forward.png")}
            />
            <Text>17%</Text>
          </View>
        </View>
{/* ============================== */}
        <Chart />
{/* ============================== */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    zIndex: -1,
  },
  wrapper: {
    display: "flex",
  },
  topContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    padding: 10,
    width: "100%",
  },

  // cart items
  item: {
    width: "45%",
    backgroundColor: "white",
    height: "80px",
    boxShadow: "1px 1px 10px rgba(0,0,0,0.2)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 5,
    gap: 5,
  },
  itemLeft: {},
  itemRight: {
    flexDirection: "row",
    gap: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },

  title: {
    marginBottom: 10,
    fontWeight: 500,
  },
  ammount: {
    fontWeight: 700,
    fontSize: 13,
  },

  // singleItemContainer
  singleItemContainer: {
    width: "100%",
    paddingHorizontal: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  singleItemWrapper: {
    width: "96%",
    height: "90px",
    boxShadow: "1px 1px 10px rgba(0,0,0,0.4)",
    padding: 10,
  },
});
export default Dashboard;
