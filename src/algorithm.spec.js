import calculateVolumes from './algorithm.js';

describe("Flooded City Algorithm", () => {
    
    it("should return an empty array for an empty input", () => {
        expect(calculateVolumes([])).toEqual([]);
    });

    it("should return an array of zeros when input is an ascending sequence", () => {
        expect(calculateVolumes([ 0, 1, 2, 3 ])).toEqual([ 0, 0, 0, 0 ]);
    });    

    it("should return an array of zeros when input is a descending sequence", () => {
        expect(calculateVolumes([ 3, 2, 1, 0 ])).toEqual([ 0, 0, 0, 0 ]);
    });

    it("should return the difference from bottom to lowest of the two higher neighbors", () => {
        expect(calculateVolumes([ 4, 1, 32 ])).toEqual([ 0, 3, 0 ]);
        expect(calculateVolumes([ 32, 11, 14 ])).toEqual([ 0, 3, 0 ]);
    });

    it("should return volume for two adjacent fillable heights", () => {
        expect(calculateVolumes([ 3, 1, 1, 7 ])).toEqual([ 0, 2, 2, 0 ]);
    });
    
    it("should return volume for a fillable height who's volume is calculated from the FAR LEFT", () => {
        expect(calculateVolumes([ 3, 2, 1, 7 ])).toEqual([ 0, 1, 2, 0 ]);
    });

    it("should return volume for a fillable height who's volume is calculated from the FAR RIGHT", () => {
        expect(calculateVolumes([ 7, 1, 2, 4 ])).toEqual([ 0, 3, 2, 0 ]);
    });

    it("should return volume for two separate pools", () => {
        expect(calculateVolumes([ 3, 2, 3, 2, 3 ])).toEqual([ 0, 1, 0, 1, 0 ]);
    });

    it("should return volume for two separate pools when global max are at both sides", () => {
        expect(calculateVolumes([ 4, 2, 3, 2, 4 ])).toEqual([ 0, 2, 1, 2, 0 ]);
    });
});