public class Document
{
	public Long getId() { return this.id; }
	
	public void setId(Long id) { this.id = id; }
	
	public String getBody() { return this.body; }
	
	public void setBody(String body) { this.body = body; }
	
	public String getTitle() { return this.title; }
	
	public void setTitle(String title) { this.title = title; }
	
	private Long id;
	
	private String body;
	
	private String title;
}
