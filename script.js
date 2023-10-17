window.onloadTurnstileCallback = function() {
  turnstile.render('#example-container', {
    sitekey: '<0x4AAAAAAALvR0V7AU7yng5g>',
    callback: function(token) {
      console.log(`Challenge Success ${token}`);
    },
  });
};