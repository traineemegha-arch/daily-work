package LMS_withList;

import java.util.*;
import java.util.logging.Logger;

class Library {

    private static final Logger logger = Logger.getLogger(Library.class.getName());

    // FIX 1: Use List instead of Map
    List<Book> books = new ArrayList<>();

    void add(String id, String title, float price, String author) {
        Book book = new Book(id, title, price, author);
        books.add(book); // FIX 2
    }

    void reserve(String title) throws BookNotAvailableException {

        // FIX 3: validation
        if (title == null || title.trim().isEmpty()) {
            throw new IllegalArgumentException("Title cannot be empty");
        }
        
        
        for (Book b : books) {
            if (b.title.equalsIgnoreCase(title) &&
                b.getStatus() == STATUS.AVAILABLE) {

                b.setStatus(STATUS.BOOKED);
                logger.info("Borrowed: " + title);
                return;
            }
        }

        // FIX 4: throw correct exception
        throw new BookNotAvailableException("Book is not available");
    }

    List<Book> find(String title) {
        List<Book> result = new ArrayList<>();

        for (Book book : books) { // FIX 5
            if (book.title.toLowerCase().contains(title.toLowerCase())) {
                result.add(book);
            }
        }
        return result;
    }

    Book remove(String id) throws Exception {

        Iterator<Book> iterator = books.iterator();

        while (iterator.hasNext()) {
            Book book = iterator.next();

            if (book.getId().equalsIgnoreCase(id)) {
                iterator.remove(); // FIX 6 (safe remove)
                return book;
            }
        }

        throw new Exception("No book available for id: " + id);
    }

    void displayBooks() {
        System.out.println("BOOKS AVAILABLE");
        System.out.println("============================================");

        for (Book book : books) {
            if (book.getStatus() == STATUS.AVAILABLE) {
                System.out.println(book + "\n");
            }
        }
        System.out.println("============================================");
    }
}