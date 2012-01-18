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
		DocumentDao dao = (DocumentDao)context.getBean("documentIbatisDao");
		dao.save(document);
		System.out.println(document.getId());
		document.setTitle("updated sup doc");
		dao.save(document);
		System.out.println(document.getId());
		//System.out.println(dao.getById(new Long(2)).getTitle());
		List<Document> documents = dao.getAll();
		for(Document doc : documents)
			System.out.println(doc.getTitle());
	}
}
