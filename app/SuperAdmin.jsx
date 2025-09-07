import { useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { shadowColor, white } from "../constant/colors";

export default function SuperAdmin() {
  const adminList = [
    {
      id: "1",
      name: "Kawsar Firoz",
      role: "Super Admin",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: "2",
      name: "Moniruzzaman",
      role: "Admin",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: "3",
      name: "Rahim Uddin",
      role: "Moderator",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: "4",
      name: "Karim Hasan",
      role: "Admin",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
  ];

  const [show, setShow] = useState(false);
  const [data, setData] = useState({});

  const handleData = (item) => {
    setData(item);
    setShow(!show);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {/* Avatar Left===================== */}
      <Image source={{ uri: item.avatar }} style={styles.avatar} />

      {/* Text Middle========== */}
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.role}>{item.role}</Text>
      </View>

      {/* 3-dot Menu Right=============== */}
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => handleData(item)}
      >
        <Text style={styles.menuText}>⋮</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Admin List</Text>
      {/* =========Modal */}
      {show && (
        <View style={styles.modal}>
          <View style={styles.modalWrapper}>
            <Image source={{ uri: data?.avatar }} style={styles.modalAvatar} />
            <Text style={styles.name}>{data?.name}</Text>
            <Text style={styles.role}>{data?.role}</Text>
            <TouchableOpacity 
            style={styles.closeBtn}
            onPress={()=>setShow(!show)}>
              close
            </TouchableOpacity>
          </View>
        </View>
      )}
      {/* modal=========== */}
      <FlatList
        data={adminList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white,
    position: "relative",
  },
  modal: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: white,
    left: 0,
    top: 0,
    backgroundColor: shadowColor,
    display:"flex",
    justifyContent:"center",
    flexDirection:"row",
    zIndex:200
  },
  modalWrapper:{
    backgroundColor:white,
    width:300,
    height:"max-content",
    marginTop:100,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    gap:5,
    borderRadius:10,
    padding:20
  },
  modalAvatar:{
    width:150,
    height:100,
    borderRadius:10
  },
  closeBtn:{
    width:"100%",
    backgroundColor:"crimson",
    padding:5,
    borderRadius:3,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    fontWeight:600,
    fontSize:20, 
    color:white,
    
    
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    backgroundColor: "#0000",
    borderRadius: 10,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 25,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
  },
  role: {
    fontSize: 13,
    color: "gray",
  },
  menuButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  menuText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
});
