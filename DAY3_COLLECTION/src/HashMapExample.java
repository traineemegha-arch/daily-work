import java.util.*;
public class HashMapExample {
public static void main(String[]args) {
	HashMap<Integer,String> map= new HashMap<>();
	map.put(1, "java");
	map.put(2, "python");
	map.put(3, "go");
	map.put(3, "go back");
	System.out.println(map.size());
	System.out.println(map);
}
}
