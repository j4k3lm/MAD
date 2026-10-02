import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function SignUpScreen() {
  return (
    <LinearGradient colors={['#82BBF7', '#579BEA', '#3783D8']} style={styles.gradientBackground}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.mainContent}>
            <Text style={styles.title}>Create Account</Text>

            <Text style={styles.subtitle}>
              Please fill in your details to get started.
            </Text>

            <Text style={styles.label}>Full Name</Text>
            <TextInput style={styles.input} placeholder="Enter your full name" placeholderTextColor="#777777"/>

            <Text style={styles.label}>Email Address</Text>
            <TextInput style={styles.input} placeholder="Enter your email" placeholderTextColor="#777777"/>

            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput style={styles.passwordInput} placeholder="Create a password"                        
              placeholderTextColor="#777777" secureTextEntry/> 

              <Ionicons name="eye-outline" size={22} color="#63869E" />
           </View>

            <Text style={styles.label}>Confirm Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput} placeholder="Confirm your password" placeholderTextColor="#777777" 
                secureTextEntry/>

              <Ionicons name="eye-outline" size={22} color="#63869E"/>
            </View>

            <TouchableOpacity style={styles.signUpButton}>
              <Text style={styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>

            <Text style={styles.terms}> By signing up, you agree to our/>
              <Text style={styles.termsLink}> Terms of Service.</Text>
            </Text>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Already a member?</Text>

            <TouchableOpacity>
              <Text style={styles.loginText}> Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },

  safeArea: {
    flex: 1,
    backgroundColor: 'transparent',
  },

  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 10,
    paddingBottom: 15,
  },

  mainContent: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    marginBottom: 25,
  },

  label: {
    fontSize: 14,
    color: 'white',
    marginBottom: 5,
  },

  input: {
    height: 42,
    backgroundColor: '#EAF5FF',
    borderRadius: 10,
    paddingHorizontal: 12,
    fontSize: 14,
    marginBottom: 12,
  },

  passwordContainer: {
    height: 42,
    backgroundColor: '#EAF5FF',
    borderRadius: 10,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  passwordInput: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 0,
  },

  signUpButton: {
    height: 45,
    backgroundColor: 'white',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },

  signUpText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#63869E',
  },

  terms: {
    fontSize: 11,
    color: 'white',
    textAlign: 'center',
    marginTop: 15,
  },

  termsLink: {
    textDecorationLine: 'underline',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 5,
  },

  footerText: {
    fontSize: 12,
    color: 'white',
  },

  loginText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
});