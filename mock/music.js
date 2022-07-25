import { random } from 'lodash';
import mockjs from 'mockjs';
import path from 'path';
// res.setHeader('Access-Control-Allow-Origin', '*');

const dataList = [
  {
    id: 0,
    isNull: false,
    name: 'flame',
    img: `https://zhiccc.net/images/parallax.png`,
    url: 'https://res01.hycdn.cn/c85f5ac3f560dabae92802ad82cef409/62DE3585/siren/audio/20220314/bb3fa6f24efaf63aaad76d0f6bafc0c2.mp3',
  },
  {
    id: 1,
    isNull: false,
    name: 'alice',
    img: `https://www.ussjackdaw.com/usr/uploads/2020/05/856658260.png`,
    url: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3',
  },
  {
    id: 2,
    isNull: false,
    name: 'light',
    author: 'chen xue ran',
    img: `http://baiyun.work/img/background.jpg`,
    url: 'https://res01.hycdn.cn/12666f98f5989256837b248f940ca7c1/62DE7D4C/siren/audio/20220503/ae991b9f7fab14be9a7b1043512bb1d4.mp3',
  },
];

export default {
  'GET /api/getMusic': (req, res) => {
    setTimeout(() => {
      if (dataList[parseInt(req.query.id)]) {
        res.send(dataList[parseInt(req.query.id)]);
      } else {
        res.statusCode = 404;
        res.send('Not Found');
      }
    }, 1000);
  },
};
