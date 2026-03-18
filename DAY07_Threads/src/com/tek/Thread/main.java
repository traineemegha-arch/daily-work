package com.tek.Thread;
public class main {
public static void main(String[] args) throws InterruptedException{
	//1.using thread class
	Thread thread= new MyThread();
	thread.start();
	thread.join();
	System.out.println("main");
	//thread.run();
	//thread.sleep(200);
	//using runnable
	//Thread task= new Thread(new MyTask());

		//Thread t= new Thread(new MyTask());
		//t.start();
	}
}
