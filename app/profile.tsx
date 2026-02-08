import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const menuItems = [
  { icon: <Octicons name="repo" size={20} color="#8b949e" />, label: 'Repositories', value: '24' },
  { icon: <Octicons name="star" size={20} color="#8b949e" />, label: 'Starred', value: '142' },
  { icon: <Octicons name="organization" size={20} color="#8b949e" />, label: 'Organizations', value: '3' },
];

const settingsItems = [
  { icon: <Ionicons name="settings-outline" size={20} color="#8b949e" />, label: 'Settings' },
  { icon: <Ionicons name="help-circle-outline" size={20} color="#8b949e" />, label: 'Help & Support' },
  { icon: <Ionicons name="information-circle-outline" size={20} color="#8b949e" />, label: 'About' },
];

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Profile</Text>
          <TouchableOpacity>
            <Ionicons name="share-outline" size={22} color="#8b949e" />
          </TouchableOpacity>
        </View>

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.avatarContainer}>
            <FontAwesome name="user-circle" size={80} color="#30363d" />
          </View>
          <Text style={styles.name}>GitHub User</Text>
          <Text style={styles.username}>@username</Text>
          <Text style={styles.bio}>Mobile developer | Open source enthusiast</Text>
          <View style={styles.statsRow}>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>128</Text>
              <Text style={styles.statLabel}>followers</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.stat}>
              <Text style={styles.statNumber}>64</Text>
              <Text style={styles.statLabel}>following</Text>
            </View>
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.card}>
          {menuItems.map((item, index) => (
            <TouchableOpacity key={item.label} activeOpacity={0.6}>
              <View style={styles.cardRow}>
                {item.icon}
                <Text style={styles.cardLabel}>{item.label}</Text>
                <Text style={styles.cardValue}>{item.value}</Text>
                <MaterialIcons name="chevron-right" size={24} color="#484f58" />
              </View>
              {index < menuItems.length - 1 && <View style={styles.divider} />}
            </TouchableOpacity>
          ))}
        </View>

        {/* Settings */}
        <View style={styles.card}>
          {settingsItems.map((item, index) => (
            <TouchableOpacity key={item.label} activeOpacity={0.6}>
              <View style={styles.cardRow}>
                {item.icon}
                <Text style={styles.cardLabel}>{item.label}</Text>
                <MaterialIcons name="chevron-right" size={24} color="#484f58" />
              </View>
              {index < settingsItems.length - 1 && <View style={styles.divider} />}
            </TouchableOpacity>
          ))}
        </View>

        {/* Sign Out */}
        <TouchableOpacity style={styles.signOutButton} activeOpacity={0.6}>
          <Ionicons name="log-out-outline" size={20} color="#f85149" />
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>

        <View style={{ height: 120 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0d1117' },
  scrollView: { flex: 1 },
  scrollContent: { paddingHorizontal: 16, paddingTop: 60 },
  header: {
    flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'center', marginBottom: 24,
  },
  title: { fontSize: 28, fontWeight: '700', color: '#fff' },
  profileCard: {
    backgroundColor: '#161b22',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarContainer: { marginBottom: 16 },
  name: { color: '#fff', fontSize: 22, fontWeight: '700' },
  username: { color: '#8b949e', fontSize: 16, marginTop: 4 },
  bio: { color: '#8b949e', fontSize: 14, marginTop: 12, textAlign: 'center' },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  stat: { alignItems: 'center', paddingHorizontal: 24 },
  statNumber: { color: '#fff', fontSize: 18, fontWeight: '700' },
  statLabel: { color: '#8b949e', fontSize: 13, marginTop: 2 },
  statDivider: { width: 1, height: 30, backgroundColor: '#30363d' },
  card: {
    backgroundColor: '#161b22', borderRadius: 12,
    overflow: 'hidden', marginBottom: 20,
  },
  cardRow: {
    flexDirection: 'row', alignItems: 'center',
    paddingVertical: 14, paddingHorizontal: 16,
  },
  cardLabel: { flex: 1, color: '#fff', fontSize: 16, marginLeft: 14 },
  cardValue: { color: '#8b949e', fontSize: 14, marginRight: 8 },
  divider: { height: StyleSheet.hairlineWidth, backgroundColor: '#30363d', marginLeft: 50 },
  signOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#161b22',
    borderRadius: 12,
    paddingVertical: 14,
    gap: 10,
  },
  signOutText: { color: '#f85149', fontSize: 16, fontWeight: '500' },
});
