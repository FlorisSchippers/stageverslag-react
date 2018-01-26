import glamorous from 'glamorous';

const mediaQueries = {
    mobile_landscape: '@media only screen and (min-width: 640px)',
    tablet_portrait: '@media only screen and (min-width: 768px)',
    tablet_landscape: '@media only screen and (min-width: 1024px)',
    desktop: '@media only screen and (min-width: 1250px)',
};

export default glamorous.img({
    marginTop: '4px',
    width: '0px',

    [mediaQueries.tablet_portrait]: {
        width: '100px',
    },
    [mediaQueries.tablet_landscape]: {
    },
});