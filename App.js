import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, Image, ScrollView, TextInput } from 'react-native';


function MyButton(){
  return(
    <View>
      <Button
        title="Right button"
        onPress={() => Alert.alert('Right button pressed')}
      />
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>hello react</Text>
      <StatusBar style="auto" />
      <MyButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
