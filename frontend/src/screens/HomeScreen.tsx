import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import ThemeContext from '../context/ThemeContext';
import { themes } from '../theme';
import RegionSelector from '../components/RegionSelector';
import CategorySelector from '../components/CategorySelector';
import SearchBar from '../components/SearchBar';
import VideoWall from '../components/VideoWall';
import { mockVideos } from '../utils/mockData';

const HomeScreen = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const colors = themes[theme];
  const navigation = useNavigation();
  
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('usa');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [page, setPage] = useState(1);
  
  // Load videos (mock data for now)
  useEffect(() => {
    loadVideos();
  }, [selectedRegion, selectedCategory]);
  
  const loadVideos = (refresh = false) => {
    setLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Filter videos based on region and category
      let filteredVideos = [...mockVideos];
      
      if (selectedRegion !== 'all') {
        filteredVideos = filteredVideos.filter(video => video.region === selectedRegion);
      }
      
      if (selectedCategory !== 'all') {
        filteredVideos = filteredVideos.filter(video => video.category === selectedCategory);
      }
      
      if (refresh) {
        setVideos(filteredVideos.slice(0, 10));
        setRefreshing(false);
        setPage(1);
      } else {
        // Paginate videos (10 per page)
        const newVideos = filteredVideos.slice(0, page * 10);
        setVideos(newVideos);
      }
      
      setLoading(false);
    }, 500);
  };
  
  const handleRefresh = () => {
    setRefreshing(true);
    loadVideos(true);
  };
  
  const handleLoadMore = () => {
    if (!loading) {
      setPage(page + 1);
      loadVideos();
    }
  };
  
  const handleRegionChange = (region) => {
    setSelectedRegion(region);
  };
  
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <SearchBar />
      
      <View style={styles.filterContainer}>
        <RegionSelector 
          selectedRegion={selectedRegion} 
          onRegionChange={handleRegionChange} 
        />
        <CategorySelector 
          selectedCategory={selectedCategory} 
          onCategoryChange={handleCategoryChange} 
        />
      </View>
      
      <VideoWall
        videos={videos}
        loading={loading}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        onLoadMore={handleLoadMore}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={[styles.emptyText, { color: colors.text }]}>
              No videos found
            </Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  videoGrid: {
    padding: 5,
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 16,
  },
});

export default HomeScreen;