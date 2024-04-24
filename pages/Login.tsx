import { View, Text, StyleSheet } from "react-native";

const Login = () => {
   const {
      wrapper
   } = styles;
   return (
      <View style={wrapper}>
         <Text>Login Screen</Text>
      </View>
   );
};

const styles = StyleSheet.create({
   wrapper: {
      flex: 1
   }
})

export default Login;