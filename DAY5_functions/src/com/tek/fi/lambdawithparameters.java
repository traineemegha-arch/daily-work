package com.tek.fi;
interface Add{
	int sum(int a,int b);
}
public class lambdawithparameters {
public static void main(String[]args) {
	Add add= (a,b) -> (a+b);
	System.out.println(add.sum(5, 3));
}
}
