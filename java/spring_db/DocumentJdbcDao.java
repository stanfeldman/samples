import org.springframework.jdbc.core.JdbcTemplate;
import java.util.List;

public class DocumentJdbcDao implements DocumentDao
{
	public void save(Document document)
	{
		template.update("insert into documents(title, body) values(?,?)", document.getTitle(), document.getBody());
	}
	
	public Document getById(int id)
	{
		return template.queryForObject("select * from documents where id=?", new Object[]{ id }, new DocumentRowMapper());
	}
	
	public List<Document> getAll()
	{
		return template.query("select * from documents", new DocumentRowMapper());
	}
	
	public void setTemplate(JdbcTemplate template) { this.template = template; }
	
	private JdbcTemplate template;
}
