function throttle(callback, delay) {
    let lastTime = 0; 
    return function() {
      const now = new Date().getTime(); 
  
      if (now - lastTime >= delay) {
        callback(); 
        lastTime = now; 
      }
    };
  }
    function sayHello() {
    console.log("Hello!");
  }
  const throttledSayHello = throttle(sayHello, 2000);
  throttledSayHello(); 
  throttledSayHello();
  setTimeout(throttledSayHello, 3000); 
  