import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function StorageScreen() {
  const [name, setName] = useState("");
  const [storedName, setStoredName] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const value = await AsyncStorage.getItem("username");
      if (value !== null) setStoredName(value);
    } catch (e) {
      console.error(e);
    }
  };

  const saveData = async () => {
    if (!name.trim()) return;
    try {
      await AsyncStorage.setItem("username", name);
      setStoredName(name);
      setName("");
    } catch (e) {
      console.error(e);
    }
  };

  const clearData = async () => {
    try {
      await AsyncStorage.removeItem("username");
      setStoredName("");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AsyncStorage Demo</Text>
      <Text>Stored Value: {storedName || "None"}</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter name..."
        value={name}
        onChangeText={setName}
      />

      <View style={styles.row}>
        <Button title="Save" onPress={saveData} />
        <Button title="Clear" color="red" onPress={clearData} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginVertical: 10,
    borderRadius: 4,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
