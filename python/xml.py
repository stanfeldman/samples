from lxml import etree
from StringIO import StringIO

f = StringIO('<foo><bar>lafj</bar></foo>')
tree = etree.parse(f)
r = tree.xpath('/foo/bar')
print r[0].tag

xslt_root = etree.XML("""
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<foo><xsl:value-of select="/a/b/text()" /></foo>
	</xsl:template>
</xsl:stylesheet>
""")
transform = etree.XSLT(xslt_root)
f = StringIO("<a><b>text</b></a>")
doc = etree.parse(f)
result = transform(doc)
print result
