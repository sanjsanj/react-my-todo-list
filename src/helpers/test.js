/* global expect, it, describe */

import isNullOrWhiteSpace from '.';

describe('isNullOrWhiteSpace', () => {
  it('Returns false when string provided', () => {
    expect(isNullOrWhiteSpace('a string')).toEqual(false);
  });

  it('Returns true when no string provided', () => {
    expect(isNullOrWhiteSpace()).toEqual(true);
  });

  it('Returns false when empty string provided', () => {
    expect(isNullOrWhiteSpace('')).toEqual(true);
  });

  it('Returns false when white space provided', () => {
    expect(isNullOrWhiteSpace(' ')).toEqual(true);
  });
});
