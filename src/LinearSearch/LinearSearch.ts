export default function linear_search(arr: number[], needle: number) : boolean {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == needle) {
            return true;
        }
    }

    return false;
}

const arrayToSearch = [1, 2, 3, 4, 5];
const searchTerm = 3;

const result = linear_search(arrayToSearch, searchTerm);
console.log(`${result}`);

