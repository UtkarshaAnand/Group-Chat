const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var res = isRealString(89);
    expect(res).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var res = isRealString("  ");
    expect(res).toBe(false);
  });

  it('should accept string with non-space characters', () => {
    var res = isRealString("  Utkarsha");
    expect(res).toBe(true);
  });
});
