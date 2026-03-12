import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
public class Library {


	    Map<Integer,Book> books = new HashMap<Integer,Book>();

	    void add(String id,String title, float price,String author ) {
	       Book book = new Book(id,title,price,author);
	       books.put(id, book);
	    }

	    void removeBook(int id) {
	        for (Book b : books) {
	            if (b.id == id) {
	                books.remove(b);
	                System.out.println("Book removed");
	                return;
	            }
	        }
	    }

	    void reserveBook(int id) {
	        for (Book b : books) {
	            if (b.id == id) {
	                b.reserved = true;
	                System.out.println("Book reserved");
	            }

	        }
	    }
	    public void displayBooks() {
	        for (Book b : books) {
	            b.display();
	        }
	    }

	
		
	}
