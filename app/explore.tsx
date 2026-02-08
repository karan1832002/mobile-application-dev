import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const trendingRepos = [
  { name: 'facebook/react', desc: 'A declarative, efficient, and flexible JavaScript library', stars: '218k', lang: 'JavaScript', langColor: '#f1e05a' },
  { name: 'microsoft/vscode', desc: 'Visual Studio Code - Open Source', stars: '154k', lang: 'TypeScript', langColor: '#3178c6' },
  { name: 'torvalds/linux', desc: 'Linux kernel source tree', stars: '162k', lang: 'C', langColor: '#555555' },
];

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Explore</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={18} color="#8b949e" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search GitHub"
            placeholderTextColor="#8b949e"
          />
        </View>

        {/* Trending */}
        <Text style={styles.sectionTitle}>Trending Repositories</Text>
        <View style={styles.card}>
          {trendingRepos.map((repo, index) => (
            <TouchableOpacity key={repo.name} activeOpacity={0.6}>
              <View style={styles.repoRow}>
                <View style={styles.repoInfo}>
                  <Text style={styles.repoName}>{repo.name}</Text>
                  <Text style={styles.repoDesc} numberOfLines={2}>{repo.desc}</Text>
                  <View style={styles.repoMeta}>
                    <View style={[styles.langDot, { backgroundColor: repo.langColor }]} />
                    <Text style={styles.langText}>{repo.lang}</Text>
                    <Octicons name="star" size={14} color="#8b949e" style={{ marginLeft: 12 }} />
                    <Text style={styles.starsText}>{repo.stars}</Text>
                  </View>
                </View>
                <MaterialIcons name="chevron-right" size={24} color="#484f58" />
              </View>
              {index < trendingRepos.length - 1 && <View style={styles.divider} />}
            </TouchableOpacity>
          ))}
        </View>

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
    alignItems: 'center', marginBottom: 20,
  },
  title: { fontSize: 28, fontWeight: '700', color: '#fff' },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#161b22',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 28,
    borderWidth: 1,
    borderColor: '#30363d',
  },
  searchInput: { flex: 1, color: '#fff', fontSize: 16, marginLeft: 10 },
  sectionTitle: { fontSize: 14, fontWeight: '600', color: '#8b949e', marginBottom: 10, textTransform: 'uppercase', letterSpacing: 0.5 },
  card: {
    backgroundColor: '#161b22', borderRadius: 12,
    overflow: 'hidden', marginBottom: 28,
  },
  repoRow: {
    flexDirection: 'row', alignItems: 'center',
    paddingVertical: 16, paddingHorizontal: 16,
  },
  repoInfo: { flex: 1 },
  repoName: { color: '#58a6ff', fontSize: 16, fontWeight: '600' },
  repoDesc: { color: '#8b949e', fontSize: 14, marginTop: 4 },
  repoMeta: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  langDot: { width: 12, height: 12, borderRadius: 6 },
  langText: { color: '#8b949e', fontSize: 12, marginLeft: 6 },
  starsText: { color: '#8b949e', fontSize: 12, marginLeft: 4 },
  divider: { height: StyleSheet.hairlineWidth, backgroundColor: '#30363d', marginLeft: 16 },
});
