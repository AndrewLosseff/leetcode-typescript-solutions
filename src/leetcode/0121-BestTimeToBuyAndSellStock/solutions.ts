// There are some solutions for the problem

// #1 
export function maxProfit(prices: number[]): number {
    let maxProfit = 0
    let buyDayIndex = 0
 
    for (let i = 1; i < prices.length; i++) {
     const today = prices[i];
     const buyDay = prices[buyDayIndex]
     const diff = today - buyDay
 
     if(diff > maxProfit) {
         maxProfit = diff
     } else if(today < buyDay) {     
         buyDayIndex = i
     }
 
    }
 
    return maxProfit
 };
 