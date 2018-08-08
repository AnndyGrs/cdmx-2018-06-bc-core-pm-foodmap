const splash = () => {
  setInterval(function() {
    console.log('Hoola');
    location.assign('views/home.html');
  }, 3500);
};

splash();