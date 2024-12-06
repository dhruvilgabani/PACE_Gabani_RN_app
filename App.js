import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Profile Picture */}
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: 'https://media.licdn.com/dms/image/v2/D4E35AQHG1xILfP7z2A/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1731311539435?e=1734123600&v=beta&t=baJmQ1OdrWTqRpbHwiYdz6I5HMxvLvpnrc2XzGLnlrA' }}
            style={styles.profileImage}
          />
          <Text style={styles.name}>Dhruvil Gabani dio</Text>
          <Text style={styles.title}>Graphics Designer</Text>
        </View>

        {/* Contact Information */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Contact Information</Text>
          <Text style={styles.info}>📧 Email: princegabani@gmail.com</Text>
          <Text style={styles.info}>📱 Phone: +1 (431) 293 5155</Text>
        </View>

        {/* Interests */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Interests</Text>
          <Text style={styles.info}>💻 Designing</Text>
          <Text style={styles.info}>📖 Reading</Text>
          <Text style={styles.info}>✈️ Travel</Text>
        </View>

        {/* Professional Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Professional Skills</Text>
          <Text style={styles.info}>⚛️ React Native</Text>
          <Text style={styles.info}>📜 JavaScript</Text>
          <Text style={styles.info}>🎨 UI/UX Design</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ACD2ED', // Soft background color
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 40,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#0077b6', // Vibrant border
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#023e8a',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0077b6',
    marginTop: 5,
  },
  section: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: '700',
    color: '#03045e',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#90e0ef',
    paddingBottom: 5,
  },
  info: {
    fontSize: 18,
    color: '#023e8a',
    marginVertical: 5,
  },
});
