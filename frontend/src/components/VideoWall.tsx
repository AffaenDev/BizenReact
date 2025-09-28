import React, { useContext, useState, useEffect } from 'react';
import { FlatList, ActivityIndicator, View, StyleSheet, Dimensions } from 'react-native';
import ThemeContext from '../context/ThemeContext';
import { themes } from '../theme';
import VideoCard from './VideoCard';

const { width } = Dimensions.get('window');

interface VideoWallProps {
  videos: any[];
  loading: boolean;
  refreshing: boolean;
  onRefresh: () => void;
  onLoadMore: () => void;
  ListEmptyComponent?: React.ReactNode;
}

const VideoWall = ({ 
  videos, 
  loading, 
  refreshing, 
  onRefresh, 
  onLoadMore,
  ListEmptyComponent 
}: VideoWallProps) => {
  const { theme } = useContext(ThemeContext);
  const colors = themes[theme];
  
  const renderFooter = () => {
    if (!loading) return null;
    
    return (
      <View style={styles.footer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  };
  
  return (
    <FlatList
      data={videos}
      renderItem={({ item }) => <VideoCard video={item} />}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      contentContainerStyle={styles.videoGrid}
      onRefresh={onRefresh}
      refreshing={refreshing}
      onEndReached={onLoadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={renderFooter}
      ListEmptyComponent={ListEmptyComponent}
    />
  );
};

const styles = StyleSheet.create({
  videoGrid: {
    padding: 5,
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default VideoWall;