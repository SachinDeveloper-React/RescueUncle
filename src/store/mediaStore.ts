import {create} from 'zustand';
import {Asset} from 'react-native-image-picker';

type PhotoSlot = 'front' | 'back' | 'left' | 'right';
type VideoSlot = 'before' | 'after';

interface MediaStore {
  photos: Record<PhotoSlot, Asset | null>;
  videos: Record<VideoSlot, Asset | null>;
  setPhoto: (slot: PhotoSlot, asset: Asset | null) => void;
  setVideo: (slot: VideoSlot, asset: Asset | null) => void;
  resetMedia: () => void;
}

const initialPhotos = {
  front: null,
  back: null,
  left: null,
  right: null,
} satisfies Record<PhotoSlot, Asset | null>;

const initialVideos = {
  before: null,
  after: null,
} satisfies Record<VideoSlot, Asset | null>;

export const useMediaStore = create<MediaStore>(set => ({
  photos: {...initialPhotos},
  videos: {...initialVideos},

  setPhoto: (slot, asset) =>
    set(state => ({
      photos: {
        ...state.photos,
        [slot]: asset,
      },
    })),

  setVideo: (slot, asset) =>
    set(state => ({
      videos: {
        ...state.videos,
        [slot]: asset,
      },
    })),

  resetMedia: () =>
    set({
      photos: {...initialPhotos},
      videos: {...initialVideos},
    }),
}));
