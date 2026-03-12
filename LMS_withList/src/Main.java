public class Main {
    public static void main(String[] args) {

        Library lib = new Library();

        Book b1 = new Book( 1,"Java",  500,"James");
        Book b2 = new Book(2,"Java2",  550,"John");

        lib.addBook(b1);
        lib.addBook(b2);

        lib.reserveBook(1);
       
        lib.displayBooks();
       
    }
}