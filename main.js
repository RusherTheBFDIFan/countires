nameofthecountries = [];
function submit(){
    var name1 = document.getElementById("nameofcountry1").value;
    var name2 = document.getElementById("nameofcountry2").value;
    var name3 = document.getElementById("nameofcountry3").value;
    var name4 = document.getElementById("nameofcountry4").value;

    nameofthecountries.push(name1);
    nameofthecountries.push(name2);
    nameofthecountries.push(name3);
    nameofthecountries.push(name4);
    
    console.log(nameofthecountries);

    document.getElementById("displayname").innerHTML=nameofthecountries;
    document.getElementById("submitbutton").style.display="none";

    document.getElementById("sortbutton").style.display="inline-block";
}
function sorting(){
    nameofthecountries.sort();
    console.log(nameofthecountries);
    document.getElementById("displayname").innerHTML=nameofthecountries;
}