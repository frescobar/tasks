import { Button, StyleSheet, View } from 'react-native';

export default function HomeScreen({ navigation}: { navigation: any}) {
 

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button title="Tasks" onPress={() => navigation.navigate('Tasks')} />
        <Button title="List" onPress={() => navigation.navigate('List')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 50
  },
  buttonsContainer: {
    justifyContent: 'space-around',
    gap: 10,
  },
});
