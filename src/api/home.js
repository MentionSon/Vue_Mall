import axios from 'axios';
import jsonp from 'assets/js/jsonp';
import {SUCCESS_CODE, TIMEOUT, HOME_RECOMMEND_PAGE_SIEZE, jsonpOptions} from './config';

/* 打乱数组的顺序 */
const shuffle = (arr) => {
  const arrLength = arr.length;
  let i = arrLength;
  let rndNum;

  while (i--) {
    if (i !== (rndNum = Math.floor(Math.random() * arrLength))) {
      [arr[i], arr[rndNum]] = [arr[rndNum], arr[i]];
    }
  }

  return arr; 
}

/*  获取幻灯片的数据 */
export const getHomeSlides = () => {
  return axios.get('https://www.imooc.com/api/home/slider', {
    timeout: TIMEOUT
  }).then(res => {
    if (res.data.code === SUCCESS_CODE) {
      let sliders = res.data.slider; 
      const slider = sliders[Math.floor(Math.random() * sliders.length)];
      sliders = shuffle(sliders.filter(() => Math.random() >= 0.5));

      if (sliders.length === 0) {
        sliders[0] = slider;
      }
 
      return sliders;       
    }

    throw new Error('failed in loading data!');
  }).catch(err => {
    if (err) {
      console.log(err);
    }

    return [
      {
        linkUrl: 'https://www.baidu.com',
        picUrl: require('assets/img/404.png')
      }
    ];
  });
};

/** 获取热门推荐数据
  * type -- jsonp */
export const getHomeRecommend = (page = 1, psize = HOME_RECOMMEND_PAGE_SIEZE ) => {
  const url = 'https://ju.taobao.com/json/tg/ajaxGetItemsV2.json';
  const params = {
    page,
    psize,
    type: 0,
    frontCatId: ''
  };

  return jsonp(url, params, jsonpOptions).then(res => {
    if (res.code === '200') {
      return res;
    }

    throw new Error('failed in loading data!');
  }).catch(err => {
    if (err) {
      console.log(err);
    } 
  });
}