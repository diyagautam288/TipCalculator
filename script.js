function calculatetip()
{
    var billamount=document.getElementById("billamount").value;
    var ser=document.getElementById("serviceQuality").value;
    var peop=document.getElementById("totalPeople").value;
    if(billamount===""||ser==0){
        window.alert("Please enter the values.");
        return;
    }
    if(peop===""||peop<=1){
        peop=1;
        document.getElementById("each").style.display='none';
    }
    else{
        document.getElementById("each").style.display='block';
    }
    var tot=(billamount*ser)/peop;
    tot=Math.round(tot*100)/100;
    tot=tot.toFixed(2);
    document.getElementById("Totaltip").style.display='block';
    document.getElementById("tip").innerHTML=tot;
}
document.getElementById("Totaltip").style.display='none';
document.getElementById("each").style.display='none';
document.getElementById("calculate").onclick=function(){calculatetip();}