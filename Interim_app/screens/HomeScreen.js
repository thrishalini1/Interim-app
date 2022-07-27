// import React from 'react';
// import { StyleSheet, TouchableOpacity, View } from 'react-native';
// import { MaterialIcons } from "@expo/vector-icons";

// export default class App extends React.Component {
//   render() {
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//           onPress={() => { }}
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

// 2nd -> AddScreen ( 1st )
// create "AddScreen.js" file under screens folder
// modify the App.js to access AddScreen.js
// import React from 'react';
// import { StyleSheet, TouchableOpacity, View } from 'react-native';
// import { MaterialIcons } from "@expo/vector-icons";

// export default class App extends React.Component {
//   render() {
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//           onPress={() => {
//               this.props.navigation.navigate("Add");
//           }}
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

// 3rd
// fetching the data from persistent data using AsyncStorage
// import React from "react";
// import { StyleSheet, TouchableOpacity, View, AsyncStorage } from "react-native";
// import { MaterialIcons } from "@expo/vector-icons";

// export default class App extends React.Component {

//   state = {
//     data: []
//   }

//   componentDidMount() {
//     this.getAllData();
//   }

//   // async getAllData() {
//   //   await AsyncStorage.getAllKeys()
//   //     .then((data) => {
//   //       console.log(data);
//   //     })
//   //     .catch((error) => console.log(error));
//   // }

//   // fetch the data and store it in state so create the state to store.
//   async getAllData() {

//       await AsyncStorage.getAllKeys()
//       .then(async keys=>{
//           try {
//               const data = await AsyncStorage.multiGet(keys);
//               this.setState({
//                   data
//               });
//           }
//           catch (error) {
//               return console.log(error);
//           }
//       })
//       .catch(error=>console.log(error))

//       console.log(this.state.data)
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <TouchableOpacity
//           onPress={() => {
//             this.props.navigation.navigate("Add");
//           }}
//           style={styles.fab}
//         >
//           <MaterialIcons name="add" size={30} />
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
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
//       width: 2,
//     },
//     position: "absolute",
//     right: 40,
//     bottom: 40,
//   },
// });

// 4th
// Displaying data in FlatList
// import React from "react";
// import { StyleSheet, TouchableOpacity, View, AsyncStorage , Text, FlatList } from "react-native";
// import { MaterialIcons } from "@expo/vector-icons";

// export default class App extends React.Component {
//   state = {
//     data: [],
//   };

//   componentDidMount() {
//     this.getAllData();
//   }

//   // fetch the data and store it in state so create the state to store.
//   async getAllData() {
//     await AsyncStorage.getAllKeys()
//       .then(async (keys) => {
//         try {
//           const data = await AsyncStorage.multiGet(keys);
//           this.setState({
//             data,
//           });
//         } catch (error) {
//           return console.log(error);
//         }
//       })
//       .catch((error) => console.log(error));

//     console.log(this.state.data);
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList
//           data={this.state.data}
//           keyExtractor={(item, index) => item[0].toString()}
//           renderItem={({ item }) => {

//             const rememberData = JSON.parse(item[1]);

//             return <Text>{rememberData.name}</Text>;
//           }}
//         />

//         <TouchableOpacity
//           onPress={() => {
//             this.props.navigation.navigate("Add");
//           }}
//           style={styles.fab}
//         >
//           <MaterialIcons name="add" size={30} />
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     padding: 10
//     // alignItems: "center",
//     // justifyContent: "center",
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
//       width: 2,
//     },
//     position: "absolute",
//     right: 40,
//     bottom: 40,
//   },
// });

// 5th
// adding styles to flatlist
// import React from "react";
// import {
//   StyleSheet,
//   TouchableOpacity,
//   View,
//   AsyncStorage,
//   Text,
//   FlatList,
// } from "react-native";
// import { MaterialIcons } from "@expo/vector-icons";

// export default class App extends React.Component {
//   state = {
//     data: [],
//   };

//   componentDidMount() {
//     this.getAllData();
//   }

//   // fetch the data and store it in state so create the state to store.
//   async getAllData() {
//     await AsyncStorage.getAllKeys()
//       .then(async (keys) => {
//         try {
//           const data = await AsyncStorage.multiGet(keys);
//           this.setState({
//             data,
//           });
//         } catch (error) {
//           return console.log(error);
//         }
//       })
//       .catch((error) => console.log(error));

//     console.log(this.state.data);
//   }

//   render() {
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={this.state.data}
//         keyExtractor={(item, index) => item[0].toString()}
//         renderItem={({ item }) => {
//           const rememberData = JSON.parse(item[1]);

//           return (
//             <TouchableOpacity onPress={() => {}}>
//               <View style={styles.listItem}>
//                 <Text>{rememberData.name}</Text>
//                 <Text
//                   style={{
//                     color: "#2980b9",
//                   }}
//                 >
//                   {rememberData.dataTxt}
//                 </Text>
//               </View>
//             </TouchableOpacity>
//           );
//         }}
//       />

//       <TouchableOpacity
//         onPress={() => {
//           this.props.navigation.navigate("Add");
//         }}
//         style={styles.fab}
//       >
//         <MaterialIcons name="add" size={30} />
//       </TouchableOpacity>
//     </View>
//   );
// }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     padding: 10,
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
//       width: 2,
//     },
//     position: "absolute",
//     right: 40,
//     bottom: 40,
//   },
//   listItem: {
//     flexDirection: "column",
//     paddingHorizontal: 10,
//     paddingVertical: 20,
//     backgroundColor: "#EFEFEF",
//     marginTop: 10,
//     borderRadius: 8,
//   },
// });

// 6th
// Opening specfic URL,website and email on press of item
// importing Linking library from "expo"
// import React from "react";
// import {
//   StyleSheet,
//   TouchableOpacity,
//   View,
//   AsyncStorage,
//   Text,
//   FlatList,
// } from "react-native";
// import { MaterialIcons } from "@expo/vector-icons";
// import { Linking } from "expo";

// export default class App extends React.Component {
//   state = {
//     data: [],
//   };

//   componentDidMount() {
//     this.getAllData();
//   }

//   async getAllData() {
//     await AsyncStorage.getAllKeys()
//       .then(async (keys) => {
//         try {
//           const data = await AsyncStorage.multiGet(keys);
//           this.setState({
//             data,
//           });
//         } catch (error) {
//           return console.log(error);
//         }
//       })
//       .catch((error) => console.log(error));

//     console.log(this.state.data);
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList
//           data={this.state.data}
//           keyExtractor={(item, index) => item[0].toString()}
//           renderItem={({ item }) => {
//             const rememberData = JSON.parse(item[1]);

//             return (
//               <TouchableOpacity
//                 onPress={() => {
//                   if (rememberData.type == "links") {
//                     Linking.openURL(rememberData.dataTxt);
//                   } else if (rememberData.type == "location") {
//                     // https://www.google.com/maps/place/callifornia
//                     Linking.openURL(
//                       `https://www.google.com/maps/place/${rememberData.dataTxt}`
//                     );
//                   } else if (rememberData.type == "phone") {
//                     Linking.openURL(`tel:${rememberData.dataTxt}`);
//                   } else if (rememberData.type == "website") {
//                     Linking.openURL(rememberData.dataTxt);
//                   } else if (rememberData.type == "email") {
//                     Linking.openURL(`mailto:${rememberData.dataTxt}`);
//                   }
//                 }}
//               >
//                 <View style={styles.listItem}>
//                   <Text>{rememberData.name}</Text>
//                   <Text
//                     style={{
//                       color: "#2980b9",
//                     }}
//                   >
//                     {rememberData.dataTxt}
//                   </Text>
//                 </View>
//               </TouchableOpacity>
//             );
//           }}
//         />

//         <TouchableOpacity
//           onPress={() => {
//             this.props.navigation.navigate("Add");
//           }}
//           style={styles.fab}
//         >
//           <MaterialIcons name="add" size={30} />
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     padding: 10,
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
//       width: 2,
//     },
//     position: "absolute",
//     right: 40,
//     bottom: 40,
//   },
//   listItem: {
//     flexDirection: "column",
//     paddingHorizontal: 10,
//     paddingVertical: 20,
//     backgroundColor: "#EFEFEF",
//     marginTop: 10,
//     borderRadius: 8,
//   },
// });

// Final
// import React from "react";
// import {
//   Text,
//   StyleSheet,
//   View,
//   TouchableOpacity,
//   AsyncStorage,
//   FlatList,
//   Dimensions,
// } from "react-native";
// import { MaterialIcons } from "@expo/vector-icons";

// import { Linking } from "expo";

// export default class HomeScreen extends React.Component {
//   state = {
//     data: [],
//   };
//   componentDidMount() {
//     this.getAllData();
//   }

//   async getAllData() {
//     await AsyncStorage.getAllKeys()
//       .then(async (keys) => {
//         try {
//           const data = await AsyncStorage.multiGet(keys);
//           this.setState({
//             data,
//           });
//         } catch (error) {
//           return console.log(error);
//         }
//       })
//       .catch((error) => console.log(error));

//     console.log(this.state.data);
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList
//           data={this.state.data}
//           keyExtractor={(item, index) => item[0].toString()}
//           renderItem={({ item }) => {
//             const rememberData = JSON.parse(item[1]);

//             return (
//               <TouchableOpacity
//                 onPress={() => {
//                   if (rememberData.type == "links") {
//                     Linking.openURL(rememberData.dataTxt);
//                   } else if (rememberData.type == "location") {
//                     // https://www.google.com/maps/place/callifornia
//                     Linking.openURL(
//                       `https://www.google.com/maps/place/${rememberData.dataTxt}`
//                     );
//                   } else if (rememberData.type == "phone") {
//                     Linking.openURL(`tel:${rememberData.dataTxt}`);
//                   } else if (rememberData.type == "website") {
//                     Linking.openURL(rememberData.dataTxt);
//                   } else if (rememberData.type == "email") {
//                     Linking.openURL(`mailto:${rememberData.dataTxt}`);
//                   }
//                 }}
//               >
//                 <View style={styles.listItem}>
//                   <Text>{rememberData.name}</Text>
//                   <Text
//                     style={{
//                       color: "#2980b9",
//                     }}
//                   >
//                     {rememberData.dataTxt}
//                   </Text>
//                 </View>
//               </TouchableOpacity>
//             );
//           }}
//         />

//         <TouchableOpacity
//           onPress={() => {
//             this.props.navigation.navigate("Add");
//           }}
//           style={styles.fab}
//         >
//           <MaterialIcons name="add" size={30} />
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     padding: 10,
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
//       width: 2,
//     },
//     position: "absolute",
//     right: 40,
//     bottom: 40,
//   },
//   listItem: {
//     flexDirection: "column",
//     paddingHorizontal: 10,
//     paddingVertical: 20,
//     backgroundColor: "#EFEFEF",
//     marginTop: 10,
//     borderRadius: 8,
//   },
// });

// use react-native Linking module
// adding async and await in Linking.openURL
import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  AsyncStorage,
  FlatList,
  Dimensions,
  Linking,
} from "react-native";
//import Button from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

// import { Linking } from "expo";

export default class HomeScreen extends React.Component {
  state = {
    data: [],
  };
  componentDidMount() {
    this.getAllData();
  }

  async getAllData() {
    await AsyncStorage.getAllKeys()
      .then(async (keys) => {
        try {
          const data = await AsyncStorage.multiGet(keys);
          this.setState({
            data,
          });
        } catch (error) {
          return console.log(error);
        }
      })
      .catch((error) => console.log(error));

    console.log(this.state.data);
  }
//   async clearAsyncStorage () => {
//     await AsyncStorage.clear();
// }
async clearAllData() {
  await AsyncStorage.getAllKeys()
      .then(keys =>  AsyncStorage.multiRemove(keys))
      .then(() => alert('success'));
}
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          keyExtractor={(item, index) => item[0].toString()}
          renderItem={({ item }) => {
            const rememberData = JSON.parse(item[1]);

            return (
              <TouchableOpacity
                async
                onPress={async () => {
                  if (rememberData.type == "links") {
                    await Linking.openURL(rememberData.dataTxt);
                  } else if (rememberData.type == "location") {
                    // https://www.google.com/maps/place/callifornia
                    await Linking.openURL(
                      `https://www.google.com/maps/place/${rememberData.dataTxt}`
                    );
                  } else if (rememberData.type == "phone") {
                    await Linking.openURL(`tel:${rememberData.dataTxt}`);
                  } else if (rememberData.type == "website") {
                    await Linking.openURL(rememberData.dataTxt);
                  } else if (rememberData.type == "email") {
                    await Linking.openURL(`mailto:${rememberData.dataTxt}`);
                  }
                }}
              >
                <View style={styles.listItem}>
                  <Text>{rememberData.name}</Text>
                  <Text
                    style={{
                      color: "#2980b9",
                    }}
                  >
                    {rememberData.dataTxt}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Add");
          }}
          style={styles.fab}
        >
          <MaterialIcons name="add" size={30} />
        </TouchableOpacity>
        <TouchableOpacity
        
          onPress={ async () => {
            try {
            await AsyncStorage.clear();
            console.log('Done');
            alert("Done!")
            } catch (error) {
            console.log(error);
            }
          }}
       
          style={styles.cleary}
        >
          <MaterialIcons name="delete" size={30} />
        </TouchableOpacity>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  cleary:{
    backgroundColor: "#f1c40f",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    position: "absolute",
    left: 40,
    bottom: 40,
  },
  fab: {
    backgroundColor: "#f1c40f",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    position: "absolute",
    right: 40,
    bottom: 40,
  },
  listItem: {
    flexDirection: "column",
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: "#EFEFEF",
    marginTop: 10,
    borderRadius: 8,
  },
});
