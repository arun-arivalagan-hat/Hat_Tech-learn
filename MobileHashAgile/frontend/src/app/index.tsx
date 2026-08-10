import { useRef, useState } from "react";
import { View, Button, Image, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  CameraView,
  useCameraPermissions,
} from "expo-camera";
import * as Linking from "expo-linking";

export default function App() {
  const cameraRef = useRef<CameraView | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);

  const [permission, requestPermission] =
    useCameraPermissions();

  if (!permission?.granted) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button
          title="Grant Camera Permission"
          onPress={requestPermission}
        />
      </SafeAreaView>
    );
  }

  const takePicture = async () => {
    if (!cameraRef.current) return;
    const result = await cameraRef.current.takePictureAsync();
    if (result?.uri) {
      setPhoto(result.uri);
    }
  };

  const testDeepLinkProfile = () => {
    const deepLinkUrl = Linking.createURL("/profile/99", {
      queryParams: { role: "Developer" },
    });
    Linking.openURL(deepLinkUrl);
  };

  const testDeepLinkDetails = () => {
    const deepLinkUrl = Linking.createURL("/details", {
      queryParams: { name: "Alice", email: "alice@example.com", phone: "9994092050", company: "HashAgile" },
    });
    Linking.openURL(deepLinkUrl);
  };

  const callContact = () => {
    Linking.openURL("tel:9994092050");
  };

  return (
    <SafeAreaView style={styles.container}>
      <CameraView
        ref={cameraRef}
        style={{ flex: 1 }}
      />

      <View style={styles.controls}>
        <Button
          title="Capture"
          onPress={takePicture}
        />

        <Text style={styles.heading}>Deep Link Actions:</Text>
        <Button
          title="Call Contact (9994092050)"
          onPress={callContact}
          color="#28a745"
        />
        <View style={{ height: 6 }} />
        <Button
          title="Test Deep Link -> Profile (/profile/99)"
          onPress={testDeepLinkProfile}
        />
        <View style={{ height: 6 }} />
        <Button
          title="Test Deep Link -> Details (/details)"
          onPress={testDeepLinkDetails}
        />

        {photo && (
          <Image
            source={{ uri: photo }}
            style={{
              width: 120,
              height: 120,
              alignSelf: "center",
              marginVertical: 8,
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  controls: {
    padding: 12,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 6,
    color: "#333",
  },
});