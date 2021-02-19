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
      const sex=$("#sex").val();
      const age =Number($("#age").val());
      const expert =$("#expert").val();
      const Place = $("#Place").val();
      const weight1 = Number($("#weight1").val());
      const weight2 = Number($("#weight2").val());
      const weight3 = Number($("#weight3").val());
      const weight4 = Number($("#weight4").val());
      if(sex&&age&&expert&&Place&&weight1&&weight2&&weight3&&weight4){
      window.location.href = "index4.html?" +  
      +sex+"="
      +age+"="
      +expert+"="
      +Place+"="
      +weight1+"="
      +weight2+"="
      +weight3+"="
      +weight4;
      }else{window.alert("全ての項目を入力してください");}})
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



  
  
  


        

