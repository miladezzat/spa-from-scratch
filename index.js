function processAjaxData(response, urlPath) {
    document.getElementById("content").innerHTML = response.html;

    document.title = response.pageTitle;

    window.history.pushState(
        {
            "html": response.html,
            "pageTitle": response.pageTitle
        },
        "",
        urlPath
    );
}

window.onpopstate = function (e) {
    if (e.state) {
        document.getElementById("content").innerHTML = e.state.html;
        document.title = e.state.pageTitle;
    }
};
const imported = document.createElement('script');
imported.src = './pages.js';
document.head.appendChild(imported);


function clickOnLink(path) {
    switch (path) {
        case 'home':
        case '/':
            processAjaxData(getPageData("home"), '/')
            break;
        case 'p2.html':
        case '/p2.html':
            processAjaxData(getPageData("p2"), '/p2.html')
            break;
        case 'p3.html':
        case '/p3.html':
            processAjaxData(getPageData("p3"), '/p3.html')
            break;
        default:
            processAjaxData(getPageData("home"), '/');
            break;
    }
}