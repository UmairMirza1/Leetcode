function isPalindrome(x: number) {
    const strNum = x.toString();
    const length = strNum.length;
    if ( length ==1) return true;

    let leftIndex = 0 ;
    let rightIndex = length -1;
    let flag: boolean = true;
    while (leftIndex < rightIndex ){
        console.log("before ", leftIndex, rightIndex);
        if (strNum[leftIndex] != strNum[rightIndex]) {flag = false; break };
        leftIndex++;
        rightIndex--;
        console.log(leftIndex, rightIndex)
    }
    return flag
};