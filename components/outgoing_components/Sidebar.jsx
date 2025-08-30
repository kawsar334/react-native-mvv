import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { white, whiteSmoke } from "../../constant/colors";
const projects = [
  { id: "1", name: "Project Alpha" },
  { id: "2", name: "Project Beta" },
  { id: "3", name: "Project Gamma" },
];
const Sidebar = ({ open, setOpen }) => {
  return (
    <View style={[styles.sidebar, { left: open ? "0" : "-100%" }]}>
      <View style={styles.itemsContainer}>
        <FlatList
          data={projects}
          keyextractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={styles.itemLeft}>
                <Image
                  style={{ width: 16, height: 16 }}
                  source={require("../../assets/images/i12.png")}
                />
                <Text>show ongoing projects</Text>
              </View>
              <View>
                <Image
                  style={{ width: 25, height: 25 }}
                  source={require("../../assets/images/i13.png")}
                />
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};
export default Sidebar;

const styles = StyleSheet.create({
  sidebar: {
    position: "absolute",
    top: 60,
    width: "100%",
    height: "100vh",
    backgroundColor: white,
    zIndex: 50,
    transition: "left 0.5s ease-in-out",
    padding: 20,
  },
  itemsContainer: {
  backgroundColor: white,
  },
  item: {
    display: "flex",
    flexDirection: "row ",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    padding: 10,
    backgroundColor:whiteSmoke,
    marginBottom:5,
    borderRadius:5
  },
  itemLeft:{
    flexDirection:"row",
    alignItems:"center",
    gap:10

  }
});
