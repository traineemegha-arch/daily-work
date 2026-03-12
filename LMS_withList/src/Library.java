import java.util.ArrayList;
public class Library {


	    ArrayList<Book> books = new ArrayList<>();

	    void addBook(Book b) {
	        books.add(b);
	        System.out.println("Book added");
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
	            System.out.println("book not found");
	        }
	    }
	    public void displayBooks() {
	        for (Book b : books) {
	            b.display();
	        }
	    }
		
	}
