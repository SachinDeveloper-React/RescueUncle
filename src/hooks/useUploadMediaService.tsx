import React, {useRef, useState} from 'react';
import {useMediaStore, useOrderDetailsStore} from '../store';
import {MediaApi} from '../networking';
import {TextInput} from 'react-native';
import {showMessage} from '../utils';
import {navigate} from '../navigation';

type Props = {};
const OTP_LENGTH = 6;
const useUploadMediaService = (description: string) => {
  const {photos, videos, resetMedia} = useMediaStore();
  const {data, reset} = useOrderDetailsStore();
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(''));
  const inputs = useRef<TextInput[]>([]);
  const [loading, setLoading] = useState(false);
  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    if (text && index < OTP_LENGTH - 1) {
      inputs.current[index + 1]?.focus();
    }
  };
  const updateServiceDevicePickupCustomerMedia = async () => {
    try {
      setLoading(true);
      console.log({
        service_id: data[0].service_id.toString(),
        customer_pick_description: description,
        customer_pick_photo_1: photos.front,
        customer_pick_photo_2: photos.back,
        customer_pick_photo_3: photos.left,
        customer_pick_photo_4: photos.right,
        customer_pick_video_1: videos.after,
        customer_pick_video_2: videos.before,
        pickup_otp_customer: otp.join(''),
      });
      const response = await MediaApi.updateServiceDevicePickupCustomer({
        service_id: data[0].service_id.toString(),
        customer_pick_description: description,
        customer_pick_photo_1: photos.front,
        customer_pick_photo_2: photos.back,
        customer_pick_photo_3: photos.left,
        customer_pick_photo_4: photos.right,
        customer_pick_video_1: videos.after,
        customer_pick_video_2: videos.before,
        pickup_otp_customer: otp.join(''),
      });

      console.log('response', response);

      if (response.code === 200) {
        showMessage(response.data.message);
        navigate('PickupConfirmation');
        resetMedia();
        // reset();
      } else {
        showMessage(response.data.message || 'Unexpected Error');
      }
    } catch (error: any) {
      showMessage(error.message || 'Unexpected Error');
    } finally {
      setLoading(false);
    }
  };

  return {
    inputs,
    otp,
    handleChange,
    updateServiceDevicePickupCustomerMedia,
    phone: data[0].customer_details.mobile,
    loading,
  };
};

export default useUploadMediaService;
