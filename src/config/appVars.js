const appVars = {
  url: `${window.location.protocol}//${window.location.host}`,
  title: 'Stageverslag',
  api: {
    local: 'http://stageverslag-wordpress.test/wp-json/wp/v2/',
    live: 'http://wordpress.florisschippers.nl/index.php/wp-json/wp/v2/',
  },
  theme: {
        // lighter: '#DDFAA4',
        // light: '#BCE270',
        // primary: '#7B9F35',
        // dark: '#425B10',
        // darker: '#101800',
    lighter: '#FBE0E3',
    light: '#F75C6B',
    primary: '#E0091E',
    dark: '#99000F',
    darker: '#4D0007',
  },
};

export default appVars;
