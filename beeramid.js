var beeramid = function(bonus, price) {
    if (price>bonus){return 0}
  
    let bottle = bonus/price;
    let level = 0;
    for (let i=1; bottle>=0;i++){
      bottle -= i*i;
      level++
    }
    
    return level-1;
  }