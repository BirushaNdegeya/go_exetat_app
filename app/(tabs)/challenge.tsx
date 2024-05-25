import { View, Text, StyleSheet, ScrollView } from "react-native";


export default function Challenge() {
   const { container, text } = styles;
   return (
      <ScrollView style={container}>
         <Text style={text}>EXPLORE SCREEN</Text>
         <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non error omnis, reiciendis, deleniti ex recusandae accusantium, illo natus atque repellat molestiae expedita ipsum. Voluptatibus quia sit iste, assumenda architecto iusto!
            In asperiores error sapiente nisi ab nemo! Culpa veritatis tempora rerum ullam doloribus ratione vero reiciendis cupiditate vitae minus odit, accusamus atque nemo aliquid, dicta dolores illo dolorum iure? Doloremque.
            Nisi, suscipit itaque excepturi esse temporibus deleniti incidunt nesciunt veniam, maxime amet vero odio ea quas tempore facere placeat libero reiciendis quam, voluptatibus ad? Quibusdam, debitis voluptates. Aperiam, sunt tenetur.
            Commodi aut reiciendis consectetur eveniet a asperiores eos omnis voluptatem. Harum ex optio vitae obcaecati odio fugit eaque, asperiores accusantium eos repellat sunt sit fuga temporibus corporis facere ipsa laudantium.
            Deleniti quasi itaque sint ullam in velit culpa eaque. Quaerat laudantium tenetur molestias molestiae quasi assumenda mollitia in eius incidunt! Necessitatibus quis qui quos maiores vel pariatur excepturi optio ratione.
            Saepe quam tenetur a odit, magnam rem atque inventore tempore alias in placeat dignissimos! Quasi impedit sunt aut tenetur ipsum iusto vero quos delectus quis! Enim inventore a illo molestiae.
            Non, nulla delectus? Laudantium natus, odit possimus consequatur assumenda fugiat, dolores inventore explicabo esse similique nostrum est ad saepe sequi sint a velit, eum numquam! Itaque totam nam eaque voluptas.
         </Text>
      </ScrollView>
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