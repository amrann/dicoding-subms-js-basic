import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';
// import { add } from './calculator.mjs';

test('paramater dengan tipe number/integer', () => {
	// Arrange
	const operandA = 3;
	const operandB = 5;

	// Action
	const actualValue = sum(operandA, operandB);

	// Assert
	const expectedValue = 8;
	assert.equal(actualValue, expectedValue);
});

test('return 0 jika parameter tidak bertipe number/integer', () => {
	// Case #1
	const operandA1 = "3";
	const operandB1 = 5;
	const actualValue1 = sum(operandA1, operandB1);
	// Case #2
	const operandA2 = 3;
	const operandB2 = "5";
	const actualValue2 = sum(operandA2, operandB2);
	// Case #3
	const operandA3 = "3";
	const operandB3 = "5";
	const actualValue3 = sum(operandA3, operandB3);

	// Assert
	const expectedValue = 0;
	assert.equal(actualValue1, expectedValue);
	assert.equal(actualValue2, expectedValue);
	assert.equal(actualValue3, expectedValue);
	
});

test('return 0 jika parameter < 0', () => {
	// Case #1
	const operandA1 = -3;
	const operandB1 = 5;
	const actualValue1 = sum(operandA1, operandB1);
	// Case #2
	const operandA2 = 3;
	const operandB2 = -5;
	const actualValue2 = sum(operandA2, operandB2);
	// Case #3
	const operandA3 = -3;
	const operandB3 = -5;
	const actualValue3 = sum(operandA3, operandB3);

	// Assert
	const expectedValue = 0;
	assert.equal(actualValue1, expectedValue);
	assert.equal(actualValue2, expectedValue);
	assert.equal(actualValue3, expectedValue);
	
});