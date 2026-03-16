import java.io.*;
import java.util.*;
import java.util.stream.*;

public class File {

    private static final String file_name = "books.csv";

    public static void saveBooks(List<Book> books) {

        try(PrintWriter writer = new PrintWriter(
                new FileWriter(file_name))){

        	books.stream()
                 .map(Book::toString)
                 .forEach(writer::println);

        } catch(Exception e) {
            e.printStackTrace();
        }
    }

    public static List<Book> loadBooks() {

        List<Book> books = new ArrayList<>();

        try(BufferedReader reader =
                new BufferedReader(
                new FileReader(file_name))) {

            books = reader.lines()
                    .map(line -> line.split(","))
                    .map(data -> new Book(
                            Integer.parseInt(data[0]),
                            data[1],
                            data[2],
                            Boolean.parseBoolean(data[3])
                    ))
                    .collect(Collectors.toList());

        } catch(Exception e) {
        	System.out.println("No file found.");
        }
        return books;
    }
}
