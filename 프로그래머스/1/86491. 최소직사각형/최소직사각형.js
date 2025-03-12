const solution = (sizes) => sizes.map(size => size.sort((a,b)=> a-b)).reduce(([min,max],[height,width])=> {
    if(height > min) min = height
    if(width > max) max = width
    
    return [min,max]
},[0,0]).reduce((acc,cur)=> acc*cur,1)