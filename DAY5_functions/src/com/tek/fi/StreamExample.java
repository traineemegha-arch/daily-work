package com.tek.fi;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;
public class StreamExample {

	public static void main(String[] args) {
		
  //stream1();
		streamwithChain();
  }
	public static void streamwithChain() {
		List<Integer> numbers=Arrays.asList(1,2,3,4,5);
		Stream<Integer> finalStream = numbers.stream().filter((number -> {
			System.out.println(number);
			return number % 2 !=0;
		}).map(number ->{
			return number*number;
		//number*number : number; //option 1
			//if(number % 2 == 1) {  //option2
			//	return number*number;
			//} else {
			//	return number;
		//}
		});
List finalList = finalStream.collect(Collectors.toList());
finalList.forEach(x -> System.out.println(x));
finalList.forEach(System.out.println);
//System.out.println(finalList);
	}
	
 private static void stream1() {
	 List<Integer> numbers= Arrays.asList(1,2,3,4,5);//tank
	 Stream <Integer> stream= numbers.stream();//pipe
	 Stream <Integer> squaredstream= stream.map(number-> number*number);
	 Stream filteredstream= squaredstream.filter((number) ->{
		 System.out.println(number);
		 return number%2 !=0;
	 });
	Stream filteredstream1= stream.filter((number)->{
		 System.out.println(number);
	 return number%2!=0;
	 });
	
	System.out.println(stream.count());
	//List<Integer> filteredList = stream.collect();
	//System.out.println(filteredList);
 }
}
