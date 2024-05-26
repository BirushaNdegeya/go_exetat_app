import { View, Text, StyleSheet, ScrollView } from "react-native";


export default function Explore() {
   const { container, text } = styles;
   return (
      <View style={container}>
         <ScrollView>
            <Text style={text}>EXPLORE SCREEN</Text>
            <Text>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, alias asperiores molestias id officia recusandae enim ea excepturi nemo ullam perspiciatis eveniet, tempora saepe commodi sapiente! Harum voluptatibus cum animi?
               Adipisci minima temporibus, quaerat commodi obcaecati explicabo totam hic corrupti minus officiis, similique neque magni a ipsam maxime ea debitis vero reiciendis nemo amet asperiores? Assumenda optio aperiam temporibus id?
               Quos eius ullam libero quibusdam delectus asperiores quae provident fugit placeat, maxime labore quisquam ex eligendi, esse aspernatur temporibus aliquam numquam nulla voluptatibus aliquid autem perferendis. Voluptates minus esse itaque!
               Harum inventore consequatur quisquam accusamus maxime eveniet nesciunt libero nihil iusto exercitationem illo fugit obcaecati odio deleniti atque, iure et voluptate quae eos impedit eum ullam corrupti laborum? Sunt, consequatur.
               Veritatis repellat minima cumque consectetur repudiandae, necessitatibus officia quis. Sint aliquid optio, dolor inventore accusantium et porro quibusdam neque hic adipisci amet rerum! Maxime porro veniam, fugit reiciendis possimus voluptatibus!
            </Text>
         </ScrollView>
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