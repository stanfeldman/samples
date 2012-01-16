import java.util.List;

public interface DocumentDao
{
	void save(Document document);
	Document getById(Long id);
	List<Document> getAll();
}
