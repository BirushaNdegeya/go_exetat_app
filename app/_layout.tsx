import { Redirect, Stack, Tabs } from 'expo-router';


export default function StackLayout() {
   return (
      <Tabs>
         <Tabs.Screen name='index' options={{
            title: "Home"
         }}/>
         <Tabs.Screen name='explore' options={{
            title: 'Challenge'
         }} />
         <Tabs.Screen name='setting' options={{
            title: 'Explore'
         }} />
      </Tabs>
   );
}