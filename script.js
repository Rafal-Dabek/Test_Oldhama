
function done(){
  var achivement=0;
  var control=0;
  var membership=0;
  var A=0;
  var ele = document.getElementsByTagName('input');
    

       


        document.getElementById("disp").innerHTML = "";
        var ele = document.getElementsByTagName('input');
        var d=[];
        for(i = 0; i < ele.length; i++) {
            if(ele[i].type="radio") {
              
                if(ele[i].checked)
                {

                  if(ele[i].value!=null)d+= ele[i].value ;
                  
                }
                    

            }
        


          }


  var p=Array.from(d);
 for (i=0;i<15;i+=3)
 {

achivement+=parseInt(p[i]);
control+=parseInt(p[i+1]);
membership+=parseInt(p[i+2]);
 }
  

A+=(parseInt(p[52])+parseInt(p[53])+parseInt(p[55])+parseInt(p[56])+parseInt(p[77])+parseInt(p[79])+parseInt(p[83]));
B+=(parseInt(p[54])+parseInt(p[57])+parseInt(p[58])+parseInt(p[59])+parseInt(p[92])+parseInt(p[93])+parseInt(p[94]));
C+=(parseInt(p[11])+parseInt(p[15])+parseInt(p[52])+parseInt(p[54])+parseInt(p[62])+parseInt(p[87])+parseInt(p[95])+parseInt(p[96]));
D+=(parseInt(p[18])+parseInt(p[80])+parseInt(p[101])+parseInt(p[102])+parseInt(p[103])+parseInt(p[104]));
E+=(parseInt(p[7])+parseInt(p[8])+parseInt(p[44])+parseInt(p[50])+parseInt(p[84])+parseInt(p[88])+parseInt(p[99])+parseInt(p[100])+parseInt(p[106]));
F+=(parseInt(p[14])+parseInt(p[45])+parseInt(p[46])+parseInt(p[47])+parseInt(p[48])+parseInt(p[49])+parseInt(p[85])+parseInt(p[86]));
G+=(parseInt(p[9])+parseInt(p[12])+parseInt(p[13])+parseInt(p[16])+parseInt(p[17])+parseInt(p[19])+parseInt(p[23])+parseInt(p[51])+parseInt(p[78]));
H+=(parseInt(p[60])+parseInt(p[61])+parseInt(p[63])+parseInt(p[64])+parseInt(p[65])+parseInt(p[90])+parseInt(p[91]));
I+=(parseInt(p[21])+parseInt(p[37])+parseInt(p[38])+parseInt(p[39])+parseInt(p[40])+parseInt(p[41])+parseInt(p[42])+parseInt(p[43]));  
J+=(parseInt(p[0])+parseInt(p[1])+parseInt(p[2])+parseInt(p[3])+parseInt(p[20])+parseInt(p[22])+parseInt(p[71])+parseInt(p[98]));  
K+=(parseInt(p[4])+parseInt(p[29])+parseInt(p[31])+parseInt(p[66])+parseInt(p[67])+parseInt(p[68])+parseInt(p[69]));  
L+=(parseInt(p[10])+parseInt(p[30])+parseInt(p[72])+parseInt(p[73])+parseInt(p[74])+parseInt(p[75])+parseInt(p[76])+parseInt(p[81]));  
M+=(parseInt(p[5])+parseInt(p[6])+parseInt(p[28])+parseInt(p[32])+parseInt(p[33])+parseInt(p[34])+parseInt(p[35])+parseInt(p[36]));  
N+=(parseInt(p[24])+parseInt(p[25])+parseInt(p[26])+parseInt(p[27])+parseInt(p[70])+parseInt(p[89])+parseInt(p[97]));  

if(achivement==0 &&control==0 && membership==0||(  isNaN(achivement) || isNaN(control)|| isNaN(membership)) )
{
  alert ("Wszystkie pola muszą być uzupełnione!");
}
else
{
  document.getElementById("disp").innerHTML
  +=  " Osiągnięcia: "
  + achivement + "<br>"
  
    + " Władza: "
  + control + "<br>"
  
   + " Przynależnośc: "
  + membership + "<br>";
}



}


