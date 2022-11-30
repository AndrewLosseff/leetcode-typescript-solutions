// There are some solutions for the problem
// #1
export function canPlaceFlowers(flowerbed: number[], n: number): boolean {

    for (let i = 0; i < flowerbed.length && n !== 0; i++) {
        const prevPot = flowerbed[i - 1];
        const currentPot = flowerbed[i];
        const nextPot = flowerbed[i + 1];

        if(
            prevPot !== 1 &&
            currentPot === 0 &&
            nextPot !== 1
        ) {
            n--
            i++
        }
        
    }

    return n === 0
};
