import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";


export default function Home () {
   const { container, text } = styles;
   return (
      <View style={container}>
         <Text style={text}>HOME SCREEN</Text>
         <Link href={'/'}>Welcome Screen</Link>
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
      fontSize: 24,
   }
})