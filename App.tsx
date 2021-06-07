import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, FlatList } from 'react-native';

export default function App() {
  const renderItem = ({ item }) => (
    <Item titless={item.title} />
  );
  return (
    <SafeAreaView style={styles1.container}>
      <FirstBlock></FirstBlock>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={items => items.id}
      />
    </SafeAreaView>
  );
}
const styles1 = StyleSheet.create({
  container: {
    flex: 1,
  },
  items: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  titles: {
    fontSize: 32,
  },
});

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Amigo: Daniel Lepe Hobby: Tennis',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Amigo: Diego Lepe Hobby: Futbol',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Amigo: John Cena Hobby: Ser Invisible',
  },
];

const Item = ({ titless }) => (
  <View style={styles1.items}>
    <Text style={styles1.titles}>{titless}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const MyFriendsLepe = (myFriends: any) => {
  return (
    <View>
      <Text>My friends: {myFriends.name} and the hobby: {myFriends.hobby}</Text>
      <Button title="Load" onPress={() => {
        fetch('https://raw.githubusercontent.com/DanielLepeVega/Activity2.1MobileAppsAndroid/main/amigos.json')
          .then(response => response.json())
          .then(data =>
            console.log(data)

          )
          .catch(error => console.log(error));
      }} />
    </View>
  );
}

const FirstBlock = () => {
  return (
    <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
        <MyFriendsLepe></MyFriendsLepe>
    </View>
  );
}
