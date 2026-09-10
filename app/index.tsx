import React from 'react';
import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const galleryImages = [
  require('../assets/images/look1.png'),
  require('../assets/images/look2.png'),
  require('../assets/images/look3.png'),
  require('../assets/images/look4.png'),
  require('../assets/images/look5.png'),
  require('../assets/images/look6.png'),
  require('../assets/images/look7.png'),
  require('../assets/images/look8.png'),
  require('../assets/images/look9.png'),
];

export default function HomeScreen() {
  const showAlert = () => {
    Alert.alert('Alert', 'Alert Button pressed');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.backButton}>‹</Text>

          <View style={styles.headerTitleArea}>
            <Text style={styles.headerTitle}>Group Profile</Text>
            <Text style={styles.username}>ootd_everyday</Text>
          </View>

          <Text style={styles.addButton}>⊞</Text>
        </View>

        <View style={styles.profileSection}>
          <View style={styles.profileCircle}>
            <Text style={styles.profileText}>OO</Text>
            <Text style={styles.profileText}>TD</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statNumber}>53</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Members</Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statNumber}>1</Text>
            <Text style={styles.statLabel}>Admins</Text>
          </View>
        </View>

        <View style={styles.bioSection}>
          <Text style={styles.profileName}>OOTD Everyday</Text>
          <Text style={styles.bioText}>Fit check! 👕</Text>
          <Text style={styles.bioText}>You know we&apos;ll hype you up.</Text>
        </View>

        <Pressable style={styles.memberButton}>
          <Text style={styles.memberButtonText}>Member ⌄</Text>
        </Pressable>

        <View style={styles.gallery}>
          {galleryImages.map((image, index) => (
            <Image
              key={index}
              source={image}
              style={styles.galleryImage}
              resizeMode="cover"
            />
          ))}
        </View>

        <View style={styles.bottomNavigation}>
          <Text style={styles.navIcon}>⌂</Text>
          <Text style={styles.navIcon}>⌕</Text>
          <Text style={styles.navIcon}>▣</Text>
          <Text style={styles.navIcon}>♡</Text>
          <Text style={styles.navIcon}>●</Text>
        </View>

        <Pressable style={styles.alertButton} onPress={showAlert}>
          <Text style={styles.alertButtonText}>Alert</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  container: {
    paddingBottom: 30,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingTop: 12,
    paddingBottom: 12,
  },

  backButton: {
    fontSize: 36,
    fontWeight: '300',
  },

  headerTitleArea: {
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 17,
    fontWeight: '700',
  },

  username: {
    fontSize: 12,
    color: '#777777',
    marginTop: 2,
  },

  addButton: {
    fontSize: 28,
    fontWeight: '500',
  },

  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 8,
  },

  profileCircle: {
    width: 78,
    height: 78,
    borderRadius: 39,
    backgroundColor: '#2d8fbb',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 25,
  },

  profileText: {
    color: '#ffffff',
    fontSize: 19,
    fontWeight: '500',
    lineHeight: 20,
  },

  stat: {
    flex: 1,
    alignItems: 'center',
  },

  statNumber: {
    fontSize: 17,
    fontWeight: '700',
  },

  statLabel: {
    marginTop: 3,
    fontSize: 12,
    color: '#333333',
  },

  bioSection: {
    paddingHorizontal: 20,
    marginTop: 14,
  },

  profileName: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 4,
  },

  bioText: {
    fontSize: 13,
    lineHeight: 18,
  },

  memberButton: {
    marginHorizontal: 20,
    marginTop: 14,
    height: 34,
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  memberButtonText: {
    fontSize: 13,
    fontWeight: '600',
  },

  gallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 14,
  },

  galleryImage: {
    width: '33.333%',
    aspectRatio: 1,
    borderWidth: 0.5,
    borderColor: '#ffffff',
  },

  bottomNavigation: {
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
    marginTop: 1,
  },

  navIcon: {
    fontSize: 25,
    color: '#111111',
  },

  alertButton: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: '#3478f6',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },

  alertButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
});