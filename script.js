



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


