import { useRouter } from 'expo-router';
import { Button, Image, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-web';

const  notfound =()=> {

  const router= useRouter();

  return (
    <SafeAreaView style={{flex:1, justifyContent:"center", alignItems:"center"}}  >

      <View style={styles.container}>
        <Image
        style={styles.img}
        source={{uri:"https://res.cloudinary.com/acekyd/image/upload/v1534896949/404-page_ipop2d.png"}} />
        <Button title='Go to Home'  onPress={()=>router.push("/")}/>
      </View>
        </SafeAreaView>
    )

  }
  
  const styles = StyleSheet.create({
    container:{
      flex:0.8,
      justifyContent:"center",
      alignItems:"center",
    },
    
    img:{
      width:300,
      height:300
    }
  })
  export default notfound;

