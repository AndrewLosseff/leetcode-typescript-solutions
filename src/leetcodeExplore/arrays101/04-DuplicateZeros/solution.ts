// #1
export function duplicateZeros(arr: number[]): number[] {

    for (let i = 0; i < arr.length; i++) {
        const curNum = arr[i];

        if(curNum === 0) {
            arr = [...arr.slice(0,i), curNum, ...arr.slice(i, arr.length - 1)]    
            i++     
        }
        
    }

    return arr
};

// #2

export function duplicateZeros(arr: number[]): number[] {

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        arr.splice(i, 0, 0);
        arr.pop();
        i++;
      }
        
    }

    return arr
};