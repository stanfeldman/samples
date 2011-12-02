import xhtml2pdf.pisa as pisa
import cStringIO as StringIO
html = """
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>PDF Demo</title>
  </head>
  <body>
    <h1>PDF Demo</h1>
    <p>lala</p>
    <h2>h2</h2>
  </body>
</html>
"""
result = StringIO.StringIO()
pdf = pisa.CreatePDF(StringIO.StringIO(html), result)
f = open('generated.pdf', 'w')
f.write(result.getvalue())

import odf.opendocument
import odf.text
textdoc = odf.opendocument.OpenDocumentText()
p = odf.text.P(text="Hello World!")
textdoc.text.addElement(p)
textdoc.save("generated", True)

import docx
document = docx.newdocument()
docbody = document.xpath('/w:document/w:body', namespaces=docx.nsprefixes)[0]
docbody.append(docx.heading('''Welcome to Python's docx module''',1)  )   
docbody.append(docx.heading('Make and edit docx in 200 lines of pure Python',2))
docbody.append(docx.paragraph('The module was created when I was looking for a Python support for MS Word .doc files'))
coreprops = docx.coreproperties(title='Python docx demo',subject='A practical example of making docx from Python',creator='stas',keywords=['python','Office Open XML','Word'])
appprops = docx.appproperties()
contenttypes = docx.contenttypes()
websettings = docx.websettings()
wordrelationships = docx.wordrelationships(docx.relationshiplist())
docx.savedocx(document, coreprops, appprops, contenttypes, websettings, wordrelationships, 'generated.docx')
