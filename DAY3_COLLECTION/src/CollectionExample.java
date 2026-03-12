import java.util.*;

public class CollectionExample {
public static void main(String[]args) {
	List<String> fruits= new ArrayList<>();
	fruits.add("apple");
	fruits.add("Mango");
	fruits.add(new String("Mango"));
	fruits.add("orange");
	System.out.println(fruits);
	System.out.println(fruits.get(1)== fruits.get(2));
}
}
