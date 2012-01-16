import java.sql.ResultSet;
import java.sql.SQLException; 
import org.springframework.jdbc.core.RowMapper;

public class DocumentRowMapper implements RowMapper<Document>
{
	public Document mapRow(ResultSet rs, int rowNum) throws SQLException
	{
		Document doc = new Document();
		doc.setId(rs.getInt("id"));
		doc.setTitle(rs.getString("title"));
		doc.setBody(rs.getString("body"));
		return doc;
	}
}
