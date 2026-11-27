import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView, withSafeAreaInsets } from 'react-native-safe-area-context'
import React from 'react'
import FlatCard from './components/FlatCard'
import ElevatedCard from './components/ElevatedCard'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#242424' }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatCard />
        <ElevatedCard />
        <FancyCard />
        <ActionCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App