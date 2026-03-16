
public class Book {
private int b_id;
private String title;
private String author;
private boolean available;

public Book(int b_id, String title,String author,boolean available) {
	 this.b_id=b_id;
	 this.title=title;
	 this.author=author;
	 this.available=available;
}
public int  b_id() {
	return b_id;
}

public String getTitle() {
	return title;
}
public String getAuthor() {
	return author;
}
public boolean isAvailable() {
	return available;
}

public void borrowBook() {
    available = false;
}

public void returnBook() {
    available = true;
}
@Override

public String toString() {
	return b_id()+","+ title+","+author+","+available;
}




}
