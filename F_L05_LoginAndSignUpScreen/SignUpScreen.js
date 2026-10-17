import { Text, View, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Divider from './Divider';

export default function SignUpScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.subtitle}>
            Create an account to get started.{'\n'}It only takes a minute.
          </Text>
        </View>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-facebook" size={20} color="#1877F2" />
            <Text style={styles.socialButtonText}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../assets/google-logo.webp')} style={styles.googleIcon}/>
            <Text style={styles.socialButtonText}>Google</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.dividerContainer}>
          <Divider />
          <Text style={styles.orText}>Or</Text>
          <Divider />
        </View>

        <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#777777" />

        <TextInput style={styles.input} placeholder="Email/Phone Number" placeholderTextColor="#777777" />

        <View style={styles.passwordContainer}>
          <TextInput style={styles.passwordInput} placeholder="Password" placeholderTextColor="#777777" secureTextEntry />
          <Ionicons name="eye-off-outline" size={20} color="#777777" />
        </View>

        <View style={styles.termsContainer}>
          <View style={styles.checkbox} />
          <Text style={styles.termsText}>
            I agree to the <Text style={styles.linkText}>Terms of Service</Text> and <Text style={styles.linkText}>Privacy Policy</Text>
          </Text>
        </View>

        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.createText}>Create Account</Text>
        </TouchableOpacity>

        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <TouchableOpacity style={styles.signInText}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signInText}>Sign Up</Text>
        </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  headerContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a365d',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  socialButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    padding: 12,
    marginHorizontal: 5,
    backgroundColor: '#f8fafc',
  },
  googleIcon: {
    width: 25,
    height: 25,
  },
  socialButtonText: {
    marginLeft: 8,
    fontWeight: '600',
    color: '#333',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  orText: {
    textAlign: 'center',
    color: '#888',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#f8fafc',
    marginBottom: 12,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    backgroundColor: '#f8fafc',
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 4,
    marginRight: 8,
    backgroundColor: '#f8fafc',
  },
  termsText: {
    fontSize: 12,
    color: '#64748b',
    flex: 1,
  },
  linkText: {
    color: '#2563eb',
  },
  createButton: {
    backgroundColor: '#2563eb',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  createText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  footerText: {
    color: '#666',
  },
  signInText: {
    color: '#2563eb',
    fontWeight: 'bold',
  },
});