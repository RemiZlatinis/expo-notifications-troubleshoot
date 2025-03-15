import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { getPushNotificationToken } from "@/services/notifications";

export default function RootLayout() {
  const [token, setToken] = useState<string>();

  const handleGetExpoPushToken = async () => {
    const token = await getPushNotificationToken();
    setToken(token || undefined);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>{token || "No token"}</Text>
      <Button title="Get an Expo Push Token" onPress={handleGetExpoPushToken} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
