// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('phone with the correct format connecting with dash equals to true', () => {
    expect(functions.isPhoneNumber('123-122-1224')).toBe(true);
});

test('valid phone number with the correct format and length equals to true', () => {
    expect(functions.isPhoneNumber('123-1234')).toBe(true);
});

test('phone number contains letters equals to false', () => {
    expect(functions.isPhoneNumber('123-abc-1234')).toBe(false);
});

test('phone number without dash equals to false', () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
});

test('email with the correct format equals to true', () => {
    expect(functions.isEmail('thisisTestingemail@ucsd.edu')).toBe(true);
});

test('very long email with the correct format equals to true', () => {
    expect(functions.isEmail('23checkEmailwithnumber123@gmail.com')).toBe(true);
});

test('email with invalid characters equals to false', () => {
    expect(functions.isEmail('())()(~~~flksd@ucsd.edu')).toBe(false);
});

test('email with long ending (more then 3 characters) equals to false', () => {
    expect(functions.isEmail('anothermeiaELIRJlij@thisemail.eucdf')).toBe(false);
});

test('password with valid length equals to true', () => {
    expect(functions.isStrongPassword('thisisStrong')).toBe(true);
});

test('password with underscore equals to true', () => {
    expect(functions.isStrongPassword('sWIiw_ieih4')).toBe(true);
});

test('password with invalid characters equals to false', () => {
    expect(functions.isStrongPassword('#id(i123')).toBe(false);
});

test('short password equals to false', () => {
    expect(functions.isStrongPassword('we')).toBe(false);
});

test('date in correct format equals to true', () => {
    expect(functions.isDate('02/14/2022')).toBe(true);
});

test('date in correct format 2 equals to true', () => {
    expect(functions.isDate('2/4/2022')).toBe(true);
});

test('date with long length on month equals to false', () => {
    expect(functions.isDate('02/024/2022')).toBe(false);
});

test('date with missing dash equals to false', () => {
    expect(functions.isDate('02042022')).toBe(false);
});

test('valid hex color starts with # equals to true', () => {
    expect(functions.isHexColor('#E74C3C')).toBe(true);
});

test('valid hex color starts without # equals to true', () => {
    expect(functions.isHexColor('E74C3C')).toBe(true);
});

test('invalid hex color contains letter other than A-F or a-f equals to false', () => {
    expect(functions.isHexColor('#E74R3C')).toBe(false);
});

test('invalid hex color that is longer than 6 characters equals to false', () => {
    expect(functions.isHexColor('E74C3E1C')).toBe(false);
});