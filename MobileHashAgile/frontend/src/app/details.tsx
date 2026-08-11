// import React from "react";
// import { View, Text, Button, StyleSheet } from "react-native";
// import { useLocalSearchParams, useRouter } from "expo-router";
// import { Fonts } from "../constants/fonts";

// export default function DetailsScreen() {
//   const router = useRouter();
//   const params = useLocalSearchParams<{
//     name?: string;
//     email?: string;
//     phone?: string;
//     company?: string;
//   }>();

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{params.name || "User Details"}</Text>
//       <Text style={styles.text}>Email: {params.email}</Text>
//       <Text style={styles.text}>Phone: {params.phone}</Text>
//       <Text style={styles.text}>Company: {params.company}</Text>

//       <View style={{ marginTop: 20 }}>
//         <Button title="Go Back" onPress={() => router.back()} />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#fff",
//   },
//   title: {
//     fontFamily: Fonts.bold,
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   text: {
//     fontFamily: Fonts.regular,
//   },
// });

