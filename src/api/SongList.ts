import request from '@/utils/request';

export function getUserMusicList(uid: number) {
  return request({
    method: 'GET',
    url: '/user/playlist',
    params: { uid, limit: 100 },
  });
}
