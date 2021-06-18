function getResult() {
    var m1 = document.getElementById("m1").value;
    var o1 = document.getElementById("o1").value;
    var m2 = document.getElementById("m2").value;
    var o2 = document.getElementById("o2").value;
    var m3 = document.getElementById("m3").value;
    var o3 = document.getElementById("o3").value;

    var m4 = parseInt(document.getElementById("m4").value);
    var o4 = parseInt(document.getElementById("o4").value);
    var m5 = parseInt(document.getElementById("m5").value);
    var o5 = parseInt(document.getElementById("o5").value);


    //tenth percentage
    var total = parseInt(o1) + parseInt(o2) + parseInt(o3);
    var gain = parseInt(m1) + parseInt(m2) + parseInt(m3);

    var tenthTotalPercentage = parseFloat((gain / total) * 100);
    var needed_thirtyPercent = parseFloat(tenthTotalPercentage * (30 / 100));


    //11th percentage
    var eleventhTotalPercentage = parseFloat((m4 / o4) * 100);
    var needed_thirtyPercentForEleventh = parseFloat((eleventhTotalPercentage) * (30 / 100));

    //12th percentage

    var twelthTotalPercentage = parseFloat((m5 / o5) * 100);
    var needed_fourtyPercentForTwelth = parseFloat((twelthTotalPercentage) * (40 / 100));


    var finalResult = needed_thirtyPercent + needed_thirtyPercentForEleventh + needed_fourtyPercentForTwelth;

    console.log(finalResult.toFixed(2));
}