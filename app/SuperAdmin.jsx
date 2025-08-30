
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function SuperAdmin () {
  
  const adminList = [
    { id: '1', name: 'Kawsar Firoz', role: 'Super Admin', avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: '2', name: 'Moniruzzaman', role: 'Admin', avatar: 'https://i.pravatar.cc/150?img=2' },
    { id: '3', name: 'Rahim Uddin', role: 'Moderator', avatar: 'https://i.pravatar.cc/150?img=3' },
    { id: '4', name: 'Karim Hasan', role: 'Admin', avatar: 'https://i.pravatar.cc/150?img=4' },
  ]

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
      <TouchableOpacity style={styles.menuButton} onPress={() => alert(`Menu for ${item.name}`)}>
        <Text style={styles.menuText}>⋮</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Admin List</Text>
      <FlatList
        data={adminList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center'
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: '#0000',
    borderRadius: 10,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 25,
    marginRight: 15
  },
  textContainer: {
    flex: 1, 
  },
  name: {
    fontSize: 18,
    fontWeight: '600'
  },
  role: {
    fontSize: 13,
    color: 'gray'
  },
  menuButton: {
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  menuText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333'
  }
})
