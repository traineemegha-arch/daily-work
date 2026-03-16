
public class Exception_example {

	public static void main(String[] args) {
		try {
			int result=10/0;
			System.out.println(result);
		}
		catch(ArithmeticException e) {
			System.out.println("cannot be zero");
		}
		finally {
			System.out.println("programm finished");
		}

	}

}