import org.springframework.orm.ibatis.support.SqlMapClientDaoSupport;
import java.util.List;
import java.util.ArrayList;

public class DocumentIbatisDao extends SqlMapClientDaoSupport implements DocumentDao
{
	public void save(Document document)
	{
		if(document.getId() == null)
		{
			Long id = (Long)getSqlMapClientTemplate().queryForObject("insert", document);
			document.setId(id);
		}
		else
			getSqlMapClientTemplate().queryForObject("update", document);
	}
	
	public Document getById(Long id)
	{
		return (Document)getSqlMapClientTemplate().queryForObject("getById", id);
	}
	
	public List<Document> getAll()
	{
		return getSqlMapClientTemplate().queryForList("getAll");
	}
}
