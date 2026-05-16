import { describe, expect, it } from 'vitest';
import { validatePasswordComplexity } from '../src/password.js';

describe('validatePasswordComplexity', () => {
  it.each([
    ['Password1', true],
    ['LongerPass99', true],
    ['short1A', false], // < 8 chars
    ['nodigitshere', false], // no digit, no uppercase
    ['NODIGITSHERE', false], // no digit, no lowercase
    ['12345678', false], // no letters
    ['nouppercase1', false], // no uppercase
    ['NOLOWERCASE1', false], // no lowercase
    ['', false],
  ])('validates %j as %s', (input, expected) => {
    expect(validatePasswordComplexity(input)).toBe(expected);
  });

  it('accepts special characters when minimums are met', () => {
    expect(validatePasswordComplexity('P@ssw0rd!')).toBe(true);
    expect(validatePasswordComplexity('A1bcdefg/')).toBe(true);
  });

  it('accepts very long passwords', () => {
    expect(validatePasswordComplexity('A1' + 'b'.repeat(200))).toBe(true);
  });

  it('rejects unicode digits / letters (ASCII-only by design)', () => {
    expect(validatePasswordComplexity('Pässwörd1')).toBe(true);
    expect(validatePasswordComplexity('ＡＢＣabc１２３')).toBe(false);
  });
});
