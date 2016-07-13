
myfunct = function(var1){

  if(var1=='=') {
    document.getElementById("answer").value +=var1;
    var a=0,b=0;
    var i=0,count1=0,count2=0;
    var flag=0;
    while(document.getElementById("answer").value[i]!='+' &&
          document.getElementById("answer").value[i]!='-' &&
          document.getElementById("answer").value[i]!='*' &&
          document.getElementById("answer").value[i]!='/')
    {
      if(  document.getElementById("answer").value[i] == '.'){
        flag=1;
        i++;
        continue;
      }
      a=a*10 + parseInt(document.getElementById("answer").value[i]);
      i++;
      if(flag==1)
        count1++;
    }
    //console.log(a);
    //console.log(count1);
    if(flag==1)
      a=a/(Math.pow(10,count1));
      //console.log(a);
    var op=document.getElementById("answer").value[i];
    i++;
    while(document.getElementById("answer").value[i]!='='){
      if(  document.getElementById("answer").value[i] == '.'){
        flag=2;
        i++;
        continue;
      }
      b=b*10 + parseInt(document.getElementById("answer").value[i]);
      i++;
      if(flag==2)
        count2++;
    }
    if(flag==2)
      b=b/(Math.pow(10,count2));
      //console.log(b);
    switch(op) {

      case '+' :{
        document.getElementById("answer").value=(a+b).toFixed(2);
        //console.log(document.getElementById("answer").value);
        break;
      }
      case '-' :{
        document.getElementById("answer").value=(a-b).toFixed(2);
        //console.log(document.getElementById("answer").value);
        break;
      }
      case '*' :{
        document.getElementById("answer").value=(a*b).toFixed(2);
        //console.log(document.getElementById("answer").value);
        break;
      }
      case '/' :{
        document.getElementById("answer").value=(a/b).toFixed(2);
        //console.log(document.getElementById("answer").value);
        break;
      }

    }
  }
  else{
    document.getElementById("answer").value +=var1;
  }

  a=0;b=0;
}
cancel=function(){
  document.getElementById("answer").value=0;
}
