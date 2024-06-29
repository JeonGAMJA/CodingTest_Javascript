function solution(price) {
    const discount = price >= 500000 && price * 0.2 || price >= 300000 && price * 0.1 || price >= 100000 && price * 0.05
    
    return Math.floor(price-discount)
}