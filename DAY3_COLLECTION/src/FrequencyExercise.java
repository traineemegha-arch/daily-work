import java.util.*;
public class FrequencyExercise {

	public static void main(String[] args) {
List<Integer> list= Arrays.asList(1,2,2,3,2,4);
int target=2;
int frequency=0;
for(Integer  num: list) {
	if(target==num) {
		frequency++;
	}
}
System.out.println(target+" frequency->"+frequency);
		
	}

}
