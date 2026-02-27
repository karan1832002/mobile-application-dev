import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Github() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>New conversation</Text>
            <TouchableOpacity style={styles.model}>
              <Text style={styles.modelText}>Claude Haiku 4.5 ▾</Text>
            </TouchableOpacity>
            <View style={styles.row}>
              <Text style={styles.link}>Copilot</Text>
              <Text style={styles.muted}> uses AI. Check for mistakes.</Text>
            </View>
          </View>

          <View style={styles.actions}>
            <TouchableOpacity style={styles.circle}>
              <Text style={styles.circleText}>…</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.circle}>
              <Text style={styles.circleText}>✕</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ height: 420 }} />

        <View style={styles.cards}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              Performance and Optimization
            </Text>
            <Text style={styles.cardSub}>
              Tips to optimize JavaScript code.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Web Development</Text>
            <Text style={styles.cardSub}>
              Guide me through creating a …
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 14 }}>
          <TextInput
            placeholder="Ask Copilot"
            placeholderTextColor="#888"
            style={styles.input}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#000" },
  container: { padding: 20, backgroundColor: "#000" },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  title: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 8,
  },

  model: {
    backgroundColor: "#111",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    marginBottom: 8,
  },

  modelText: { color: "#ccc", fontSize: 13 },

  row: { flexDirection: "row" },

  link: { color: "#4FA3FF", textDecorationLine: "underline" },

  muted: { color: "#aaa" },

  actions: { flexDirection: "row", gap: 10 },

  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },

  circleText: { color: "#fff", fontSize: 18 },

  cards: { flexDirection: "row", gap: 12 },

  card: {
    flex: 1,
    backgroundColor: "#111",
    padding: 12,
    borderRadius: 16,
  },

  cardTitle: { color: "#fff", fontWeight: "bold", fontSize: 14 },

  cardSub: { color: "#aaa", fontSize: 12, marginTop: 4 },

  input: {
    backgroundColor: "#111",
    padding: 12,
    borderRadius: 16,
    color: "#fff",
  },
});