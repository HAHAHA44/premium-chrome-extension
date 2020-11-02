if (!window.extensionHandler) {
  window.extensionHandler = () => {

    if (!window.flag) {
      window.flag = 1;
      console.log('start interval output');
      window.clientInterval = setInterval(() => {
        console.log(store.call.client);
      }, 1000);
    } else {
      window.flag = 0;
      console.log('stop interval output');
      clearInterval(window.clientInterval);

    }
  }
}

window.extensionHandler();
