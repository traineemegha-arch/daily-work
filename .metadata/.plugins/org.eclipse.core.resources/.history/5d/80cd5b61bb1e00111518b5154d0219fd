package LMS_withList;
import java.util.*;
import java.util.List;
import java.util.ArrayList;
import java.util.logging.Logger;

class Library {
	private static final Logger logger = Logger.getLogger(Library.class.getName());
	Map<Integer, Book> books = new HashMap<Integer, Book>();

	void add(String id, String title, float price, String author) {
		Book book = new Book(id, title, price, author);
		List<Book> books = new ArrayList<>();
	}

	void reserve(String title) throws Exception {
		/*Collection<Book> booksOnly = books.values();
		Iterator<Book> iterator = booksOnly.iterator();
		while (iterator.hasNext()) {
		
		Book book = iterator.next();*/
		
		for(Book b: books.values()) {
			if (b.title.equals(title) && b.getStatus() == STATUS.AVAILABLE) {
				b.setStatus(STATUS.BOOKED);
				logger.info("Borrowed: " + title);
				return;
			}
		    logger.warning("Book not available: " + title);

		}
		/*
		 * 
		 */ throw new BookNotAvailableException("Book is not availaible.");
	}

	List<Book> find(String title) {
		List<Book> books = new ArrayList<>();
		for (Book book : books) {
			if (book.title.toLowerCase().contains(title.toLowerCase())) {
				books.add(book);
			}
		}
		return books;
	}

	Book remove(String id) throws Exception {
		Collection<Book> booksOnly = books.values();
		Iterator<Book> iterator = booksOnly.iterator();
		while (iterator.hasNext()) {
			Book book = iterator.next();
			if (book.getId().toLowerCase().equals(id.toLowerCase())) {
				books.remove(book);
				return book;
			}
		}
		throw new Exception("No book was availaible for the id: " + id);
	}

	void displayBooks() {
		System.out.println("BOOKS AVAILIABLE");
		System.out.println("============================================");
		Collection<Book> booksOnly = books.values();
		Iterator<Book> iterator = booksOnly.iterator();
		while (iterator.hasNext()) {
			Book book = iterator.next();
			if (book.getStatus() == STATUS.AVAILABLE)
				System.out.println(book + "\n\n");
			System.out.println("============================================");
		}
	}
}