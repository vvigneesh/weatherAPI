const result=document.getElementById('display')
//result.innerHTML="updated Result"
function city(){
    const API_URL       = 'http://api.weatherapi.com/v1/current.json';
    const API_KEY       = '13e0601b38de405596780109213008';
    var LOCATION_CODE = document.getElementById('input1').value;
    console.log(LOCATION_CODE);
    var FULL_API_URL  = `${API_URL}?key=${API_KEY}&q=${LOCATION_CODE}`;
    console.log(FULL_API_URL);
    axios
        .get(FULL_API_URL)
        .then(Response => {
            result.innerHTML='Temprature is '+Response.data.current.temp_c +' degree celcius';
        })
        .catch(error => {
            result.innerHTML="API doesn't find the City";
        })
//    return LOCATION_CODE
}
//var location_code=city()
