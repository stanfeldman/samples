import sys
sys.path.append(".")
from models import Manager
from adapters.postgres import PostgresAdapter

manager = Manager(adapter=PostgresAdapter)
