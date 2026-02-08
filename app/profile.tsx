import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={[
        styles.container,
        {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        },
      ]}
    >
      <Text style={styles.Text}>Edit app/index.tsx to edit this screen.</Text>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text : {
    color: '#fff',
  }
}
)