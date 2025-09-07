// import React, { Component } from 'react'
// import { Text, StyleSheet, View } from 'react-native'

// export default class AnimationComponent extends Component {
//   render() {
//     return (
//       <View>
//         <Text> textInComponent </Text>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({})


import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

const AnimationComponent =()=> {
    return (
      <View style={{marginTop:100}}>
      <Animatable.Text animation="slideInDown" iterationCount={1} direction="alternate">Up and down you go</Animatable.Text>
      <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ textAlign: 'center' }}>❤️</Animatable.Text>
      </View>
    )
}

const styles = StyleSheet.create({})

export default AnimationComponent