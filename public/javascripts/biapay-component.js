window.MyLoginZoidComponent = zoid.create({
    dimensions: {
        width: '600px',
        height: '400px'
    },
    // The html tag used to render my component
    props: {
        Authorization: {
            type: 'string',
            required: true,
            queryParam: true
        }
    },

    tag: 'biapay-component',

    // The url that will be loaded in the iframe or popup, when someone includes my component on their page

    url: 'http://localhost:9003/gateway/load'
});