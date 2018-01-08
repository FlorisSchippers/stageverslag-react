const appVars = {
    url: `${window.location.protocol}//${window.location.host}`,
    title: 'Stageverslag',
    api: {
        base: 'http://stageverslag.local/wp-json/wp/v2/', // Todo: localhost
    },
    theme: {
        lighter: '#DDFAA4',
        light: '#BCE270',
        primary: '#7B9F35',
        dark: '#425B10',
        darker: '#101800',
    }
};

export default appVars;