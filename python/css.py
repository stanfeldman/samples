import scss
from scss import Scss
from time import time

code = r"""
@option compress: no;
$grid-columns-count: 16;
@import 'styles/reset.css';
@import 'styles/grid.css';
.selector {
    a {
        display: block;
    }
    strong {
        color: blue;
    }
}
$main-color: #ce4dd6;
$style: solid;
$side: bottom;
#navbar {
    border-#{$side}: {
    color: $main-color;
    style: $style;
    }
}
.grid2
{
	@include grid;
}
"""
scss.LOAD_PATHS = "/home/stanislavfeldman/projects/samples/html/grid/views/static"
print scss.LOAD_PATHS
time1 = time()
css_parser = Scss()
result = css_parser.compile(code)
time2 = time()
print result
print "time: " + str(time2-time1)
