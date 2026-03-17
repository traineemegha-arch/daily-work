import java.util.ArrayList;
import java.util.List;
public class StackUsingArrayList {
int top=-1;
List<Integer> stack= new ArrayList<>();
void push(int x) {
	stack.add(x);
}
int pop() {
	return stack.remove(stack.size()-1);
	}
}
