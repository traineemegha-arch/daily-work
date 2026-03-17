package com.tek.day6.unit.testing;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class MathTestt {

	@Test
	void testAdd() {
		Math math= new Math();
		int result= math.add(-2, -5);
		assertEquals(-7,result);
	}

}
