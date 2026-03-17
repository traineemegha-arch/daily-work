import java.util.Arrays;

public class ReverseArray {
	public static void main(String[] args) {
		int[] arr= {10,20,30,40,50};
		int[] reversed = new int[arr.length];

		//for (int i = 0; i < arr.length; i++) {
	   //reversed[i] = arr[arr.length - 1 - i];
		
		for (int i = arr.length - 1; i >= 0; i--) {
			System.out.print(arr[i] + " ");
	
		//System.out.println(Arrays.toString(reversed));
	}
		System.out.println("---------");
		for(int i=0;i<arr.length;i++) {
			System.out.println(arr[i]);
		}
}
}