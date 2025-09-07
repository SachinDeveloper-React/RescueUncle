import React, {useEffect} from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors, options} from '../../../constants';
import {CallIcon, EmailIcon, RightIcon, UserIcon} from '../../../assets';
import {verticalScale, moderateScale} from 'react-native-size-matters';
import {navigate} from '../../../navigation';
import {useDetailsForm} from '../../../hooks';
import {PersonalDetails, useAuthStore} from '../../../store';
import LottieView from 'lottie-react-native';

type ProfileHeaderProps = {
  data: PersonalDetails;
  loading: {
    loading: boolean;
    error: string | null;
  };
};
const ProfileHeader = ({data, loading}: ProfileHeaderProps) => (
  <View style={styles.profileWrapper}>
    {/* <View style={styles.avatarBorder}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2960&auto=format&fit=crop',
        }}
        style={styles.avatar}
        resizeMode="cover"
      />
    </View> */}
    {loading.loading ? (
      <LottieView
        source={require('../../../assets/animations/dot.json')}
        autoPlay
        loop
        renderMode="AUTOMATIC"
        style={styles.lottie}
        resizeMode="cover"
      />
    ) : (
      <View style={styles.infoSection}>
        <View style={styles.row}>
          <View style={styles.iconWrapper}>
            <UserIcon />
          </View>
          <Text
            style={[
              styles.text,
              {
                textTransform: 'capitalize',
              },
            ]}>
            {data.full_name}
          </Text>
          {/* <View style={[styles.row, styles.star, {marginBottom: 0}]}>
            <Text style={styles.ratingText}>4.9</Text>
            <StarIcon />
          </View> */}
        </View>
        <View style={styles.row}>
          <View style={styles.iconWrapper}>
            <CallIcon />
          </View>
          <Text style={styles.text}>+{data.user_mobile}</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.iconWrapper}>
            <EmailIcon />
          </View>
          <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
            {data.blood_group}
          </Text>
        </View>
      </View>
    )}
  </View>
);

const OptionItem = ({
  item,
}: {
  item: {
    id: number;
    leftIcon: any;
    title: string;
    navigate: string | any;
  };
}) => (
  <TouchableOpacity
    style={styles.optionItem}
    onPress={() => {
      if (item.title === 'Logout') {
        const {logout} = useAuthStore.getState();
        logout();
      } else {
        navigate(item.navigate);
      }
    }}>
    <View style={styles.optionLeft}>
      <item.leftIcon />
      <Text style={styles.optionText}>{item.title}</Text>
    </View>
    <RightIcon />
  </TouchableOpacity>
);

const AccountScreen = () => {
  const {state, personalDetails, fetchProfileDetails} = useDetailsForm();

  useEffect(() => {
    fetchProfileDetails();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={options}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <>
            <ProfileHeader data={personalDetails} loading={state.profile} />
            <Text style={styles.optionsTitle}>Options</Text>
          </>
        )}
        renderItem={({item}) => <OptionItem item={item} />}
      />
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.inputBackground,
    paddingHorizontal: moderateScale(16),
  },
  profileWrapper: {
    flexDirection: 'row',
    paddingTop: moderateScale(16),
    width: '100%',
  },
  avatarBorder: {
    width: moderateScale(93),
    height: moderateScale(93),
    borderRadius: moderateScale(93 / 2),
    borderWidth: 1,
    borderColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: moderateScale(12),
  },
  avatar: {
    width: moderateScale(84.55),
    height: moderateScale(84.55),
    borderRadius: moderateScale(84.55 / 2),
  },
  infoSection: {
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(8),
    flexWrap: 'nowrap',
    gap: 10,
  },
  iconWrapper: {
    width: moderateScale(24),
    height: moderateScale(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    fontSize: moderateScale(16),
    color: colors.textPrimary,
  },
  ratingText: {
    color: '#051126',
    fontSize: moderateScale(16),
  },
  star: {
    gap: moderateScale(8),
    backgroundColor: '#fff',
    paddingHorizontal: moderateScale(6),
    height: '100%',
    borderRadius: 999,
    alignItems: 'center',
  },
  optionsTitle: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    marginVertical: moderateScale(20),
    color: '#292D32',
  },
  optionItem: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: moderateScale(16),
    marginBottom: verticalScale(10),
    borderRadius: moderateScale(8),
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    paddingHorizontal: moderateScale(8),
    fontSize: moderateScale(16),
    color: colors.textPrimary,
  },
  lottie: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 0.3,
    alignItems: 'center',
  },
});
