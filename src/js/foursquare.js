let mainUrl = 'https://api.foursquare.com/v2/venues/search?v=20161016&ll=';
let lat = 19.43;
let lng = -99.13;
let queryS = 'pizza';

let url = mainUrl + lat + '%2C%20' + lng + '&query=' + queryS + 
'&intent=browse&radius=2000&limit=15&client_id=IXDFMKCHXF2XOTGBHAF4F2SEQKVIFPK5W0TFQKJPGQ0I4DYW&client_secret=SBBKRTJS044DFMSOVP1ZUZXRXJSFZZM3H434OZTMAM5EPVEJ';

fetch(url)
  .then(restaurant => restaurant.json())
  .then(res => {
    console.log(res);
  });

const getData = (restaurant) => {
  let firstItem = {};
  let secondItem;    
  let thirdItem;
  let fourItem;
  let fithItem;

  firstItem = object.keys(restaurant);
  console.log(firstItem);  
};

getData();