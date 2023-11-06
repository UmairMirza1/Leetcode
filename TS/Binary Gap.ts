// Codility mock test
function solution(N: number): Number {
  const binaryRep = N.toString(2);
  let binaryGaps: number[] = [];
  let currentBinaryGap = 0;
  let countingBinaryGap = false;
  for (let char of binaryRep) {
    if (countingBinaryGap && char == "0") {
      currentBinaryGap++;
      continue;
    }

    if (countingBinaryGap && char == "1") {
      binaryGaps.push(currentBinaryGap);
      currentBinaryGap = 0;
    }

    if (char == "1") {
      countingBinaryGap = true;
      continue;
    }
  }

  if (binaryGaps.length == 0) return 0;

  binaryGaps.sort();
  binaryGaps.reverse();
  return binaryGaps[0];
}

// takeaways 

/**
 * 
    Why store arrays of numbers you dont need?
    -- Just store whats needed -- Saves space
    
 */
function solutionOptimized(N: number): number {
    const binaryRep = N.toString(2);
    let longestBinaryGap = 0;
    let currentBinaryGap = 0;
    let countingBinaryGap = false;

    for (let i = 0; i < binaryRep.length; i++) {
        const char = binaryRep[i];

        if (char === '0') {
            if (countingBinaryGap) {
                currentBinaryGap++;
            }
        } else if (char === '1') {
            if (countingBinaryGap) {
                longestBinaryGap = Math.max(longestBinaryGap, currentBinaryGap);
                currentBinaryGap = 0;
            } else {
                countingBinaryGap = true;
            }
        }
    }

    return longestBinaryGap;
}
