// There are some solutions for the problem
// #1
export function isAnagram(s: string, t: string): boolean {
    return sortString(s) === sortString(t)
};

function sortString(str: string): string {
    return [...str].sort().join()
}