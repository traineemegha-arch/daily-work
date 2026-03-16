package com.tek.fi;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;
public class example {

public static void main(String[]args) {
	//List<Integer> l = Arrays.asList(1,2,3,4);
	//l.stream().filter(x-> x%2==0).collect(Collectors.toList());
//System.out.println(finalResult);	
//List<Integer> l= Arrays.asList(1,2,3);
//int r= l.stream().map(x->x*2).reduce(0,Integer::sum);
//System.out.println(r);
	Stream<Integer> s= Stream.of(1,2,3);
	s.forEach(System.out::println);
	s.forEach(System.out::println);
}
}
