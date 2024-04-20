class Axios{
  constructor(){
  }

  request(config){
    return new Promise(resolve=>{
      const {url='', method='get', data} = config;
      // 发送ajax
      const xhr = new XMLHttpRequest();
      xhr.open(method, url, true);
      // xhr.onload = function(){
      //   console.log(xhr.responseText);
      //   resolve(xhr.responseText);
      // }
      xhr.send(data);
    })
  }
}

function createAxiosFn(){
  let axios = new Axios();
  let req = axios.request.bind(axios);
  return req;
}

let axios = createAxiosFn();

axios({
  url: 'https://test.vg.woa.com/api/raptorv2/dev-efficiency/list',
  method: 'get',
  data:{
  name:'sunlliu'
}
})




