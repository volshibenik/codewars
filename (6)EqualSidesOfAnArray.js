function findEvenIndex(arr)
{
  //Code goes here!
  var value = 0;
  var sum = arr.reduce( (acc, item) => acc + item);
 /* value = arr.reduce( function(acc, item, index) {
    sum -= item;
    if (sum == acc) {return index;}
    acc += item;
  }, 0)*/
    var sumLeft = 0;
    for (var i = 0; i < arr.length; i++) {
        sum-=arr[i];
        if (sum == sumLeft) return i;
        sumLeft+=arr[i];
    }
  return -1;
  
}



// this next is marked as best practices but it isn't! just did performance tests and my solution is 10 times faster!
/*
function findEvenIndex2(arr)
{
  for(var i=1; i<arr.length-1; i++) {
    if(arr.slice(0, i).reduce((a, b) =>  a+b) === arr.slice(i+1).reduce((a, b) =>  a+b)) {
      return i;
    }
  }
  return -1;
}*/