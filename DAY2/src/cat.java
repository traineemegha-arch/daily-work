
public class cat extends Animal implements pet {
private String furcolor;

@Override
public void play() {
	System.out.println("cat is playing"+ getName());
}
void meow() {
	System.out.println("meowww");
}
}
