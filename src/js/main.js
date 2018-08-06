const splash = () => {
  let preload = document.getElementById('preload');
  let loading = 0;
  let id = setInterval(frame, 64);
  const frame = () => {
    if (loading === 100) {
      console.log('Hoola');
      clearInterval(id);
      window.href('views/home.html', '_self');
    } else {
      loading = loading++;
      if (loading === 90) {
        preload.style.animation = 'fadeout 1s ease';
      }
    }
  };
};

splash();