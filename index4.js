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
        paramsArray.push(decodeURIComponent(neet[5]))
        }
    //var categoryKey = paramsArray["id"]
    return paramsArray
}

// -------------------------------------------------------------------
jQuery(function()
{
    const data1 = getParam();
    console.log(data1);
        let database=[];
        let output=[];
        let expert = data1[0];
        let important = data1[1];
        let sex = data1[2];
        let age =Number(data1[3]);
        let Place = data1[4];
        let comment = data1[5];
        db.collection("evaluation").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const data =doc.data();
                let check=0;
            if(data.expert=expert){
            database.push([data.Name,data.Sex,data.Age,data.expert,data.atmosphere,data.corresponds,data.comprehensibility,data.effect,data.comment,data.Email,data.Place,data.Doctor_Age,data.illness,data.Hospital,data.web,data.other]);}else{console.log(false);}
            if (sex ){if (data.Sex===sex){console.log(true);}
            else{database.pop();
                check+=1;
                console.log(check);
            }}
            if(check===0 && age){if (age*10<=data.Age && data.Age<(age+1)*10){console.log(true);}
            else{database.pop();
                check+=1;
                console.log(check);
            }}  
            if(check===0 && Place){if (data.Place===Place){console.log(true);}
            else{database.pop();
                check+=1;
                console.log(check);
            }} 
            if(check===0 && comment){if (data.comment===comment){console.log(true);}
            else{database.pop();
                check+=1;
                console.log(check);
            }} 
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
                    if(important==1){
                    const score = (2*(atmosphere)+(corresponds)+(comprehensibility)+(effect))/count;
                    output.push({Name:database[i][0],id:i,score:score});}
                    else if (important ==2){
                    const score = ((atmosphere)+2*(corresponds)+(comprehensibility)+(effect))/count;
                    output.push({Name:database[i][0],id:i,score:score});}
                    else if (important ==3){
                    const score = ((atmosphere)+(corresponds)+2*(comprehensibility)+(effect))/count;
                    output.push({Name:database[i][0],id:i,score:score});}
                    else if (important ==4){
                    const score = ((atmosphere)+(corresponds)+(comprehensibility)+2*(effect))/count;
                    output.push({Name:database[i][0],id:i,score:score});}
                    }
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
                $("#output").append(`<li>${database[m][0]}${database[m][1]}${database[m][2]}${database[m][2]}${database[m][9]}${database[m][10]}${database[m][11]}${database[m][12]}${database[m][13]}${database[m][14]}${database[m][15]}</li>`);
                $("#output1").append(`<button id="button5" type="button" >評価</button>`);
                $("#output2").append(`<button id="button`+m+ `type="button" >詳細</button>`);
               }
    
        });
        console.log(database);
        console.log(output);
        //a+=1;
    //}else{
        //window.alert("選択を解除してください")
        //;}
})

