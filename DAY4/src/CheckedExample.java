import java.io.*;
public class CheckedExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
try {
	readfile();
	
}
catch(FileNotFoundException e) {
	e.printStackTrace();
}
}

	private static void readfile() throws FileNotFoundException {
		// TODO Auto-generated method stub
		FileReader file= new FileReader("data.txt");		
	}

}
