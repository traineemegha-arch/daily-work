
public class dog extends Animal implements pet {
private String breed;

	public String getBreed() {
	return breed;
}
	@Override
	public void play() {
	System.out.println("playing with dog");	
	}
public dog(String breed) {
		super();
		this.breed = breed;
	}
public void bark() {
	System.out.println("dog is barking");
}
} 

