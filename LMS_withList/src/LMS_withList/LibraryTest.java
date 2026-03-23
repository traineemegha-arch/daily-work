package LMS_withList;

import static org.junit.Assert.assertThrows;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class LibraryTest {
	Library library;
	@BeforeEach
	void setup() {
		library= new Library();
	}
	
	@Test
	void testReserveWithEmptyTitle() {
		assertThrows(IllegalArgumentException.class, () -> {
			library.reserve("");
		});
	}
	
@Test
	void testReserveIfTitleNull1() {
	
	 assertThrows(IllegalArgumentException.class, () -> {
         library.reserve(null);
     });
	}

@Test
void testSuccessfulReservation() throws BookNotAvailableException {
	Book book = new Book("1","Learn java",100.1f,"megha"); 
	library.books.add(book);
	library.reserve("learn java");
	assertEquals(STATUS.BOOKED,book.getStatus());
}

@Test
void testReserveWithWhitespaceTitle() {
	assertThrows(IllegalArgumentException.class, () -> {
		library.reserve("    ");
	});
	
}
	@Test
	void testReserveWhenBookAlreadyBooked() {
	    Book book = new Book("1", "Learn Java", 100.0f, "megha");
	    book.setStatus(STATUS.BOOKED);  // already reserved
	    library.books.add(book);
	    assertThrows(BookNotAvailableException.class, () -> {
	        library.reserve("Learn Java");
	    });
	     
}
	


}