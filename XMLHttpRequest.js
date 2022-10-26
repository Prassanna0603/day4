//XMLHttpRequest

var request = new XMLHttpRequest();
request.open ('GET','https://restcountries.com/v3.1/all',true)
request.send ();
request.onload = function(){
 let data = JSON.parse(request.response)
  console.log(data)
  for( i=0; i<data.length; i++ ){
  console.log("country name:"+ data[i].name.common);
  console.log("country flag:"+data[i].flag);
  console.log("country capital:"+data[i].capital);
  console.log("country subregion:"+data[i].subregion);
  console.log("country population:"+data[i].population);
  console.log("country region:"+data[i].region);

}
}


