import java.util.*;
import java.util.LinkedList;
import java.util.List;
public class LinkedListExample {
	public static void main(String[]args) {
List<String> cities= createListOfCities();
System.out.println(cities.contains("Delhi"));
//System.out.println(cities.remove("Delhi"));
System.out.println((cities.set(0,"Chennai")));
System.out.println(cities);

}

	private static List<String> createListOfCities() {
List<String> cities= new ArrayList<>();
		cities.add("Delhi");
		cities.add("Delhi");
		cities.add("Banglore");
		cities.add("Mumbai");
		return cities;
	}

	private static void defensiveDownCasting(List<String> cities) {
		if(cities instanceof LinkedList<String>) {  //safe coding
			
		LinkedList<String> LinkedList =((LinkedList)cities); //downcasting
		LinkedList.addFirst("chennai");
		}
	}
}
