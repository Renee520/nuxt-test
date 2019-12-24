export default function ({ $axios, redirect }) {
  let config = {
    // baseURL: 'http://192.168.101.4:3000',
    timeout: 60 * 1000, // Timeout
    // withCredentials: true, // Check cross-site Access-Control
  };
  
  // const _axios = $axios.create(config); //创建axios实例

  $axios.onRequest(config => {
    console.log('Making request to ' + config.url);
    return config;
  });

  $axios.interceptors.response.use(
    // 后台返回的参数
    function(response) {
      // Do something with response data
      console.log('后台返回：', response);
      // return response;
      if (response.status === 404) {
        return {
          status: 0,
          msg: '未找到服务',
        };
      } else if (response.status === 500) {
        return {
          status: 0,
          msg: '服务出错',
        };
      } else if (response.data) {
        return response.data;
      } else {
        return {
          status: '0',
          msg: '未知错误',
        }
      }
    },
    function(error) {
      // Do something with response error
      return Promise.reject(error);
    }
  );

  window.$axios = $axios;

  // $axios.onError(error => {
  //   const code = parseInt(error.response && error.response.status)
  //   if (code === 400) {
  //     redirect('/400')
  //   }
  // })
}