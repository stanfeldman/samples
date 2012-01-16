import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import java.util.List;

public class Main
{
	public static void main(String[] args)
	{
		ApplicationContext context = new ClassPathXmlApplicationContext("spring.xml");
		Document document = new Document();
		document.setTitle("super doc");
		document.setBody("lalal oiewladf ewr");
		DocumentDao dao = (DocumentDao)context.getBean("documentMybatisDao");
		System.out.println(dao.getById(1000002).getTitle());
		//List<Document> documents = dao.getAll();
		//for(Document doc : documents)
		//	System.out.println(doc.getTitle());
	}
}
