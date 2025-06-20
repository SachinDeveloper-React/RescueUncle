import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {moderateScale} from '../utils/scale';
import {RightIcon} from '../assets';

interface TransactionCardProps {
  image: any;
  title: string;
  date: string;
  warranty: string;
  onPress?: () => void;
}

const CustomCard: React.FC<TransactionCardProps> = ({
  image,
  title,
  date,
  warranty,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.image} resizeMode="contain" />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.warranty}>Warranty: {warranty}</Text>
      </View>
      <RightIcon />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: moderateScale(12),
    padding: moderateScale(12),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(12),
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  image: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(8),
    marginRight: moderateScale(12),
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    color: '#000',
  },
  date: {
    fontSize: moderateScale(12),
    color: '#777',
    marginTop: moderateScale(4),
  },
  warranty: {
    fontSize: moderateScale(12),
    color: '#555',
    marginTop: moderateScale(2),
  },
  arrowIcon: {
    width: moderateScale(16),
    height: moderateScale(16),
    tintColor: '#888',
  },
});

export default CustomCard;
