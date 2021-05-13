var arrayofthecountries = [];
function submit(){
    var displayscountryarray = [];
    for (var j=1;j<=4;j++){
        var nameofthecountries = document.getElementById("nameofcountry"+j).value;
        console.log(nameofthecountries);

        arrayofthecountries.push(nameofthecountries);
    }
    console.log(arrayofthecountries);

    var lengthofcountryarray = arrayofthecountries.length;
    console.log(lengthofcountryarray);

    for (var k=0;k<lengthofcountryarray;k++){
        displayscountryarray.push("<h4> NAME - "+arrayofthecountries[k]+ "</h4>");
        console.log(displayscountryarray);
    }
    console.log(displayscountryarray);
    document.getElementById("displaynamewithcommas").innerHTML=displayscountryarray;
    var removecommas = displayscountryarray.join(" ");
    console.log(removecommas);
    document.getElementById("displaynamewithoutcommas").innerHTML=removecommas;

    document.getElementById("submitbutton").style.display="none";
    document.getElementById("sortbutton").style.display="inline-block";
}
function sorting(){
    arrayofthecountries.sort();
    console.log(arrayofthecountries);

    var displaycountryarraysorting = [];

    var lengthofcountryarray = arrayofthecountries.length;
    console.log(lengthofcountryarray);

    for (var k=0;k<lengthofcountryarray;k++){
        displayscountryarraysorting.push("<h4> NAME - "+arrayofthecountries[k]+ "</h4>");
        console.log(displayscountryarraysorting);
    }
    var removecommas = displayscountryarraysorting.join(" ");
    console.log(removecommas);
    document.getElementById("displaynamewithoutcommas").innerHTML=removecommas; 
}
