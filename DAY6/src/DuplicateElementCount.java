
public class DuplicateElementCount {
public static void main(String[] args) {
	DuplicateNumbersCount();
}
	private static void DuplicateNumbersCount() {
		int [] arr= {1,2,3,3,4,5,5,6,7};
		int count=0;
		for(int i=0;i<arr.length;i++) {
			for(int j=i+1;j<arr.length;j++) {
				if(arr[i]==arr[j]) {
					count++;
					break;
				}
			}
		}
		System.out.println("duplicate element"+" :" +count);
	}

}
