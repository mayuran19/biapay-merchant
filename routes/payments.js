var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.post('/token', function(req, res, next) {
  //send request to bia
  console.log("sending request to bia")
  var myJSONObject = {
      "clientId":"bF33YuQn6SNwO0gNq6xjisCYo0/J0ErtVnDBxhaCQ64=",
      "clientSecret": "bF33YuQn6SNwO0gNq6xjijiucDl0PdxFlEZCq2PxZT7DjBoaLT8qcmeU59oJXMN/",
      "customerEmail": "mayuran19@gmail.com",
      "customerMobile": "91383795"
  };
  request({
      url: "http://localhost:3000/gateway/token",
      method: "POST",
      json: true,   // <--Very important!!!
      headers: {
        "content-type": "application/json"
      },
      body: myJSONObject
  }, function (error, response, body){
      console.log(response.body)
      console.log(response);
      //res.redirect(response.body.url + "?Authorization=" + response.body.accessToken)
      res.render('biapay', { token: response.body.accessToken });
      return
  });
});

router.get('/choosePaymentMethod', function(req, res, next) {
  //send request to bia
  res.render('choosePaymentMethod', { title: 'Express' });
});

module.exports = router;
