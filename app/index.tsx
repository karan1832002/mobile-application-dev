import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import React from "react";
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const myWorkItems = [
  { icon: <Octicons name="issue-opened" size={20} color="#3fb950" />, label: 'Issues', color: '#3fb950' },
  { icon: <Octicons name="git-pull-request" size={20} color="#fff" />, label: 'Pull Requests', color: '#58a6ff' },
  { icon: <Octicons name="comment-discussion" size={20} color="#fff" />, label: 'Discussions', color: '#a371f7' },
  { icon: <Octicons name="project" size={20} color="#fff" />, label: 'Projects', color: '#8b949e' },
  { icon: <Octicons name="repo" size={20} color="#fff" />, label: 'Top Repositories', color: '#8b949e' },
  { icon: <Octicons name="organization" size={20} color="#fff" />, label: 'Organizations', color: '#f0883e' },
  { icon: <Octicons name="star-fill" size={20} color="#fff" />, label: 'Starred', color: '#e3b341' },
];

const agentItems = [
  { icon: <MaterialCommunityIcons name="face-agent" size={20} color="#fff" />, label: 'Sessions', color: '#f97583' },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Icons */}
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.headerIconBtn}>
            <Ionicons name="add" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIconBtn}>
            <Ionicons name="search" size={22} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Title */}
        <Text style={styles.title}>Home</Text>

        {/* My Work */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>My Work</Text>
          <TouchableOpacity>
            <Ionicons name="ellipsis-horizontal" size={20} color="#8b949e" />
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          {myWorkItems.map((item, index) => (
            <TouchableOpacity key={item.label} activeOpacity={0.6}>
              <View style={styles.cardRow}>
                <View style={[styles.iconCircle, { backgroundColor: item.color }]}>{item.icon}</View>
                <Text style={styles.cardLabel}>{item.label}</Text>
                <MaterialIcons name="chevron-right" size={24} color="#484f58" />
              </View>
              {index < myWorkItems.length - 1 && <View style={styles.divider} />}
            </TouchableOpacity>
          ))}
        </View>

        {/* Agents */}
        <Text style={styles.sectionTitlePlain}>Agents</Text>
        <View style={styles.card}>
          {agentItems.map((item, index) => (
            <TouchableOpacity key={item.label} activeOpacity={0.6}>
              <View style={styles.cardRow}>
                <View style={[styles.iconCircle, { backgroundColor: item.color }]}>{item.icon}</View>
                <Text style={styles.cardLabel}>{item.label}</Text>
                <MaterialIcons name="chevron-right" size={24} color="#484f58" />
              </View>
              {index < agentItems.length - 1 && <View style={styles.divider} />}
            </TouchableOpacity>
          ))}
        </View>

        {/* Favorites */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Favorites</Text>
          <TouchableOpacity>
            <Ionicons name="ellipsis-horizontal" size={20} color="#8b949e" />
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <View style={styles.emptyFavorites}>
            <Text style={styles.emptyText}>Add favorite repositories here for quick access at any time, without having to search</Text>
          </View>
        </View>

        {/* Alert Button */}
        <TouchableOpacity
          style={styles.alertButton}
          activeOpacity={0.7}
          onPress={() => Alert.alert('Alert', 'Alert Button pressed')}
        >
          <Ionicons name="alert-circle" size={22} color="#fff" />
          <Text style={styles.alertButtonText}>Alert Button</Text>
        </TouchableOpacity>

        <View style={{ height: 120 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  scrollView: { flex: 1 },
  scrollContent: { paddingHorizontal: 16, paddingTop: 50 },
  headerIcons: { flexDirection: 'row', justifyContent: 'flex-end', gap: 12, marginBottom: 16 },
  headerIconBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#2d2d2d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: { fontSize: 34, fontWeight: '700', color: '#fff', marginBottom: 24 },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: { fontSize: 20, fontWeight: '600', color: '#fff' },
  sectionTitlePlain: { fontSize: 20, fontWeight: '600', color: '#fff', marginBottom: 12 },
  card: {
    backgroundColor: '#1c1c1e', borderRadius: 12,
    overflow: 'hidden', marginBottom: 24,
  },
  cardRow: {
    flexDirection: 'row', alignItems: 'center',
    paddingVertical: 12, paddingHorizontal: 16,
  },
  iconCircle: {
    width: 32, height: 32, borderRadius: 8,
    justifyContent: 'center', alignItems: 'center', marginRight: 14,
  },
  cardLabel: { flex: 1, color: '#fff', fontSize: 17 },
  divider: { height: StyleSheet.hairlineWidth, backgroundColor: '#3d3d3d', marginLeft: 62 },
  emptyFavorites: { padding: 16 },
  emptyText: { color: '#8b949e', fontSize: 15, lineHeight: 22 },
  alertButton: {
    backgroundColor: '#238636',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 20,
  },
  alertButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
