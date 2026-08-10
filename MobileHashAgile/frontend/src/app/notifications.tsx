import React from "react";
import { View, Text, Button, StyleSheet, ScrollView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { usePushNotifications } from "../utils/usePushNotifications";

export default function NotificationsScreen() {
  const router = useRouter();
  const { expoPushToken, notification, sendLocalNotification } = usePushNotifications();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Expo Push Notifications 🔔</Text>

        <View style={styles.card}>
          <Text style={styles.label}>Expo Push Token:</Text>
          <Text style={styles.tokenText} selectable>
            {expoPushToken || "Fetching token (or simulator)..."}
          </Text>
        </View>

        <Button
          title="Send Test Local Notification (2s delay)"
          onPress={() => sendLocalNotification("Hello from Expo! 🚀", "Push notifications are working cleanly!")}
          color="#007AFF"
        />

        {notification && (
          <View style={[styles.card, { marginTop: 20 }]}>
            <Text style={styles.label}>Last Received Notification:</Text>
            <Text style={styles.notifTitle}>{notification.request.content.title}</Text>
            <Text style={styles.notifBody}>{notification.request.content.body}</Text>
            <Text style={styles.notifData}>
              Data: {JSON.stringify(notification.request.content.data)}
            </Text>
          </View>
        )}

        <View style={{ marginTop: 30 }}>
          <Button title="Go Back to Home" onPress={() => router.back()} color="#666" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F7",
  },
  scrollContent: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#1C1C1E",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#8E8E93",
    marginBottom: 6,
  },
  tokenText: {
    fontSize: 13,
    color: "#007AFF",
    fontFamily: Platform.OS === "ios" ? "Courier" : "monospace",
  },
  notifTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginTop: 4,
  },
  notifBody: {
    fontSize: 14,
    color: "#3A3A3C",
    marginTop: 2,
  },
  notifData: {
    fontSize: 12,
    color: "#8E8E93",
    marginTop: 6,
  },
});
