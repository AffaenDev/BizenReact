import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTranslation } from 'react-i18next';
import ThemeContext from '../context/ThemeContext';
import { themes } from '../theme';
import { mockVideos } from '../utils/mockData';

const VideoDetailScreen = ({ route }) => {
  const { videoId } = route.params;
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const colors = themes[theme];
  
  // Find the video from mock data
  const video = mockVideos.find(v => v.id === videoId);
  
  if (!video) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Text style={[styles.errorText, { color: colors.text }]}>Video not found</Text>
      </View>
    );
  }
  
  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <FastImage
        style={styles.video}
        source={{ uri: video.gif }}
        resizeMode={FastImage.resizeMode.cover}
      />
      
      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.text }]}>{video.title}</Text>
        
        <View style={styles.publisherRow}>
          <Text style={[styles.publisherLabel, { color: colors.text }]}>
            {t('video.by')}:
          </Text>
          <Text style={[styles.publisherName, { color: colors.primary }]}>
            {video.publisher}
          </Text>
        </View>
        
        <View style={[styles.infoCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <View style={styles.infoRow}>
            <Icon name="attach-money" size={20} color={colors.accent} />
            <Text style={[styles.infoText, { color: colors.text }]}>
              {t('video.price')}: ${video.price.toLocaleString()}
            </Text>
          </View>
          
          <View style={styles.infoRow}>
            <Icon name="location-on" size={20} color={colors.primary} />
            <Text style={[styles.infoText, { color: colors.text }]}>
              {t('video.location')}: {video.location}
            </Text>
          </View>
          
          <View style={styles.infoRow}>
            <Icon name="category" size={20} color={colors.primary} />
            <Text style={[styles.infoText, { color: colors.text }]}>
              {t(`categories.${video.category}`)}
            </Text>
          </View>
        </View>
        
        <Text style={[styles.abstractTitle, { color: colors.text }]}>Description:</Text>
        <Text style={[styles.abstract, { color: colors.text }]}>{video.abstract}</Text>
        
        <TouchableOpacity 
          style={[styles.contactButton, { backgroundColor: colors.primary }]}
        >
          <Text style={styles.contactButtonText}>Contact Seller</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    width: '100%',
    height: 250,
  },
  content: {
    padding: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  publisherRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  publisherLabel: {
    fontSize: 16,
    marginRight: 5,
  },
  publisherName: {
    fontSize: 16,
    fontWeight: '500',
  },
  infoCard: {
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    marginLeft: 10,
  },
  abstractTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  abstract: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  contactButton: {
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
  },
});

export default VideoDetailScreen;