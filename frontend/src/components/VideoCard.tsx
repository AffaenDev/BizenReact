import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import ThemeContext from '../context/ThemeContext';
import { themes } from '../theme';

const { width } = Dimensions.get('window');
const cardWidth = (width - 30) / 2;

interface VideoCardProps {
  video: {
    id: number;
    title: string;
    thumbnail: string;
    gif: string;
    publisher: string;
    price: number;
    location: string;
    category: string;
    region: string;
  };
}

const VideoCard = ({ video }: VideoCardProps) => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const colors = themes[theme];
  const navigation = useNavigation();
  const [isHovered, setIsHovered] = useState(false);
  
  const handlePress = () => {
    navigation.navigate('VideoDetail', { videoId: video.id });
  };
  
  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}
      onPress={handlePress}
      onPressIn={() => setIsHovered(true)}
      onPressOut={() => setIsHovered(false)}
    >
      <FastImage
        style={styles.thumbnail}
        source={{
          uri: isHovered ? video.gif : video.thumbnail,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      
      <View style={styles.content}>
        <Text 
          style={[styles.title, { color: colors.text }]} 
          numberOfLines={2}
        >
          {video.title}
        </Text>
        
        <Text style={[styles.publisher, { color: colors.text }]}>
          {t('video.by')}: {video.publisher}
        </Text>
        
        <View style={styles.details}>
          <Text style={[styles.price, { color: colors.accent }]}>
            ${video.price.toLocaleString()}
          </Text>
          
          <Text style={[styles.location, { color: colors.text }]}>
            {video.location}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: cardWidth,
    margin: 5,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
  },
  thumbnail: {
    width: '100%',
    height: 120,
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  publisher: {
    fontSize: 12,
    marginBottom: 5,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 12,
  },
});

export default VideoCard;