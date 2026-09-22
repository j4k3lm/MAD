import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function LoginScreen() {
  const insets = useSafeAreaInsets();
  const [remember, setRemember] = useState(false);

  return (
    <LinearGradient colors={['#82BBF7', '#579BEA', '#3783D8']} style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.form}>
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.label}>Email</Text>

        <View style={styles.inputBox}>
          <Ionicons name="mail-outline" size={28} color="white" />
          <TextInput style={styles.input} placeholder="Enter your Email" placeholderTextColor="#DCEBFF"/>
        </View>

        <Text style={styles.label}>Password</Text>

        <View style={styles.inputBox}>
          <Ionicons name="key-outline" size={28} color="white" />

          <TextInput
            style={styles.input}placeholder="********" placeholderTextColor="white" secureTextEntry/>
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={styles.rememberContainer}>
          <TouchableOpacity onPress={() => setRemember(!remember)}>
            <View style={styles.checkbox}> {remember ? <Text style={styles.check}>✓</Text> : null} </View>
          </TouchableOpacity>

          <Text style={styles.rememberText}>Remember me</Text>
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

        <Text style={styles.or}>- OR -</Text>

        <Text style={styles.signText}>Sign in with</Text>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="facebook" size={32} color="#1877F2" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require('../assets/google.png')} style={styles.googleIcon}/>
          </TouchableOpacity>
        </View>

        <View style={styles.signupContainer}>
          <Text style={styles.account}>Don't have an Account ?</Text>

          <TouchableOpacity>
            <Text style={styles.signup}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 35,
    justifyContent: 'center',
  },

  form: {
    width: '100%',
    paddingBottom: 25,
  },

  title:{
    fontSize:36,
    fontWeight:"bold",
    color:"white",
    textAlign:"center",
    marginBottom:65
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },

  inputBox: {
    height: 85,
    backgroundColor: 'rgba(255,255,255,0.20)',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 25,
  },

  input: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
    color: 'white',
  },

  forgot: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'right',
    marginBottom: 15,
  },

  rememberContainer: {
    flexDirection:'row',
    alignItems:'center',
    marginTop:0,
    marginBottom:20,
  },

  checkbox: {
    width: 25,
    height: 25,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  check: {
    color: '#3783D8',
    fontSize: 20,
    fontWeight: 'bold',
  },

  rememberText: {
    color: 'white',
    fontWeight: 'bold',
  },

  loginButton: {
    height: 75,
    backgroundColor: 'white',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#397FD0',
  },

  or: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 30,
  },

  signText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop:20,
    marginBottom:10,
  },

  socialButton: {
    width: 70,
    height: 70,
    backgroundColor: 'white',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
  },

  googleIcon: {
    width: 40,
    height: 40,
  },

  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 35,
  },

  account: {
    color: 'white',
    fontSize: 16,
  },

  signup: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});