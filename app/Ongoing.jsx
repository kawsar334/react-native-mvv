import { useState } from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";
import OutGoingNav from "../components/ongoing_components/OutgoingNav";
import Sidebar from "../components/ongoing_components/Sidebar";
const projects = [
  { id: "1", name: "Project Alpha" },
  { id: "2", name: "Project Beta" },
  { id: "3", name: "Project Gamma" },
];
import * as Animatable from 'react-native-animatable';
import { white } from "../constant/colors";

const Ongoing = () => {
  const [open, setOpen] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* outgoing navbar  */}
      <OutGoingNav open={open} setOpen={setOpen} />
      {/* sidebar */}
      <Sidebar open={open} setOpen={setOpen} />

      <View style={styles.wrapper}>
        {/* outgoing contents */}
         <View style={styles.itemsContainer}>
                <FlatList
                  data={projects}
                  keyextractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <Animatable.View animation="slideInDown" iterationCount={1} direction="alternate"  style={styles.item}>
                      <View style={styles.itemLeft}>
                        <Image
                          style={{ width: 16, height: 16 }}
                          source={require("../assets/images/i12.png")}
                        />
                        <Text>show ongoing projects</Text>
                      </View>
                      <View>
                        <Image
                          style={{ width: 25, height: 25 }}
                          source={require("../assets/images/i13.png")}
                        />
                      </View>
                    </Animatable.View>
                  )}
                />
              </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },

  wrapper: {
    flex: 1,
    padding: 10,
    backgroundColor:white
  },
   itemsContainer: {
  backgroundColor: "white",
  },
  item: {
    display: "flex",
    flexDirection: "row ",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    padding: 10,
    backgroundColor:white,
    marginBottom:5,
    borderRadius:5, 
    boxShadow: "1px 1px 10px rgba(0,0,0,0.2)",
  },
  itemLeft:{
    flexDirection:"row",
    alignItems:"center",
    gap:10

  }
});
export default Ongoing;
