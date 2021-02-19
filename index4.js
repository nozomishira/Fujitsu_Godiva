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

function getParam()
{
    var url   = location.href
    parameters    = url.split("?")
    params   = parameters[1].split("&")
    var paramsArray = []
    for ( it = 0; it < params.length; it++ ) {
        neet = params[it].split("=")
        paramsArray.push(neet[0])
        paramsArray.push(neet[1])
        paramsArray.push(neet[2])
        paramsArray.push(neet[3])
        paramsArray.push(neet[4])
        paramsArray.push(neet[5])
        paramsArray.push(neet[6])
        paramsArray.push(neet[7])
        paramsArray.push(neet[8])
        //paramsArray.push(neet[9])
        //paramsArray[neet[0]] = neet[1]
        }
    //var categoryKey = paramsArray["id"]
    return paramsArray
}

// -------------------------------------------------------------------
jQuery(function()
{
    const data = getParam();
    //if(a==0){
        let database=[];
        let output=[];
        let sex = data[0];
        let age = data[1];
        let expert = data[2];
        let place = data[3];
        let weight1 = data[4];
        let weight2 = data[5];
        let weight3 = data[6];
        let weight4 = data[7];
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
        //a+=1;
    //}else{
        //window.alert("選択を解除してください")
        //;}
})

