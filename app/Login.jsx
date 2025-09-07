import { useState } from 'react';
import {
    Image, Linking,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { maincolor, whiteSmoke } from '../constant/colors';
import * as Animatable from 'react-native-animatable';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <SafeAreaView style={styles.container}>

            {/* top container */}
            <View style={styles.topContainer}>
                <Text style={styles.welcomeText}>welcome to </Text>
                <Image
                    style={styles.img}
                    // source={require('../../../../assets/images/icon2.png')}
                    source={require('../assets/images/icon2.png')}

                />
                <Text>MVV portal</Text>
            </View>
            {/* ==========second container  */}
            <View style={styles.secondContainer}>
                <Animatable.Text  animation="zoomInUp"   style={styles.loginText1}>Login to your account</Animatable.Text>
                <Animatable.Text  animation="zoomInUp"   style={styles.loginText2}>Please enter your email & password to continue.</Animatable.Text>
            </View>
            {/* ============form */}
            <View style={styles.form}>
                {/* Animatable.Text  animation="zoomInUp" */}
                <Animatable.Text  animation="zoomInUp" style={styles.label}>Email</Animatable.Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={setEmail}
                />

                <Animatable.Text  animation="zoomInUp"  style={styles.label}>Password</Animatable.Text >
                <Text style={styles.password_container} >
                    <TextInput
                        style={styles.passwordInput}
                        placeholder="Enter your password"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                    <Image
                        style={styles.vissible_img}
                        source={require('../assets/images/eye.png')}
                    />
                </Text>
                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
            </View>

            {/* ====================== bottom  */}
            <View style={styles.buttons}>
                <TouchableOpacity
                style={styles.link}
                 onPress={()=>{ Linking.openURL("https://www.google.com")}}>
                    <Animatable.Text animation="zoomInUp" style={styles.link}>Go to Google</Animatable.Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, styles.btnSecondary]}>
                    <Animatable.Text animation="zoomInUp" style={styles.q_text}>Instant Quote</Animatable.Text>
                </TouchableOpacity>
            </View>
            {/* ====================== */}

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: "column",
        backgroundColor: "#ffff",
        gap:10
     
        

    },
    topContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10
    },
    secondContainer: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 10,
        width: "90%",
        paddingVertical: 10,
        marginTop: 20
    },
    loginText1: {
        fontSize: 22,
    },
    loginText2: {
        fontSize: 13
    },
    welcomeText: {
        fontSize: 20,
        fontWeight: 600,
        textTransform:"capitalize",
        marginBottom:10

    },
    img: {
        width: "80px",
        height: "40px",
        tintColor:maincolor
    },
    form: {
        marginBottom: 10,
        width: "90%",
        display:"flex",
    },
    label: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 5,
    },
    input: {
        borderColor: "rgba(0,14,15,0.1)",
        marginBottom: 25,
        backgroundColor: "#fff",
        borderTopWidth: "0px",
        borderRightWidth: "0px",
        borderBottomWidth: "1px",
        borderLeftWidth: "1px",
        padding: 10

    },
    password_container: {
        position: "relative",
        width: "100%",
    },
    passwordInput: {
        borderColor: "rgba(0,14,15,0.1)",
        marginBottom: 20,
        backgroundColor: "#fff",
        borderTopWidth: "0px",
        borderRightWidth: "0px",
        borderBottomWidth: "1px",
        borderLeftWidth: "1px",
        padding: 10,
        width: "100%",
        marginBottom:25,
    

    },
    vissible_img: {
        position: "absolute",
        right: 10,
        top: 10,
        width: 16,
        height: 16
    },
    loginBtn: {
        backgroundColor: maincolor,
        padding: 10,
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    buttons: {
        width: "100%",
    },
    link: {
        marginHorizontal:"auto",
        width: "90%",
        textAlign:"center",
        marginVertical:10,
      
    },
    btnSecondary: {
    },
    btnText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    q_text:{
        backgroundColor:whiteSmoke,
        width:"90%",
        textAlign:"center",
        marginHorizontal:"auto",
        marginVertical:"5px",
        padding:10
    }
});


export default Login
