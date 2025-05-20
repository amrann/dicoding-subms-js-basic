import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('test function sum', () => {
	// Arrange
	const operandA = 3;
	const operandB = 5;

	// Action
	const actualValue = sum(operandA, operandB);

	// Assert
	const expectedValue = 8;
	assert.equal(actualValue, expectedValue);
});