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
let a=0
$("#button1").on("click", () => {
  if(a==0){
  let database=[];
  let output=[];
  let sex = $("#sex").val();
  let age = Number($("#age").val());
  let expert = $("#expert").val();
  let place = $("#Place").val();
  let weight1 = Number($("#weight1").val());
  let weight2 = Number($("#weight2").val());
  let weight3 = Number($("#weight3").val());
  let weight4 = Number($("#weight4").val());
  db.collection("evaluation").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          const data =doc.data();
          if(((10*age)<=Number(data.Age) && Number(data.Age)<(10*(age+1))) &&(data.expert===expert) && data.Sex===sex && data.Place===place){
          database.push([data.Name,data.Sex,data.Age,data.expert,data.atmosphere,data.corresponds,data.comprehensibility,data.effect]);  
      }else{;}
      });
      if(database.length==0){$("#output").append("該当する医者はいません");}
      for(let i=0;i<(database.length);i++){
          let atmosphere=0;
          let corresponds=0;
          let comprehensibility=0;
          let effect=0;
          let count=0;
          let check=0;
          for(let item of database){
              if(database[i][0]==item[0]){
                  count=count+1;
                  atmosphere=(atmosphere+Number(item[4]));
                  corresponds=(corresponds+Number(item[5]));
                  comprehensibility=(comprehensibility+Number(item[6]));
                  effect=(effect+Number(item[7]));
                  ;}
          }
          for(let k of output){
          if(database[i][0]==k.Name){
              check=check+1;
          ;}else{;}}
          if(check==0){
              const score = ((weight1*atmosphere)+(weight2*corresponds)+(weight3*comprehensibility)+(weight4*effect))/count;
              output.push({Name:database[i][0],id:i,score:score});}

      }
      output.sort(function (a, b) {
          if (a.score < b.score) {
            return 1;
          } else {
            return -1;
          }
        })
         
        for(let l of output){
            let m = Number(l.id);
          $("#output").append(`<li>${database[m][0]}${database[m][1]}${database[m][2]}</li>`);
         }

  });
  console.log(database);
  console.log(output);
  a+=1;
}else{
  window.alert("選択を解除してください")
  ;}

});

  $("#button2").on("click", () => {
  if(a===0){
    let database=[];
    const Name = $("#Name").val();
    const hospital = $("#hospital").val();
    db.collection("evaluation").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          const data =doc.data();
          if(data.Name===Name &&data.Hospital===hospital){database.push([data.Name,data.Sex,data.Age,data.expert,data.atmosphere,data.corresponds]);} 
      });
          
      if(database.length==0){$("#output2").append(`該当する医者はいません`);}else{
          $("#output2").append(`<li>${database[0][0]}${database[0][1]}${database[0][2]}${database[0][3]}</li>`);}
  });	
      
   }else{window.alert("選択を解除してください");} 
  a+=1;
});


$("#button").on("click", () => {location.reload()});

  
  
  


        



    
    
    

  
          

