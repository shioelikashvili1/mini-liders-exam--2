function battle(x, y) {
    x = x.split("");
    y = y.split("");
    console.log(x,y);
    countx = 0;
    county = 0;
    for(i=0; i < x.length; i++){
      if (x[i] === "A"){
        countx = countx + 1;
       } else if (x[i] === "B"){
        countx = countx + 2;
       } else if (x[i] === "C"){
        countx = countx + 3;
       } else if (x[i] === "D"){
        countx = countx + 4;
       } else if (x[i] === "E"){
        countx = countx + 5;
       } else if (x[i] === "F"){
        countx = countx + 6;
       } else if (x[i] === "G"){
        countx = countx + 7;
       } else if (x[i] === "H"){
        countx = countx + 8;
       } else if (x[i] === "I"){
        countx = countx + 9;
       } else if (x[i] === "J"){
        countx = countx + 10;
       } else if (x[i] === "K"){
        countx = countx + 11;
       } else if (x[i] === "L"){
        countx = countx + 12;
       } else if (x[i] === "M"){
        countx = countx + 13;
       } else if (x[i] === "N"){
        countx = countx + 14;
       } else if (x[i] === "O"){
        countx = countx + 15;
       } else if (x[i] === "P"){
        countx = countx + 16;
       } else if (x[i] === "Q"){
        countx = countx + 17;
       } else if (x[i] === "R"){
        countx = countx + 18;
       } else if (x[i] === "S"){
        countx = countx + 19;
       } else if (x[i] === "T"){
        countx = countx + 20;
       } else if (x[i] === "U"){
        countx = countx + 21;
       } else if (x[i] === "V"){
        countx = countx + 22;
       } else if (x[i] === "W"){
        countx = countx + 23;
       } else if (x[i] === "X"){
        countx = countx + 24;
       } else if (x[i] === "Y"){
        countx = countx + 25;
       } else if (x[i] === "Z"){
        countx = countx + 26;
       } else {
         countx = countx + 0;     
       }
     }
     //
     for(i=0; i < y.length; i++){
      if (y[i] === "A"){
       county = county + 1;
       } else if (y[i] === "B"){
       county = county + 2;
       } else if (y[i] === "C"){
       county = county + 3;
       } else if (y[i] === "D"){
       county = county + 4;
       } else if (y[i] === "E"){
       county = county + 5;
       } else if (y[i] === "F"){
       county = county + 6;
       } else if (y[i] === "G"){
       county = county + 7;
       } else if (y[i] === "H"){
       county = county + 8;
       } else if (y[i] === "I"){
       county = county + 9;
       } else if (y[i] === "J"){
       county = county + 10;
       } else if (y[i] === "K"){
       county = county + 11;
       } else if (y[i] === "L"){
       county = county + 12;
       } else if (y[i] === "M"){
       county = county + 13;
       } else if (y[i] === "N"){
       county = county + 14;
       } else if (y[i] === "O"){
       county = county + 15;
       } else if (y[i] === "P"){
       county = county + 16;
       } else if (y[i] === "Q"){
       county = county + 17;
       } else if (y[i] === "R"){
       county = county + 18;
       } else if (y[i] === "S"){
       county = county + 19;
       } else if (y[i] === "T"){
       county = county + 20;
       } else if (y[i] === "U"){
       county = county + 21;
       } else if (y[i] === "V"){
       county = county + 22;
       } else if (y[i] === "W"){
       county = county + 23;
       } else if (y[i] === "X"){
       county = county + 24;
       } else if (y[i] === "Y"){
       county = county + 25;
       } else if (y[i] === "Z"){
       county = county + 26;
       } else {
         county = county + 0;     
       }
     }
    console.log(countx,county);
    if (countx === county){
      return "Tie!";
    } else if (countx > county){
      return x.join("");
    } else if (countx < county){
      return y.join("");
   }
   }