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
                <Text style={styles.loginText1}>Login to your account</Text>
                <Text style={styles.loginText2}>Please enter your email & password to continue.</Text>
            </View>
            {/* ============form */}
            <View style={styles.form}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={styles.label}>Password</Text>
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
                    <Text style={styles.link}>Go to Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, styles.btnSecondary]}>
                    <Text style={styles.q_text}>Instant Quote</Text>
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

    },
    img: {
        width: "80px",
        height: "40px",
    },
    form: {
        marginBottom: 10,
        width: "90%",
        display:"flex",
        // backgroundColor:"red"
    },
    label: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 5,
    },
    input: {
        borderColor: "rgba(0,14,15,0.1)",
        padding: 1,
        marginBottom: 15,
        backgroundColor: "#fff",
        borderTopWidth: "0px",
        borderRightWidth: "0px",
        borderBottomWidth: "1px",
        borderLeftWidth: "1px",
        padding: 7

    },
    password_container: {
        position: "relative",
        width: "100%",
    },
    passwordInput: {
        borderColor: "rgba(0,14,15,0.1)",
        padding: 1,
        marginBottom: 15,
        backgroundColor: "#fff",
        borderTopWidth: "0px",
        borderRightWidth: "0px",
        borderBottomWidth: "1px",
        borderLeftWidth: "1px",
        padding: 7,
        width: "100%",

    },
    vissible_img: {
        position: "absolute",
        right: 10,
        top: 10,
        width: 16,
        height: 16
    },
    loginBtn: {
        backgroundColor: "black",
        padding: 5,
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
        backgroundColor:"#172B4D0F",
        width:"90%",
        textAlign:"center",
        marginHorizontal:"auto",
        marginVertical:"5px",
        padding:5
    }
});


export default Login
