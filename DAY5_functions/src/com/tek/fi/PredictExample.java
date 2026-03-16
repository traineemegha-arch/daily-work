package com.tek.fi;

import java.util.function.Predicate;

public class PredictExample {
public static void main(String[]args) {
//	Predict<Integer> isEven= n-> n%2==0;//return is implicit
	//Predicate<Integer> isEven=(Integer n) -> n%2 == 0;    //return is implicit
	//Predicate<Integer> isEven=(Int n) -> n%2 == 0;   //won't work

	Predicate<Integer> isEven= n -> {
		return n%2 == 0;
	};
	System.out.println(isEven.test(10));
}
}
