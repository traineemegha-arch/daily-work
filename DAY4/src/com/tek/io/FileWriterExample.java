package com.tek.io;
import java.io.FileWriter;
import java.io.IOException;
public class FileWriterExample {

	public static void main(String[] args) throws IOException {
		FileWriter writer= new FileWriter("output.txt");
		writer.write("Hello java file IO");
		writer.close();

	}

}
