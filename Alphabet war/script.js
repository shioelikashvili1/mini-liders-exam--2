function alphabetWar(fight){
    var right = {}
    
    
    right['m'] = 4
    
    right['q'] = 3
    
    right['d'] = 2
    
    right['z'] = 1
    
    
    
    var left = {}
    
    left['w'] = 4
    
    left['p'] = 3
    
    left['b'] = 2
    
    left['s'] = 1
  
    var sumRight = 0
    var sumLeft = 0
  
    for(i in fight){
      if(right[fight[i]])
      {sumRight += right[fight[i]]}
      if(left[fight[i]])
      {sumLeft += left[fight[i]]}
    }
    if(sumRight>sumLeft
      ){return 'Right side wins!'}
    if(sumRight<sumLeft)
    {return 'Left side wins!'}
    
    return "Let's fight again!";
  }