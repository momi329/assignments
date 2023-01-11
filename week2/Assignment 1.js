function max(numbers) {
    // your code here
    let result=numbers[0];
    for(var i =0;i<=numbers.length;i++){
       //console.log(numbers[i])會出現整行array，他會跑出所有數字
       if(result<numbers[i]){
            result=numbers[i]
       }
      }
      return result;
       }
    

    console.log(max([1, 2, 4, 5])); // expected output: 5
    console.log(max([5, 2, 7, 1, 6,-2,0])); // expected output: 7
    //如果 項目一>項目二 