import {Asset} from 'react-native-image-picker';
import {errorHandler, responseHandler} from '../../utils';
import {ServiceApi} from '../ApiClient';
import {URLS} from '../endpoints';

const MediaApi = {
  updateServiceDevicePickupCustomer: async (body: {
    service_id: string;
    customer_pick_description: string;
    customer_pick_photo_1: Asset | null;
    customer_pick_photo_2: Asset | null;
    customer_pick_photo_3: Asset | null;
    customer_pick_photo_4: Asset | null;
    customer_pick_video_1: Asset | null;
    customer_pick_video_2: Asset | null;
    pickup_otp_customer: string;
  }) => {
    try {
      var formdata = new FormData();
      const {
        customer_pick_description,
        customer_pick_photo_1,
        customer_pick_photo_2,
        customer_pick_photo_3,
        customer_pick_photo_4,
        customer_pick_video_1,
        customer_pick_video_2,
        pickup_otp_customer,
        service_id,
      } = body;

      const getMediaFormData = (
        asset: Asset | null,
        fallbackName: string,
        fallbackType: string,
      ) => {
        if (asset?.uri) {
          return {
            uri: asset.uri,
            name: asset.fileName ?? fallbackName,
            type: asset.type ?? fallbackType,
          } as any;
        }
        return null;
      };

      formdata.append('service_id', service_id);
      formdata.append('customer_pick_description', customer_pick_description);

      const photos = [
        {key: 'customer_pick_photo_1', asset: customer_pick_photo_1},
        {key: 'customer_pick_photo_2', asset: customer_pick_photo_2},
        {key: 'customer_pick_photo_3', asset: customer_pick_photo_3},
        {key: 'customer_pick_photo_4', asset: customer_pick_photo_4},
      ];

      const videos = [
        {key: 'customer_pick_video_1', asset: customer_pick_video_1},
        {key: 'customer_pick_video_2', asset: customer_pick_video_2},
      ];

      photos.forEach(({key, asset}, index) => {
        const file = getMediaFormData(
          asset,
          `photo${index + 1}.jpg`,
          'image/jpeg',
        );
        if (file) formdata.append(key, file);
      });

      videos.forEach(({key, asset}, index) => {
        const file = getMediaFormData(
          asset,
          `video${index + 1}.mp4`,
          'video/mp4',
        );
        if (file) formdata.append(key, file);
      });

      formdata.append('pickup_otp_customer', pickup_otp_customer);

      const response = await ServiceApi.postForm(
        URLS.UPLOADMEDIA.UPDATESERVICEDEVICEPICKUPCUSTOMER,
        formdata,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      return responseHandler(response);
    } catch (error) {
      return errorHandler(error);
    }
  },
};

export default MediaApi;
