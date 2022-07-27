// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// 2nd
// converting functional component to class component.
// npm install react-base ( not necessary to install, not using in this app)
// import React from 'react';
// import { render } from 'react-dom';
// import { StyleSheet, Text, View } from 'react-native';

// export default class App extends React.Component {
//   render() {
//   return (
//     <View style={styles.container}>
//       <Text>Remember It APP</Text>
//     </View>
//   );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// 3rd (creating a custom build floating action button)
// adding an icon
// goto expo.github.io/vector-icons and search for add icons, i choosed from MaterialIcons.
// import React from 'react';
// import { render } from 'react-dom';
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { MaterialIcons } from "@expo/vector-icons";

// export default class App extends React.Component {
//   render() {
//   return (
//     <View style={styles.container}>
//       <Text>Remember It APP</Text>
//       <TouchableOpacity
//           onPress={() => {}} >
//             <MaterialIcons 
//               name = "add"
//               size={30} 
//             />
//           </TouchableOpacity>
//     </View>
//   );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


// 4th (adding style to add button)
// removing the text
// import React from 'react';
// import { render } from 'react-dom';
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { MaterialIcons } from "@expo/vector-icons";

// export default class App extends React.Component {
//   render() {
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//           onPress={() => {}} 
//           style = {styles.fab} >
//             <MaterialIcons 
//               name = "add"
//               size={30} 
//             />
//           </TouchableOpacity>
//     </View>
//   );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   fab: {
//     backgroundColor: "#f1c40f",
//     width: 60, 
//     height: 60,
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 20,
//     shadowColor: "#000000",
//     shadowOpacity: 0.2,
//     shadowRadius: 8,
//     shadowOffset: {
//       height: 2,
//       width: 2
//     },
//   }
// });

// 5th (positioning the button at the bottom of the screen)
// import React from 'react';
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { MaterialIcons } from "@expo/vector-icons";

// export default class App extends React.Component {
//   render() {
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//           onPress={() => {}} 
//           style = {styles.fab} >
//             <MaterialIcons 
//               name = "add"
//               size={30} 
//             />
//           </TouchableOpacity>
//     </View>
//   );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   fab: {
//     backgroundColor: "#f1c40f",
//     width: 60, 
//     height: 60,
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 20,
//     shadowColor: "#000000",
//     shadowOpacity: 0.2,
//     shadowRadius: 8,
//     shadowOffset: {
//       height: 2,
//       width: 2
//     },
//     position: "absolute",
//         right: 40,
//         bottom: 40
//     },
// });


// 6th ( Installing React Navigation )
// reactnavigation.org
// npm install @react-navigation/native
// npm install @react-navigation/stack
// create a folder screens and create a file HomeScreen.js
// copy the content of App.js to HomeScreen.js
// import React from 'react';
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";

// import HomeScreen from "./screens/HomeScreen";

// const Stack = createStackNavigator();

// export default function App() {
//     return (

//                 <NavigationContainer>
//                     <Stack.Navigator>
//                         <Stack.Screen name="Home" component={HomeScreen} />
//                     </Stack.Navigator>
//                 </NavigationContainer>
        
//             );
// }


// FINAL -> HomeScreen (2nd) -> AddScreen(1st)
// Accessing the AddScreen.js code using navigation
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./screens/HomeScreen";
import AddScreen from "./screens/AddScreen";

const Stack = createStackNavigator();

export default function App() {
    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Add" component={AddScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}


