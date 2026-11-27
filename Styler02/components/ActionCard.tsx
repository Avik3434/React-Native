import { StyleSheet, Text, View, Linking, Image , TouchableOpacity} from 'react-native'
import React from 'react'

export default function ActionCard() {
  function openWebsite(websiteUrl: string) {
    Linking.openURL(websiteUrl).catch((err) => console.error('Failed to open URL:', err));
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.container}>
          <Text style={styles.headerText}>
            What's new in JavaScript 21 - ES12?
          </Text>
        </View>
        <Image
          style={styles.image}
          source={{
            uri: 'https://sundakreatif.com/wp-content/uploads/2022/05/JavaScript-ES12-Features.webp'
          }}
        />
        <View style={styles.cardBody}>
          <Text numberOfLines={2}>
            ES12, also known as ECMAScript 2021, introduced several useful features to JavaScript, making coding simpler and more efficient. Some major additions include String.replaceAll(), Promise.any(), and logical assignment operators (||=, &&=, ??=). It also introduced numeric separators for better readability and WeakRef for memory management. These improvements make JavaScript more convenient and powerful for developers.
          </Text>
        </View>
        <View style={styles.footerContent}>
          <TouchableOpacity
          onPress={(onPress) => openWebsite('https://262.ecma-international.org/12.0/')}
          >
            <Text style={styles.linkText}>
              Read more...
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={(onPress) => openWebsite('https://github.com/Avik3434')}
          >
            <Text style={[styles.linkText, styles.followmebtn]}>
              Follow me...
            </Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
  container: {
    padding: 5
  },

  card: {
    margin: 12,
  },
  cardBody: {
    margin: 12,
  },

  elevatedCard: {
    backgroundColor: '#dee1f2',
    borderRadius: 12,

  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 10,
    color: '#001836',
  },
  footerContent: {
    marginLeft: 10,
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  linkText: {
    color: '#032c65',
  },
  followmebtn: {
    paddingRight: 12
  }
})