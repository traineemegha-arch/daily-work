
public class ArrayExample {
public static void main(String[] args) {
	 ArrayWithCustomObjects();
}
private static void ArrayWithCustomObjects() {
	
	Book[] books = new Book[10];//custom book obj
	books[0] = new Book(1,"learn java",123.3F,"megha");
	books[1] = new Book(2,"learn python",123.3F,"megha");
	books[2] = new Book(3,"C++",123.3F,"megha");
	books[3] = new Book(4,"Learn js",123.3F,"megha");
	books[4] = new Book(5,"node js",123.3F,"megha");
}

	private static void basicArray() {
	//int[] numbers= {10,20,30,40,50};
	int[]numbers= new int[10];
	numbers[10]=10;
	System.out.println(numbers[2]);
	}
	
}

