import java.util.ArrayList;
import java.util.List;
public class PetClinic {
public static void main(String[]args) {
	dog d1= new dog("pluto");
	d1.setName("pluto");
	dog d2= new dog("husky");
	d2.setName("husky");
	cat c1= new cat();
	c1.setName("cat");
	d1.bark();
	List<pet> pets= new ArrayList<pet>();
	pets.add(d1);
	pets.add(d2);
	pets.add(c1);
	pets.forEach((pet)->pet.play());

}
}
