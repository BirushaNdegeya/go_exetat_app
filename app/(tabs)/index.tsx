import { View, Text, StyleSheet, ScrollView } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';


export default function Home () {
   const { container, text } = styles;
   return (
      <ScrollView style={container}>
         <Text style={text}>EXPLORE SCREEN</Text>
         <Ionicons />
         <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint velit odit laudantium. Natus cumque numquam esse itaque provident voluptates? Voluptas omnis fugiat fuga necessitatibus cumque veritatis, perferendis adipisci nesciunt.
            Quaerat aperiam voluptas quidem ea ratione sequi cumque expedita accusamus eaque nobis delectus adipisci excepturi, harum mollitia asperiores. Veritatis reiciendis eos nisi fuga aspernatur. Iusto qui dolores exercitationem consectetur voluptate.
            Quidem velit harum sapiente, eveniet impedit iste corrupti voluptatem doloremque ducimus architecto, eius consequuntur facere consectetur sint esse, deserunt veritatis accusantium at. Voluptate deserunt eos rerum debitis non cumque suscipit!
            Atque sed necessitatibus ducimus dignissimos recusandae nam modi earum eaque, tenetur, at, reprehenderit nesciunt. Laborum vel quisquam ducimus quam, dolore amet provident impedit nesciunt, quis ea dolorem nemo corrupti nobis.
            Possimus soluta numquam recusandae dignissimos nostrum enim illo, quae, nemo velit consequuntur alias consectetur assumenda, amet nihil reiciendis laudantium qui eveniet dicta ad aliquam. Necessitatibus odio neque voluptatem dolorem sed.
            Amet incidunt voluptatem rem temporibus libero minus excepturi ut sunt nam, consequatur id. Ducimus possimus necessitatibus qui culpa fugiat, quisquam illum repudiandae nobis consequatur, officia obcaecati beatae minima fugit ut!
            Aut ducimus fugiat id rerum sunt dolorem, molestiae architecto inventore voluptas alias sapiente doloribus expedita tempora dolores voluptatibus dignissimos, nemo reprehenderit magnam accusantium cum? Iusto suscipit veniam quo consequatur totam!
            Id ab laborum error reiciendis placeat quisquam iusto vel asperiores, quaerat ad. Porro quam aperiam qui expedita. Consequatur sunt hic, eos molestias asperiores qui repellendus neque placeat incidunt, illum optio!
            Ipsum voluptatum illo ipsa iste, nisi facilis corporis quia, animi, reprehenderit sunt eveniet numquam culpa nam est tenetur cum ab ut reiciendis doloremque perferendis laboriosam ratione at voluptatem inventore. Quasi?
            Facere ratione pariatur vero officiis laboriosam dolorem saepe tenetur quisquam temporibus culpa. Voluptas minima necessitatibus nobis? Nisi, modi debitis quisquam nemo quae reiciendis odit maxime, molestiae voluptas fuga fugiat. Iste!
            Nisi natus fuga animi, eaque veritatis modi aperiam quod accusamus, culpa, corporis laborum similique mollitia quas facere rerum dolorum 
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