function findDeletedNumber(arr, mixArr) {
  
    if(arr.length == mixArr.length) {
      
      return 0
    } else {
      let sortedMix = mixArr.sort((a,b) => a-b)
      for(let i = 0; i < arr.length; i++){
        if(arr[i] != sortedMix[i]) return arr[i]
      }
    }
}