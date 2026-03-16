package com.tek.fi;
@FunctionalInterface//annotation
interface Animal {
void eat();
//void run();
}
class Cat implements Animal{//OOP
	@Override
	public void eat() {
		System.out.println("animal eat inside class");
	}
}
public class functional_interface_ex{
public static void main(String[]args) 
{
	oopWay();
	functional();
}
private static void oopWay() {	// TODO Auto-generated method stub
	Animal animal= new Cat();
	animal.eat();
}
private static void functional() {
	
	Animal animal=()->{
	System.out.println("animal are in lambda");

};
}
}

