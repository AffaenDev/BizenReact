import React, { useContext, useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import ThemeContext from '../context/ThemeContext';
import { themes } from '../theme';
import VideoCard from '../components/VideoCard';
import SearchBar from '../components/SearchBar';
import { mockVideos } from '../utils/mockData';

const SearchScreen = ({ route }) => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const colors = themes[theme];
  
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // Get search query from route params if available
  const initialQuery = route.params?.query || '';
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  
  // Perform search when query changes
  useEffect(() => {
    if (searchQuery) {
      performSearch(searchQuery);
    }
  }, [searchQuery]);
  
  const performSearch = (query) => {
    setLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Filter videos based on search query
      const results = mockVideos.filter(video => 
        video.title.toLowerCase().includes(query.toLowerCase()) ||
        video.abstract.toLowerCase().includes(query.toLowerCase()) ||
        video.location.toLowerCase().includes(query.toLowerCase()) ||
        video.publisher.toLowerCase().includes(query.toLowerCase())
      );
      
      setSearchResults(results);
      setLoading(false);
    }, 500);
  };
  
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <SearchBar initialQuery={searchQuery} onSearch={setSearchQuery} />
      
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      ) : (
        <FlatList
          data={searchResults}
          renderItem={({ item }) => <VideoCard video={item} />}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.videoGrid}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={[styles.emptyText, { color: colors.text }]}>
                {searchQuery ? 'No videos found matching your search' : 'Search for videos'}
              </Text>
            </View>
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoGrid: {
    padding: 5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 50,
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default SearchScreen;