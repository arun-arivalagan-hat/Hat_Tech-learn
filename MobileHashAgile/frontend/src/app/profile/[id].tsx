import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import * as Linking from "expo-linking";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const router = useRouter();
  const { id, role } = useLocalSearchParams<{ id: string; role?: string }>();
  const url = Linking.useURL();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>User Profile (Deep Linked)</Text>
      
      <View style={styles.card}>
        <Text style={styles.label}>User ID (Path Param):</Text>
        <Text style={styles.value}>{id}</Text>

        <Text style={styles.label}>Role (Query Param):</Text>
        <Text style={styles.value}>{role || "Standard User"}</Text>

        <Text style={styles.label}>Incoming URL:</Text>
        <Text style={styles.urlText}>{url || "Opened directly inside app"}</Text>
      </View>

      <Button title="Go Back to Home" onPress={() => router.replace("/")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f7",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    color: "#666",
    marginTop: 8,
  },
  value: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111",
    marginBottom: 4,
  },
  urlText: {
    fontSize: 13,
    color: "#0066cc",
    marginTop: 4,
  },
});
