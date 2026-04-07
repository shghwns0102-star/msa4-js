for(i = 1; i <= 5; i++){
  console.log("*****")
}

for(a = 1; a <= 5; a++){
  let line = "";
  for(b = 1; b <= a; b++){
    line += "*";
  }
console.log(line);
}

for(c = 5; c >= 1; c--){
  let line ="";
  for(d = 1; d <= c; d++){
    line +="*";
  }
console.log(line);
}

for(e = 1; e <= 5; e++){
  let line ="";
  for(f = 1; f <= 5-e; f++){
    line += " ";    
}
  for(g = 1; g <= e; g++){
      line += "*";
}
console.log(line);
}

for(h=1; h <= 5; h++){
  let line = "";
  for(j=1; j <= 5-h; j++){
    line += " ";
  }
  for(k=1; k <= 2*h-1; k++){
    line += "*"
  }
console.log(line);
}

