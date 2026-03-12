import java.util.*;
import java.util.List;
public class Book {

	int id;
	String title;
	int price;
	String Author;
	boolean reserved;
	public Book(int id, String title, int price, String author) {
		super();
		this.id = id;
		this.title = title;
		this.price = price;
		 this.Author = author;
		 reserved=false;
		
	}
	
	@Override
	public String toString() {
		String json=""" 
{
"title":"%s"
"reserved":"%s"}
	""".formatted(title,reserved);

	
		return json;
	}
	void display() {
	System.out.println("book title:"+title +
			", book id:" +id +
			",price:"+price+
			",author name:"+Author+
			",reserved:"+reserved);

	}
	
} 

