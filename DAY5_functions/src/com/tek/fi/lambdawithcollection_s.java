package com.tek.fi;

import java.util.*;
import java.util.function.Consumer;

class MyComparator implements Comparator<String> {
    @Override
    public int compare(String o1, String o2) {
        return o1.length() - o2.length();
    }
}

public class lambdawithcollection_s {

    private static void comparator() {
        List<String> names = Arrays.asList("java", "python", "go");

        // Using custom comparator
        names.sort(new MyComparator());

        System.out.println(names);
    }

    private static void comparatorWithAnonymousInnerClass() {
    	List<String> names= Arrays.asList("java","python","go");
    	names.sort(new Comparator<String>() {
    		public int compare(String o1,String o2) {
    			return o1.length()-o2.length();
    		}
    	});
    	System.out.println(names);
    }
    
    private static void consumer() {
        List<String> names = Arrays.asList("java", "python", "go");

        Consumer<String> consumer = name -> {
            System.out.println("name = ");
            System.out.println(name);
        };

        names.forEach(consumer);
    }

    public static void main(String[] args) {

        comparator();
        consumer();
    }
}