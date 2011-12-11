from distutils.core import setup
try:
	from setuptools import setup
except:
	pass

setup(
    name = "testit",
    version = "0.0.1",
    author = "Stanislav Feldman","),
    keywords = "web framework gevent",
    install_requires = ["nose", "rednose"],
)
