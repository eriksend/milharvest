function styleMil() {
var theSpans = document.getElementsByTagName('span');
var lastSpan = theSpans.length - 1;
theSpans[lastSpan].style.marginRight = "1em";
theSpans[lastSpan].style.marginBottom = "1em";
theSpans[lastSpan].style.marginTop = "-1em";
theSpans[lastSpan].style.fontFamily = "inherit";
theSpans[lastSpan].style.fontSize = "inherit";
}
window.onload = styleMil;
