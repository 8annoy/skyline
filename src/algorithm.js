const calculateVolumes = (buildingHeights) => {
    let filledVolumes = Array(buildingHeights.length).fill(0);
    if (buildingHeights.length <= 2) {
        return filledVolumes;
    }
    buildingHeights = buildingHeights.map(x => parseInt(x, 10));
    let leftMaxIndex = 0;
    let rightMaxIndex = buildingHeights.length - 1;
    let leftMax = buildingHeights[ 0 ];
    let rightMax = buildingHeights[ rightMaxIndex ];
    while (leftMaxIndex < rightMaxIndex) {
        if (leftMax < rightMax) {
            leftMaxIndex++;
            if (buildingHeights[ leftMaxIndex ] < leftMax) {
                filledVolumes[leftMaxIndex] = (leftMax - buildingHeights[ leftMaxIndex ]);
            }
            else {
                leftMax = buildingHeights[ leftMaxIndex ];
            }
        }
        else {
            rightMaxIndex--;
            if (buildingHeights[ rightMaxIndex ] < rightMax) {
                filledVolumes[rightMaxIndex] = (rightMax - buildingHeights[ rightMaxIndex ]);
            }
            else {
                rightMax = buildingHeights[ rightMaxIndex ];
            }
        }
    }
    return filledVolumes;
}

export default calculateVolumes;