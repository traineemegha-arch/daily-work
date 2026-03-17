/*package com.tek.day6.unit.testing;

import java.util.Arrays;
import java.util.stream.Stream;

public class Math {
	int add(int a,int b) {
		return a+b;
	}
	int addWithArray(Integer[] is) {
		int addWithArray(int[] numbers) {
	        return Arrays.stream(numbers).sum();
	}
	}
	int divide(int a,int b) {
		return a/b;
	}

}*/


package com.tek.day6.unit.testing;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class MathTest {
	Math math;

	@BeforeEach
	void setup() {//called before every test method
		math = new Math();// A -arrange
	}
	@Test
	void testAaddWithArray() {
		int result = math.addWithArray(new Integer[]{2,3,4,5});// A-> Act
		assertEquals(14, result); // A->assert
	}
	
	@Test
	void testDivide() {
		int result = math.divide(25, 5);// A-> Act
		assertEquals(5, result); // A->assert
	}
	
	@Test
	void testDivideByZero() {
		assertThrows(ArithmeticException.class, ()->{
			math.divide(25, 0);
		});
	}
	
	@Test
	void testDivideWithNegativeDevisor() {
		int result = math.divide(25, -5);// A-> Act
		assertEquals(-5, result); // A->assert
	}
	
	@Test
	void testAdd() {
		int result = math.add(2, 5);// A-> Act
		assertEquals(7, result); // A->assert
	}

	@Test
	void testAddNegativeNumbers() {
		int result = math.add(-2, -5);// A-> Act
		assertEquals(-7, result); // A->assert
	}

	@Test
	void testAddNegativeAndPositiveNumbers() {
		int result = math.add(2, -5);// A-> Act
		assertEquals(-3, result); // A->assert
	}
}
