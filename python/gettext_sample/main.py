import gettext

gettext.install("messages", "./locales", unicode=True)

name = _("Mary")
animal = _("lamb")
print _("%s had a little %s") % (name, animal)
print _("hey")
