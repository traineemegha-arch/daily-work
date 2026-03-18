package com.tek.Thread;
public class MyThread extends Thread {
@Override
public void run() {
	try {
		sleep(200);
	}
	catch(InterruptedException e){
		e.printStackTrace();
	}
	System.out.println("worker thread is running");
}
}
