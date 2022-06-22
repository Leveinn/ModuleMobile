import * as React from "react";
import { Text, View, TextInput, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View>
        <Text>Name: Buyuksari Emirhan</Text>
        <Text>Number: 6</Text>
        <Text>Group name: KP04</Text>
      </View>
    </View>
  );
}

function EvenScreen() {
  const [input, setInput] = React.useState("")
  const [listItems, setListItems] = React.useState([])

  const handleOnPress = () => {
    setListItems([...listItems, input])
    setInput("")
  }
  return (
    <View style={{  justifyContent: "center", alignItems: "center", padding: 20 }}>
      <View style={{display: "flex", flexDirection: "row", width: "100%"  }}>
        <TextInput value={input} style={{borderWidth: 1}} onChangeText={setInput}></TextInput>
        <Button onPress={handleOnPress} title="Add to the list" color="#841584" />
      </View>
      <View style={{borderWidth: 1, width: "100%", marginTop: 10, borderRadius: 4, padding: 8}}>
        <Text>List:</Text>
        <View>
          {listItems.map((item,idx) => <Text key={idx}>{idx}-{item}</Text>)}
        </View>
      </View>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Even Variant" component={EvenScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
