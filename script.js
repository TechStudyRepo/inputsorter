function myfunction(){
    var x = document.getElementById("name1").value;
    var y = document.getElementById("name2").value;
    var z = document.getElementById("name3").value;
    var p = document.getElementById("name4").value;
    var q = document.getElementById("name5").value;
    const names = [x,y,z,p,q];
    let sorted_names = names.sort()
    document.getElementById("op").innerHTML = sorted_names;
}

function colorchange(){
    document.getElementById('op').style.backgroundColor='Green';
}