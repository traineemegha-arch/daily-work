import java.util.*;
public class CommonElementsExercise {
public static void main(String[]args) {
	List<Integer> list1= Arrays.asList(1,2,3,4);
	List<Integer> list2= Arrays.asList(5,6,3,7);
	System.out.println("common elements");
	for( Integer num:list1) {
		if(list2.contains(num)) {
			System.out.print( num);		
		}
	}

}
}
