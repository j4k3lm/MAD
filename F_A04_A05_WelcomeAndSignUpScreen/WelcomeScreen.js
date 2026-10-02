import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function WelcomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={['#82BBF7', '#579BEA', '#3783D8']} style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>BrandSync</Text>

        <View style={styles.textGroup}>
          <Text style={styles.welcomeText}>Welcome!</Text>
          <Text style={styles.subText}>Let's get started.</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>CREATE ACCOUNT</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.signupContainer}>
        <Text style={styles.account}>Already have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.signup}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingBottom: 30,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 50,
  },
  textGroup: {
    alignItems: 'center',
    marginBottom: 60,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  buttonContainer: {
    width: '100%',
    gap: 16,
  },
  primaryButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3783D8',
  },
  secondaryButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3783D8',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
    width: '100%',
  },
  account: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  signup: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
