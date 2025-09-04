import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { black, transparentBlack, white } from "../../constant/colors";
import { menuItems } from "../../constant/MenuItems";

const QouteSidebar = ({ open, setOpen }) => {
  return (
    <View style={[styles.container, { left: open ? "0" : "-100%" }]}>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.label}
        renderItem={({ item }) => (
          <>
            {item?.type === "dropdown" ? (
              <Text style={{ display: "none" }}></Text>
            ) : (
              <TouchableOpacity
                style={styles.item}
                onPress={() => console.log(item.title)}
              >
                <Text style={styles.itemText}>{item.label}</Text>
              </TouchableOpacity>
            )}
          </>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 60,
    zIndex: 50,
    flex: 1,
    width: "100%",
    height: "100vh",
    backgroundColor: white,
    transition: "left 0.5s ease-in-out",
    padding: 20,
  },
  item: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  itemText: {
    fontSize: 18,
    fontWeight: "500",
  },
});
export default QouteSidebar;
