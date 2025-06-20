import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../../constants';
import {
  AskForLeaveIcon,
  CallIcon,
  EarningIcon,
  EditProfileIcon,
  EmailIcon,
  FaqIcon,
  LogoutIcon,
  OrderHistoryIcon,
  PrivacyIcon,
  ReferIcon,
  RightIcon,
  StarIcon,
  SupportIcon,
  TermAndConditionIcon,
  TransactionIcon,
  UserIcon,
} from '../../../assets';
import {verticalScale, moderateScale} from 'react-native-size-matters';
import {navigate} from '../../../navigation';

const options = [
  {
    id: 1,
    leftIcon: EditProfileIcon,
    title: 'Edit profile',
    navigate: 'EditProfile',
  },
  {
    id: 2,
    leftIcon: TransactionIcon,
    title: 'Transaction',
    navigate: 'Transaction',
  },
  {
    id: 3,
    leftIcon: OrderHistoryIcon,
    title: 'Order History',
    navigate: 'OrderHistory',
  },
  {
    id: 11,
    leftIcon: EarningIcon,
    title: 'Earnings',
    navigate: 'Earnings',
  },
  {
    id: 4,
    leftIcon: ReferIcon,
    title: 'Refer and Earn',
    navigate: 'ReferAndEarn',
  },
  {id: 5, leftIcon: SupportIcon, title: 'Support', navigate: 'Support'},
  {id: 6, leftIcon: FaqIcon, title: 'Faq', navigate: 'Faq'},
  {
    id: 7,
    leftIcon: TermAndConditionIcon,
    title: 'Terms And Conditions',
    navigate: 'TermsAndCondition',
  },
  {
    id: 8,
    leftIcon: PrivacyIcon,
    title: 'Privacy',
    navigate: 'PrivacyAndPolicy',
  },
  {
    id: 9,
    leftIcon: AskForLeaveIcon,
    title: 'Ask For Leave',
    navigate: 'AskForLeave',
  },
  {id: 10, leftIcon: LogoutIcon, title: 'Logout', navigate: 'EditProfile'},
];

const ProfileHeader = () => (
  <View style={styles.profileWrapper}>
    <View style={styles.avatarBorder}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2960&auto=format&fit=crop',
        }}
        style={styles.avatar}
        resizeMode="cover"
      />
    </View>
    <View style={styles.infoSection}>
      <View style={styles.row}>
        <View style={styles.iconWrapper}>
          <UserIcon />
        </View>
        <Text style={styles.text}>Sachin Chaurasiya</Text>
        <View style={[styles.row, styles.star, {marginBottom: 0}]}>
          <Text style={styles.ratingText}>4.9</Text>
          <StarIcon />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.iconWrapper}>
          <CallIcon />
        </View>
        <Text style={styles.text}>+91 8700707668</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.iconWrapper}>
          <EmailIcon />
        </View>
        <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
          sachinkumarq87@gmail.com
        </Text>
      </View>
    </View>
  </View>
);

const OptionItem = ({item}: any) => (
  <TouchableOpacity
    style={styles.optionItem}
    onPress={() => navigate(item.navigate)}>
    <View style={styles.optionLeft}>
      <item.leftIcon />
      <Text style={styles.optionText}>{item.title}</Text>
    </View>
    <RightIcon />
  </TouchableOpacity>
);

const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={options}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <>
            <ProfileHeader />
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
    borderColor: '#FB9A4D',
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
    color: '#2B2E35',
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
    color: '#2B2E35',
  },
});
