import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import Counter from './components/Counter';
import DisplayAnImage from './components/DisplayImage';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Aplicativo</Text>
      <Text style={styles.subtitulo}>Destinado a ###</Text>
      <Counter/>
      <DisplayAnImage/>
      <StatusBar style="auto" />
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
  titulo: {
    color: "lightblue",
    fontSize: "25px",
    fontWeight: 'bold',
    letterSpacing: "3px",
    fontFamily: "monospace",
    backgroundColor: "#434893",
    padding: "5px",
    borderRadius: "3px",
    boxShadow: "0 0 20px purple "
  },
  subtitulo: {
    marginTop: "20px",
    color: "gray",
  }
});
