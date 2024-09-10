function solution(participant, completion) {
    const hash = {}
     
    participant.forEach((person) => hash[person] = (hash[person] || 0) + 1)
    completion.forEach((person) => hash[person]--)
    
    
    
    return Object.entries(hash).filter(([key,value]) => value !== 0).flat()[0]
}