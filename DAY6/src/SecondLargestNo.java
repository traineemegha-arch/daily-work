import java.util.Arrays;
public class SecondLargestNo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		secondLargestNumber();
	}
	private static void secondLargestNumber() {
		int[] arr = {-10,-20,-30,-5,1,5,9,2};

		int largest = Integer.MIN_VALUE;
		int second = Integer.MIN_VALUE;

		for (int i = 0; i < arr.length; i++) {
			if (arr[i] > largest) {
				second = largest;
				largest = arr[i];
			} else if (arr[i] > second && arr[i] != largest) {
				second = arr[i];
			}
		}

		System.out.println("Second Largest: " + second);
			
	}
}
