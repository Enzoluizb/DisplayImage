import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    display: 1,
    alignItems: "center",
    flexDirection: "column",
  },
  logo: {
    width: 44,
    height: 44,
  },
  nodelogo: {
    width: 55,
    height: 55,
  },
  jslogo: {
    width: 66,
    height: 66,
  }
});

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/loguinho.png')}
      />
      <Image
        style={styles.nodelogo}
        source={require('../assets/nodejs.png')}
      />
      <Image
        style={styles.jslogo}
        source={require('../assets/jsicon.png')}
      />
    </View>
    // comentário
  );
}

export default DisplayAnImage;

// const array = [];
// const objeto = {};
// const inteiro = 1;
// const string = "string";