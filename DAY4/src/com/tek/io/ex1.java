package com.tek.io;
import java.util.Scanner;
import java.io.*;
import java.io.FileWriter;
import java.io.IOException;

public class ex1 {

    public static void main(String[] args) throws IOException {
    	Scanner sc = new Scanner(System.in);
    	FileWriter writer = new FileWriter("output.txt",true);

       while(true) {
        System.out.println("Enter a  message:");
        String msg = sc.next();
        System.out.println("File overwritten");
        writer.write(msg+"\n");
        writer.flush();
       

    }
       
       writer.close();
       System.out.println("data stored");
    	
    	/*FileWriter writer = new FileWriter("Received Input File.txt", true);
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the text you want in the file, press ctrl C to close:");
		try {
			while(true) {
				String input = sc.nextLine();
				writer.write(input+ "\n");
				writer.flush();
				System.out.println("If you want to enter more, go ahead: ");
			}
		} finally {
			writer.close();
			sc.close();
		}*/
}
}