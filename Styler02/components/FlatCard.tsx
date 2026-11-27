import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCard</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.RedCard]}>
          <Text style={styles.cardText}>Red</Text>
        </View>
        <View style={[styles.card, styles.GreenCard]}>
          <Text style={styles.cardText}>Green</Text>
        </View>
        <View style={[styles.card, styles.BlueCard]}>
          <Text style={styles.cardText}>Blue</Text>
        </View>

      </View>
    </View>
  )
}

// Square card
const styles = StyleSheet.create(
  {
    headingText: {
      fontSize: 20,
      color: '#ffffff',
      fontWeight: 'bold',
      paddingHorizontal: 10,
    },
    container: {
      flex: 1,
      flexDirection: 'row',
      padding: 8
    },
    card: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      width: 100,
      height: 100,
      borderRadius: 10,
      margin: 4,
    },
    cardText: {
      color: '#000000',
      fontSize: 18,
      fontWeight: 'bold',
    },
    RedCard: {
      backgroundColor: '#ffa1a1',
    },
    GreenCard: {
      backgroundColor: '#92ed92',
    },
    BlueCard: {
      backgroundColor: '#9f9ffa',
    },
  })