import java.util.ArrayList;
import java.util.List;
public class Listdemo {
public static void main(String[]args) {
	List<String>books= new ArrayList<>();
	books.add("book1");
	books.add("book1");
	books.add("book3");
	System.out.println(books.size());
	books.remove(0);
	System.out.println("after remove= "+books.size());
	books.forEach((book)-> System.out.println(book));
}
}
