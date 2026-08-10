import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

interface UserCardProps {
  name: string;
  email: string;
  onPress: () => void;
}

export function UserCard({ name, email, onPress }: UserCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 12,
    marginVertical: 6,
    backgroundColor: "#eee",
    borderRadius: 6,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
    color: "#555",
  },
});
