
import React from 'react';
import { View, Text, Pressable, StatusBar, TextInput } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function App() {

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="dark-content"

      />
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1, padding: 20 }}>
          <Text style={{ color: 'black', fontSize: 20, alignSelf: 'center', marginTop: 10, fontWeight: 'bold' }}>
            Hello World
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
