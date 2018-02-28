const expect = require('chai').expect;

describe('Rotate Matrix', () => {
  const { rotateMatrix } = require('../../answers/01 Arrays & Strings/1.7 Rotate Matrix.js');

  it ('should return an Array of Arrays (Matrix)', () => {
    expect(rotateMatrix([
                          [ 1, 2],
                          [ 3, 4]
                        ])).to.be.a('array');
    expect(rotateMatrix([
                          [ 1, 2],
                          [ 3, 4]
                        ])[0]).to.be.a('array');
});

it('should handle empty Array', () => {
  expect(rotateMatrix([])).to.eql([]);
});

  it ('should rotate an NxN Matrix (even length)', () => {
    expect(rotateMatrix([
                          [ 1, 2],
                          [ 3, 4]
                        ])).to.eql([
                          [ 3, 1],
                          [ 4, 2]
                        ]);
    expect(rotateMatrix([
                          [ 1, 2, 3, 4],
                          [ 5, 6, 7, 8],
                          [ 9,10,11,12],
                          [13,14,15,16]
                        ])).to.eql([
                          [13, 9, 5, 1],
                          [14,10, 6, 2],
                          [15,11, 7, 3],
                          [16,12, 8, 4]
                        ]);
  });

  it ('should rotate an NxN Matrix (odd length)', () => {
    expect(rotateMatrix([
                          [ 1, 2, 3],
                          [ 4, 5, 6],
                          [ 7, 8, 9]
                        ])).to.eql([
                          [ 7, 4, 1],
                          [ 8, 5, 2],
                          [ 9, 6, 3]
                        ]);
    expect(rotateMatrix([
                          [ 1, 2, 3, 4, 5],
                          [ 6, 7, 8, 9,10],
                          [11,12,13,14,15],
                          [16,17,18,19,20],
                          [21,22,23,24,25]
                        ])).to.eql([
                          [21,16,11, 6, 1],
                          [22,17,12, 7, 2],
                          [23,18,13, 8, 3],
                          [24,19,14, 9, 4],
                          [25,20,15,10, 5]
                        ]);
  });

});
