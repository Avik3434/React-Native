
import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Trending places</Text>

      <View style={styles.card}>

        <Image

          source={{
            uri: 'https://www.travelandleisure.com/thmb/JnzsGGLOaWD626-DtH-m14byvFE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-oeschinensee-PLACESSWITZERLAND1023-e079f30e7792483aa5d7865fad1369b3.jpg',
          }}

          style={styles.image}
        />

        <View style={styles.cardBody}>
          <Text style={styles.cardLabel}>SWITZERLAND · EUROPE</Text>

          <Text style={styles.cardTitle}>
            Switzerland Hills
          </Text>

          <Text style={styles.cardDescription}>
            Experience the breathtaking beauty of Switzerland's
            mountain ranges and crystal-clear alpine lakes.
          </Text>

          <View style={styles.divider} />

          <Text style={styles.cardFooter}>
            Explore destination
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flex: 1,
  },
  headingText: {
    fontSize: 22,
    color: '#F8FAFC',
    fontWeight: '700',
    marginBottom: 18,
  },
  card: {
    backgroundColor: '#eaf1fc',
    borderRadius: 18,
    overflow: 'hidden',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  cardBody: {
    padding: 18,
  },
  cardLabel: {
    color: '#002b60',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.2,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 21,
    color: '#011830',
    fontWeight: '700',
    marginBottom: 8,
  },
  cardDescription: {
    color: '#002f67',
    fontSize: 13,
    lineHeight: 21,
  },
  divider: {
    height: 1,
    backgroundColor: '#334155',
    marginVertical: 16,
  },
  cardFooter: {
    color: '#002b60',
    fontSize: 13,
    fontWeight: '600',
  },
})
