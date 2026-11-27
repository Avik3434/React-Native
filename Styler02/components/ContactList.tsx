import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

export default function ContactList() {

  const contacts = [
    {
      uid: 1,
      name: 'Avik Mukherjee',
      status: 'A computer science student',
      imageUrl: 'https://avatars.githubusercontent.com/u/215711275?v=4'
    },
    {
      uid: 2,
      name: 'Rahul Sharma',
      status: 'Frontend developer',
      imageUrl: 'https://i.pravatar.cc/150?img=11'
    },
    {
      uid: 3,
      name: 'Arjun Mehta',
      status: 'Photography enthusiast',
      imageUrl: 'https://i.pravatar.cc/150?img=12'
    },
    {
      uid: 4,
      name: 'Sneha Roy',
      status: 'UI/UX designer',
      imageUrl: 'https://i.pravatar.cc/150?img=47'
    },
    {
      uid: 5,
      name: 'Rohan Das',
      status: 'Learning React Native',
      imageUrl: 'https://i.pravatar.cc/150?img=13'
    },
    {
      uid: 6,
      name: 'Priya Kapoor',
      status: 'Digital artist',
      imageUrl: 'https://i.pravatar.cc/150?img=44'
    },
    {
      uid: 7,
      name: 'Aditya Verma',
      status: 'Full-stack developer',
      imageUrl: 'https://i.pravatar.cc/150?img=14'
    },
    {
      uid: 8,
      name: 'Ananya Sen',
      status: 'Coffee lover and traveler',
      imageUrl: 'https://i.pravatar.cc/150?img=45'
    },
    {
      uid: 9,
      name: 'Karan Malhotra',
      status: 'Exploring new technologies',
      imageUrl: 'https://i.pravatar.cc/150?img=15'
    },
    {
      uid: 10,
      name: 'Ishita Banerjee',
      status: 'Computer science enthusiast',
      imageUrl: 'https://i.pravatar.cc/150?img=48'
    }
  ]

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headingText}>Contacts</Text>
          <Text style={styles.subHeading}>
            Stay connected with your people
          </Text>
        </View>

        <View style={styles.countBadge}>
          <Text style={styles.countText}>{contacts.length}</Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      >
        {contacts.map(({ uid, name, status, imageUrl }) => (
          <View key={uid} style={styles.userCard}>
            <Image
              style={styles.userImage}
              source={{ uri: imageUrl }}
            />

            <View style={styles.userInfo}>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>

            {/* <View style={styles.arrowContainer}>
              <Text style={styles.arrow}>›</Text>
            </View> */}
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242424',
    paddingHorizontal: 16,
    paddingTop: 18,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 22,
    paddingHorizontal: 4,
  },
  headingText: {
    fontSize: 25,
    color: '#F8FAFC',
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  subHeading: {
    color: '#999999',
    fontSize: 13,
    marginTop: 5,
  },
  countBadge: {
    backgroundColor: '#263D5B',
    height: 38,
    width: 38,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countText: {
    color: '#8DBBFF',
    fontSize: 15,
    fontWeight: '700',
  },
  listContainer: {
    paddingBottom: 25,
    gap: 11,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#303030',
    padding: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#414141',
    minHeight: 82,
  },
  userImage: {
    height: 54,
    width: 54,
    borderRadius: 27,
    borderWidth: 2,
    borderColor: '#5492aa',
  },
  userInfo: {
    flex: 1,
    marginLeft: 13,
    justifyContent: 'center',
  },
  userName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#F1F5F9',
  },
  userStatus: {
    fontSize: 12,
    color: '#A1A1AA',
    marginTop: 5,
  },
  arrowContainer: {
    height: 30,
    width: 30,
    borderRadius: 10,
    backgroundColor: '#3B3B3B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    color: '#8DBBFF',
    fontSize: 24,
    marginTop: -3,
  },
})