import java.util.List;

public interface DocumentDao
{
	void save(Document document);
	Document getById(int id);
	List<Document> getAll();
}
