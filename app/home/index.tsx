import { View, Text, StyleSheet } from "react-native";


export default function Settings () {
   const { container, text } = styles;
   return (
      <View style={container}>
         <Text style={text}>EXPLORE SCREEN</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
   },
   text: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
   }
})