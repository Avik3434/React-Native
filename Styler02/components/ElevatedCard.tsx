import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
    return (
        <View>
            <Text style={styles.headingText}>ElevatedCard</Text>
            <ScrollView 
            style={styles.container} 
            horizontal={true} 
            showsHorizontalScrollIndicator={false}>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>
                        Tap
                    </Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>
                        Me
                    </Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>
                        To
                    </Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>
                        Scroll
                    </Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>
                        and 
                    </Text>
                </View>
                <View style={[styles.card, styles.elevatedCard]}>
                    <Text>
                        Find😊
                    </Text>
                </View>
            </ScrollView>
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
    container: {
        flex: 1,
        flexDirection: 'row',
        margin: 8,
    },
    card: {
        width: 100,
        height: 100,
        borderRadius: 10,
        margin: 4,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    elevatedCard: {
        backgroundColor: '#ffffff',
        elevation: 4,
        shadowOffset: { width: 0, height: 2 },
    },
})   