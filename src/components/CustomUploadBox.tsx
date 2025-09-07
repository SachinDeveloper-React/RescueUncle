// import React from 'react';
// import {
//   Dimensions,
//   Image,
//   PixelRatio,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import {CameraIcon, CrossIcon, PreviewIcon} from '../assets';
// import {colors, spacing, typography} from '../constants';

// type Props = {
//   label: string;
//   imageUri: string | null;
//   onPress: () => void;
//   onRemoveImage?: () => void;
//   onPreviewPress?: () => void;
//   uploadText?: string;
//   isError?: boolean;
// };

// const UploadBox: React.FC<Props> = ({
//   label,
//   imageUri,
//   onPress,
//   onRemoveImage,
//   uploadText = 'Upload Photo',
//   onPreviewPress,
//   isError = false,
// }) => {
//   return (
//     <TouchableOpacity
//       style={[
//         styles.uploadBtn,
//         {
//           borderColor: isError ? colors.error : colors.inputBorder,
//         },
//       ]}
//       onPress={onPress}
//       accessibilityLabel={label}
//       accessibilityHint={`Tap to upload the ${label.toLowerCase()}`}>
//       <View style={styles.content}>
//         <Text>{label}</Text>
//         <View>
//           {imageUri ? (
//             <>
//               <View style={styles.imageContainer}>
//                 <Image
//                   source={{uri: imageUri}}
//                   style={styles.image}
//                   resizeMode="cover"
//                 />
//               </View>
//               <TouchableOpacity
//                 onPress={onRemoveImage}
//                 style={[styles.uploadInner, {alignSelf: 'center'}]}>
//                 <Text style={styles.uploadText}>Uploaded</Text>
//                 <CrossIcon />
//               </TouchableOpacity>
//             </>
//           ) : (
//             <View
//               style={[
//                 styles.uploadInner,
//                 {
//                   borderColor: isError ? colors.error : colors.primary,
//                 },
//               ]}>
//               <CameraIcon color={isError ? colors.error : colors.primary} />
//               <Text
//                 style={[
//                   styles.uploadText,
//                   {
//                     color: isError ? colors.error : colors.primary,
//                   },
//                 ]}>
//                 {uploadText}
//               </Text>
//             </View>
//           )}
//         </View>
//       </View>

//       {imageUri && (
//         <TouchableOpacity
//           onPress={onPreviewPress}
//           style={{
//             position: 'absolute',
//             top: 10,
//             right: 10,
//             zIndex: 9999999,
//           }}>
//           <PreviewIcon />
//         </TouchableOpacity>
//       )}
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   uploadBtn: {
//     flex: 1,
//     backgroundColor: colors.inputBackground,
//     borderWidth: 1 * PixelRatio.get(),

//     borderStyle: 'dotted',
//     borderRadius: 8,
//     justifyContent: 'center',
//     alignItems: 'center',
//     position: 'relative',
//   },
//   content: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'space-around',
//   },
//   imageContainer: {
//     width: Dimensions.get('window').width * 0.5,
//     height: Dimensions.get('window').width * 0.3,
//     marginTop: spacing.xxs,
//     borderWidth: 1 * PixelRatio.get(),
//     borderColor: colors.inputBorder,
//     borderStyle: 'dotted',
//     borderRadius: 8,
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 8,
//   },
//   uploadInner: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 0.2 * PixelRatio.get(),
//     paddingVertical: spacing.xxs,
//     paddingHorizontal: spacing.sm,
//     borderRadius: 50,
//     gap: spacing.xxs,
//     borderColor: colors.primary,
//     backgroundColor: colors.inputBackground,
//     marginTop: spacing.xxs,
//   },
//   uploadText: {
//     color: colors.primary,
//     fontSize: typography.body.fontSize,
//     fontWeight: '500',
//   },
// });

// export default UploadBox;

import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  PixelRatio,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CameraIcon, CrossIcon, PreviewIcon} from '../assets';
import {colors, spacing, typography} from '../constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
type Props = {
  label: string;
  imageUri: string | null;
  onPress: () => void;
  onRemoveImage?: () => void;
  onPreviewPress?: () => void;
  uploadText?: string;
  isError?: boolean;
};

const UploadBox: React.FC<Props> = ({
  label,
  imageUri,
  onPress,
  onRemoveImage,
  uploadText = 'Upload Photo',
  onPreviewPress,
  isError = false,
}) => {
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.uploadBtn,
          {
            borderColor: isError ? colors.error : colors.inputBorder,
          },
        ]}
        onPress={onPress}
        accessibilityLabel={label}
        accessibilityHint={`Tap to upload the ${label.toLowerCase()}`}>
        {imageUri ? (
          <View style={styles.imageContainer}>
            <ImageBackground
              source={{uri: imageUri}}
              style={styles.image}
              resizeMode="cover">
              <TouchableOpacity
                hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                onPress={onRemoveImage}
                style={styles.closeButton}>
                <AntDesign name="close" size={16} color="#fff" />
              </TouchableOpacity>

              <TouchableOpacity
                hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                style={[
                  styles.uploadBadge,
                  {
                    borderColor: isError ? colors.error : colors.primary,
                  },
                ]}
                onPress={onPreviewPress}>
                <CameraIcon color={isError ? colors.error : colors.primary} />
                <Text
                  style={[
                    styles.uploadText,
                    {
                      color: isError ? colors.error : colors.primary,
                    },
                  ]}>
                  Preview
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        ) : (
          <View style={styles.content}>
            <Text>{label}</Text>

            <View
              style={[
                styles.uploadInner,
                {
                  borderColor: isError ? colors.error : colors.primary,
                },
              ]}>
              <CameraIcon color={isError ? colors.error : colors.primary} />
              <Text
                style={[
                  styles.uploadText,
                  {
                    color: isError ? colors.error : colors.primary,
                  },
                ]}>
                {uploadText}
              </Text>
            </View>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  uploadBtn: {
    flex: 1,
    backgroundColor: colors.inputBackground,
    borderWidth: 1 * PixelRatio.get(),

    borderStyle: 'dotted',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    padding: 5,
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    overflow: 'hidden',
  },
  uploadBadge: {
    position: 'absolute',
    bottom: 10,
    left: '50%',
    transform: [{translateX: -50}], // shifts it back by 50% of its own width
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.2 * PixelRatio.get(),
    paddingVertical: spacing.xxs,
    paddingHorizontal: spacing.sm,
    borderRadius: 50,
    gap: spacing.xxs,
    borderColor: colors.primary,
    marginTop: spacing.xxs,
    backgroundColor: 'rgba(255,255,255,0.7)',
  },

  uploadText: {
    color: '#fff',
    fontSize: 14,
    marginRight: 6,
  },
  uploadInner: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.2 * PixelRatio.get(),
    paddingVertical: spacing.xxs,
    paddingHorizontal: spacing.sm,
    borderRadius: 50,
    gap: spacing.xxs,
    borderColor: colors.primary,
    backgroundColor: colors.inputBackground,
    marginTop: spacing.xxs,
  },
  // uploadText: {
  //   color: colors.primary,
  //   fontSize: typography.body.fontSize,
  //   fontWeight: '500',
  // },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    borderWidth: 1,
    padding: 6,
    borderColor: '#fff',
    borderRadius: 100,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
});

export default UploadBox;
