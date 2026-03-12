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
	
	private STATUS status;
    public STATUS getStatus() {
		return status;
	}
	public void setStatus(STATUS status) {
		this.status = status;
	}

    public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	public String getId() {
		return id;
	}
	public String getTitle() {
		return title;
	}
	public String getAuthor() {
		return author;
	}
	@Override
	public String toString() {
		String result = "";
//				"""
//				ID: %s
//				Book: %s
//				Author: %s
//				Price: %.2f
//				Status: %s""".formatted(id, title, author, price, status);
		return result;