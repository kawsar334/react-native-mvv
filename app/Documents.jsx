import {
  Text,
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { black, white } from "../constant/colors";
import { Link } from "expo-router";
import DocsNav from "../components/documentsComponents/DocsNav";
import { useState } from "react";

const Documents = () => {
    const [open, setOpen] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      {/* navbar */}
      <DocsNav />
      {/* Navbar  */}
      <View style={styles.wrapper}>
        <ScrollView contentContainerStyle={styles.scroll}>
          {/* {Array.from({ length: 30 }).map((_, i) => (
            <Text key={i}>Item {i + 1}</Text>
          ))} */}
          {/* modal */}
          <View style={styles.modal}>
            <View style={styles.modalWrapper}>
                <Text style={styles.modalText1}>value</Text>
                <Text style={styles.modalText2}>$575.22</Text>
            </View>
          </View>
          {/* Modal */}
          <TouchableOpacity style={styles.itemContainer}>
            <Image
              style={{ width: 50, height: 50, resizeMode: "contain" }}
              source={require("../assets/images/i8.png")}
            />
            <Text style={styles.text}>
                Property Document
            </Text>
          </TouchableOpacity>
           <TouchableOpacity
           onPress={()=>setOpen(!open)}
           style={styles.itemContainer}>
            <Text style={styles.text}>
                Value
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    // borderWidth:1,
    // borderColor:"red"
  },
  wrapper: {
    flex: 1,
    backgroundColor: white,
    // marginTop: 60,
    position: "relative",
  },
  scroll: {
    paddingTop: 60,
    height: 1000,
    flexGrow: 1,
  },

  itemContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"start",
    alignItems:"center",
    gap:20,
    paddingVertical:10,
    paddingHorizontal:20,
   
    margin:7,
    boxShadow: `0 1px 8px 0 rgba(0, 0, 0, 0.2)`,
    borderRadius:5
  },
  text:{
    fontSize:16,
    fontWeight:"600",
    color:black
  },

//   modal:{
modal:{
    position:"absolute",
    top:0,
    left:0,
    width:"100%",
    height:"100%",
    backgroundColor:"rgba(0,0,0,0.5)",
    zIndex:300,
},
modalWrapper:{
    width:"70%",
    height:80,
    backgroundColor:white,
    // margin:"auto",
    borderRadius:5,
    padding:20,
    marginTop:100,
    transform:[{translateX:50}],
    display:"flex",
    gap:5

},
modalText1:{
    textTransform:"capitalize"
},
modalText2:{
    fontSize:16,

}
});
export default Documents;
