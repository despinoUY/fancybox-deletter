function injectScript() {
    var id = window.setTimeout(function() {}, 0);

    while (id--) {
        window.clearTimeout(id); // will do nothing if no timeout with id is present
    }

    ttlChecked=true;
    document.getElementsByClassName('contenido-exclusivo-nota')[0].remove();
    document.getElementsByClassName('content-modules')[0].style.display = "block";

}

injectScript();
