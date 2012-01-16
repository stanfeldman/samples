from scss.parser import Stylesheet
from time import time

code = r"""
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
"""
time1 = time()
css_parser = Stylesheet(options={"compress": True})
result = css_parser.loads(code)
time2 = time()
print result
print "time: " + str(time2-time1)
