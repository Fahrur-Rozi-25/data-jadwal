
const url = 'http://127.0.0.1/API/public/api/me'
const methods = 'GET'
const token = 'Bearer 5|McCz05ChA0gMoh91jdNdGczBwm8HuWEQkZdaIZoI'



fetch(url, {
  headers: {
    'Authorization': token
  } ,method: methods
})
  .then(function(response) {
    if (response.ok) {
      return response.json(); // Mengembalikan respons sebagai objek JSON
    }
    throw new Error('Error: ' + response.status);
  })
  .then(function(data) {
    // Lakukan sesuatu dengan data response
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });
