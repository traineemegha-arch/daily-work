
public class RotateArray {
public static void main(String[] args) {
	int[]Array= {1,-2,-7,-8};
	rotateArray(Array,2);
}
static int[] rotateArray(int[] array,int times) {
	
			int[] arr = {1, 2, 3, 4, 5};

			int first = arr[0];

			for (int i = 0; i < arr.length - 1; i++) {
				arr[i] = arr[i + 1];
			}

			arr[arr.length - 1] = first;

			for (int i : arr) {
				System.out.print(i + " ");
			}
			return arr;
		}
}

