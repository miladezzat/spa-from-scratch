const pages = {
    home: {
        pageTitle: "Home",
        html: `
            <h1 class="text-center">Home</h1>
            <p>Hello EveryOne From Home</p>
        `
    },
    p2:{
        pageTitle: "P2",
        html: `
        <h1 class="text-center">P2</h1>
        <p>This is page 2</p>
        `
    },
    p3: {
        pageTitle: "P3",
        html: `
        <h1 class="text-center">P3</h1>
        <p>this is page 3</p>
        `
    }
}

const getPageData = (key) => pages[key]