// import React from 'react';
// import { StyleSheet, View, Text } from 'react-native';

// export default class AddScreen extends React.Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text>Add Screen</Text>
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });

// 2nd
// https://callstack.github.io/react-native-paper/
// npm install react-native-paper
// this package allow users to input text.
// import React from "react";
// import { TextInput, Button } from "react-native-paper";
// import { StyleSheet, View, Text } from "react-native";

// export default class AddScreen extends React.Component {

//     state = {
//         text: '',
//     };

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Add Screen</Text>
//         <TextInput
//                     label='Name'
//                     value={this.state.text}
//                     onChangeText={text => this.setState({ text })}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     padding: 20,
//   },
// });

// 3rd
// changing state, Adding TextInput name, datatxt, and type
// import React from "react";
// import { TextInput, Button } from "react-native-paper";
// import { StyleSheet, View, Text } from "react-native";

// export default class AddScreen extends React.Component {
//     state = {
//         name: '',
//         dataTxt: '',
//         type: ''
//     };

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Add Screen</Text>
//         <TextInput
//           label="Name"
//           value={this.state.name}
//           onChangeText={(name) => this.setState({ name })}
//         />

//         <TextInput
//           label="Data"
//           value={this.state.dataTxt}
//           onChangeText={(dataTxt) => this.setState({ dataTxt })}
//           style={{
//             marginTop: 20,
//           }}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     padding: 20,
//   },
// });

// 4th
// adding picker from native-base
// https://docs-v2.nativebase.io/Components.html#picker-def-headref
// npm install react-native-gesture-handler
// npm install native-base styled-components styled-system
// expo install react-native-svg
// expo install react-native-safe-area-context

// import React from "react";
// import { TextInput } from "react-native-paper";
// import { StyleSheet, View, Text } from "react-native";
// import { Picker } from "native-base";

// export default class AddScreen extends React.Component {

//     state = {
//     name: "",
//     dataTxt: "",
//     type: "",
//   };

//   onTypeChanged(value) {
//     this.setState({
//       type: value,
//     });
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Add Screen</Text>
//         <TextInput
//           label="Name"
//           value={this.state.name}
//           onChangeText={(name) => this.setState({ name })}
//         />

//         <TextInput
//           label="Data"
//           value={this.state.dataTxt}
//           onChangeText={(dataTxt) => this.setState({ dataTxt })}
//           style={{
//             marginTop: 20,
//           }}
//         />

//         <Text
//           style={{
//             marginTop: 20,
//           }}
//         >
//           Type
//         </Text>

//         <Picker
//           style={{
//             marginTop: 20,
//           }}
//           placeholder="Select type"
//           note
//           mode="dropdown"
//           style={{ width: 200 }}
//           selectedValue={this.state.type}
//           onValueChange={this.onTypeChanged.bind(this)}
//         >
//           <Picker.Item label="Links" value="links" />
//           <Picker.Item label="Location" value="location" />
//           <Picker.Item label="Phone" value="phone" />
//           <Picker.Item label="Website" value="website" />
//           <Picker.Item label="EMail" value="email" />
//         </Picker>

//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     padding: 20,
//   },
// });

// 5th
// https://callstack.github.io/react-native-paper/button.html
// adding button using 'react-native-paper'
// import React from "react";
// import { TextInput, Button } from "react-native-paper";
// import { StyleSheet, View, Text } from "react-native";
// import { Picker } from "native-base";

// export default class AddScreen extends React.Component {
//   state = {
//     name: "",
//     dataTxt: "",
//     type: "",
//   };

//   onTypeChanged(value) {
//     this.setState({
//       type: value,
//     });
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Add Screen</Text>
//         <TextInput
//           label="Name"
//           value={this.state.name}
//           onChangeText={(name) => this.setState({ name })}
//         />

//         <TextInput
//           label="Data"
//           value={this.state.dataTxt}
//           onChangeText={(dataTxt) => this.setState({ dataTxt })}
//           style={{
//             marginTop: 20,
//           }}
//         />

//         <Text
//           style={{
//             marginTop: 20,
//           }}
//         >
//           Type
//         </Text>

//         <Picker
//           style={{
//             marginTop: 20,
//           }}
//           placeholder="Select type"
//           note
//           mode="dropdown"
//           style={{ width: 200 }}
//           selectedValue={this.state.type}
//           onValueChange={this.onTypeChanged.bind(this)}
//         >
//           <Picker.Item label="Links" value="links" />
//           <Picker.Item label="Location" value="location" />
//           <Picker.Item label="Phone" value="phone" />
//           <Picker.Item label="Website" value="website" />
//           <Picker.Item label="EMail" value="email" />
//         </Picker>

//         <Button
//           mode="contained"
//           style={{
//             marginTop: 20,
//             backgroundColor: "gold"
//           }}
//           onPress={() => { }}
//         >
//           Remember this
//         </Button>

//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     padding: 20,
//   },
// });

// 6th (getting and storing the data)
// import React from "react";
// import { TextInput, Button } from "react-native-paper";
// import { StyleSheet, View, Text } from "react-native";
// import { Picker } from "native-base";

// export default class AddScreen extends React.Component {
//   state = {
//     name: "",
//     dataTxt: "",
//     type: "",
//   };

//   onTypeChanged(value) {
//     this.setState({
//       type: value,
//     });
//   }

//   rememberData(){
//       const name = this.state.name
//       const data = this.state.dataTxt
//       const type = this.state.type

//       console.log(`${name} ${data} ${type}`)
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Add Screen</Text>
//         <TextInput
//           label="Name"
//           value={this.state.name}
//           onChangeText={(name) => this.setState({ name })}
//         />

//         <TextInput
//           label="Data"
//           value={this.state.dataTxt}
//           onChangeText={(dataTxt) => this.setState({ dataTxt })}
//           style={{
//             marginTop: 20,
//           }}
//         />

//         <Text
//           style={{
//             marginTop: 20,
//           }}
//         >
//           Type
//         </Text>

//         <Picker
//           style={{
//             marginTop: 20,
//           }}
//           placeholder="Select type"
//           note
//           mode="dropdown"
//           style={{ width: 200 }}
//           selectedValue={this.state.type}
//           onValueChange={this.onTypeChanged.bind(this)}
//         >
//           <Picker.Item label="Links" value="links" />
//           <Picker.Item label="Location" value="location" />
//           <Picker.Item label="Phone" value="phone" />
//           <Picker.Item label="Website" value="website" />
//           <Picker.Item label="EMail" value="email" />
//         </Picker>

//         <Button
//           mode="contained"
//           style={{
//             marginTop: 20,
//           }}
//           onPress={() => { this.rememberData()}}
//         >
//           Remember this
//         </Button>

//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     padding: 20,
//   },
// });

// 7th (storing data using AsyncStorage)
// import React from "react";
// import { TextInput, Button } from "react-native-paper";
// import { StyleSheet, View, Text, AsyncStorage} from "react-native";
// import { Picker } from "native-base";

// export default class AddScreen extends React.Component {
//   state = {
//     name: "",
//     dataTxt: "",
//     type: "",
//   };

//   onTypeChanged(value) {
//     this.setState({
//       type: value,
//     });
//   }

//     // rememberData() {
//     //   const name = this.state.name;
//     //   const dataTxt = this.state.dataTxt;
//     //   const type = this.state.type;

//     //   if (name !== "" && (dataTxt !== "") & (type !== "")) {
//     //   } else {
//     //     alert("Please enter some data");
//     //   }
//     //   console.log(`${name} ${dataTxt} ${type}`);
//     // }

//   async rememberData() {
//     const name = this.state.name;
//     const dataTxt = this.state.dataTxt;
//     const type = this.state.type;

//     if (name !== "" && (dataTxt !== "") & (type !== "")) {
//       const data = {
//         name,
//         dataTxt,
//         type,
//       };
//       console.log(data);

//       await AsyncStorage.setItem(Date.now().toString(), JSON.stringify(data))
//         .then(() => {
//           this.props.navigation.goBack();
//         })
//         .catch((error) => console.log(error));
//     } else {
//       alert("Please enter some data");
//     }

//     console.log(`${name} ${dataTxt} ${type}`);
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Add Screen</Text>
//         <TextInput
//           label="Name"
//           value={this.state.name}
//           onChangeText={(name) => this.setState({ name })}
//         />

//         <TextInput
//           label="Data"
//           value={this.state.dataTxt}
//           onChangeText={(dataTxt) => this.setState({ dataTxt })}
//           style={{
//             marginTop: 20,
//           }}
//         />

//         <Text
//           style={{
//             marginTop: 20,
//           }}
//         >
//           Type
//         </Text>

//         <Picker
//           style={{
//             marginTop: 20,
//           }}
//           placeholder="Select type"
//           note
//           mode="dropdown"
//           style={{ width: 200 }}
//           selectedValue={this.state.type}
//           onValueChange={this.onTypeChanged.bind(this)}
//         >
//           <Picker.Item label="Links" value="links" />
//           <Picker.Item label="Location" value="location" />
//           <Picker.Item label="Phone" value="phone" />
//           <Picker.Item label="Website" value="website" />
//           <Picker.Item label="EMail" value="email" />
//         </Picker>

//         <Button
//           mode="contained"
//           style={{
//             marginTop: 20,
//           }}
//           onPress={() => {
//             this.rememberData();
//           }}
//         >
//           Remember this
//         </Button>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     padding: 20,
//   },
// });

// after completing the above code, go to HomeScreen.js (3rd) to fetch data from AsyncStorage

// FINAL
import React from "react";
import { StyleSheet, View, Text, AsyncStorage } from "react-native";

import { TextInput, Button } from "react-native-paper";
import { Picker } from "native-base";

export default class AddScreen extends React.Component {
  state = {
    name: "",
    dataTxt: "",
    type: "",
  };

  onTypeChanged(value) {
    this.setState({
      type: value,
    });
  }

  async rememberData() {
    const name = this.state.name;
    const dataTxt = this.state.dataTxt;
    const type = this.state.type;

    if (name !== "" && (dataTxt !== "") & (type !== "")) {
      const data = {
        name,
        dataTxt,
        type,
      };
      console.log(data);

      await AsyncStorage.setItem(Date.now().toString(), JSON.stringify(data))
        .then(() => {
          this.props.navigation.goBack();
        })
        .catch((error) => console.log(error));
    } else {
      alert("Please enter some data");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          label="Name"
          value={this.state.name}
          onChangeText={(name) => this.setState({ name })}
        />

        <TextInput
          label="Data"
          value={this.state.dataTxt}
          onChangeText={(dataTxt) => this.setState({ dataTxt })}
          style={{
            marginTop: 20,
          }}
        />

        <Text
          style={{
            marginTop: 20,
          }}
        >
          Type
        </Text>
        <Picker
          style={{
            marginTop: 20,
          }}
          placeholder="Select type"
          note
          // mode="dialog"
          style={{ width: 200 }}
          selectedValue={this.state.type}
          onValueChange={this.onTypeChanged.bind(this)}
        >
          <Picker.Item label="Links" value="links" />
          <Picker.Item label="Location" value="location" />
          <Picker.Item label="Phone" value="phone" />
          <Picker.Item label="Website" value="website" />
          <Picker.Item label="EMail" value="email" />
        </Picker>

        <Button
          mode="contained"
          style={{
            marginTop: 20,
          }}
          onPress={() => {
            this.rememberData();
          }}
        >
          Remember this
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
});
