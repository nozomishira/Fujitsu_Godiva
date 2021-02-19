const firebaseConfig = {
  apiKey: "AIzaSyBCcHqzQOdcUq17a9ecaCeNz_k6mtOQwyQ",
  authDomain: "fujitsuhackathon-2498f.firebaseapp.com",
  projectId: "fujitsuhackathon-2498f",
  storageBucket: "fujitsuhackathon-2498f.appspot.com",
  messagingSenderId: "24195856437",
  appId: "1:24195856437:web:5684860ae356a1231b997c",
  measurementId: "G-5BRYYBXDWW",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

jQuery(function()
{

  button_click_monitor ()

})


function button_click_monitor ()
{
  jQuery ("#button1").click (function ()
      {
      const expert =$("#expert").val();
      const important =$("#important").val() ;
      const sex=$("#sex").val();
      const age =$("#age").val();
      const Place = $("#Place").val();
      const comment=encodeURIComponent($("#comment").val());
      if(expert){
      window.location.href = "index4.html?" +  
      +expert+"="
      + important+"="
      +sex+"="
      +age+"="
      +Place+"="
      +comment+"=";
      }else{console.log([expert,important]);}})
      jQuery ("#button2").click (function ()
      {
      const Name=encodeURIComponent($("#Name").val());
      const hospital =encodeURIComponent($("#hospital").val());
      if(Name&&hospital){
      window.location.href = "index5.html?" + "=" 
      +Name+"="
      +hospital;}else{window.alert("全ての項目を入力してください");}
      })
}



  
  
  


        

