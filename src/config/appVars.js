const appVars = {
  url: `${window.location.protocol}//${window.location.host}`,
  title: 'Hero Breakfast Report',
  share: {
    twitter: {
      url: 'https://twitter.com/share?url=:url&text=:message',
    },
    facebook: {
      id: '449728242067603',
    },
  },
  social: {
    twitter: 'https://www.twitter.com',
    facebook: 'https://www.facebook.com',
    instagram: 'https://www.instagram.com/hero.fruit/',
  },
  api: {
    base: 'http://stageverslag.dev/wp-json', //TODO: API REFERENCE
    namespaces: {
      wp: '/wp/v2',
      ontwikkelen: '/wp/v2/ontwikkelen/',
    },
  },
  video: {
    url: 'https://www.youtube.com/watch?v=Yl2_YZYn4ow',
  },
  strings: {
    copyright: 'Hero 2017',
    tooltip: {
      next: 'Next question',
      skip: 'Skip question',
      progress: 'Question :current of :total',
      finish: 'Finish survey',
      start: 'Start survey',
    },
    title: {
      header: 'Goodmorning!',
      footer: 'Thank you!',
      privacy: 'About your privacy',
      terms: 'Our conditions',
    },
    subtitle: {
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
    },
    buttons: {
      video: 'Watch video',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
      close: 'Close',
    },
    text: {
      footer: 'Thanks for sharing your morning rituals with us! Let our Hero jam and our awesome positivity heroes help you open up to a brighter day!',
      header: 'A slice of bread on the go or a "me-moment"? Total silence or loud music? We asked people around the world how they start their day. Are there secrets to a positive start for a bright day? Or are they simply positive by nature? And how about you?',
      subscribe: 'Join our breakfast club and get tips on improving your morning routine every other week.',
      privacy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed ex nunc. Maecenas bibendum, tortor at aliquet tempor, enim mi gravida quam, non vehicula ligula ligula ac tortor. Vivamus accumsan nibh nec ligula pulvinar, quis sollicitudin sapien sagittis. Donec sit amet auctor libero. Maecenas eu pretium dui, non malesuada nisl. Donec nisl mi, commodo a tincidunt a, rutrum tempus leo. Sed interdum in ex id gravida.Fusce tristique consectetur pharetra. Duis finibus malesuada neque, lacinia bibendum dui. Donec vitae scelerisque risus. Donec mauris neque, hendrerit sit amet sapien et, sodales euismod eros. Maecenas blandit nulla felis, vel lobortis mi malesuada nec. Cras dictum leo risus, a laoreet massa feugiat sed. Pellentesque nec volutpat turpis, vitae aliquam dolor. Nullam elit lorem, bibendum sit amet turpis non, hendrerit suscipit purus. Phasellus vehicula, ligula eget gravida maximus, tortor mauris ultricies augue, eget sagittis urna diam sed sem. In id libero eu diam euismod sodales eu dignissim tellus. Sed a quam vel nisi imperdiet hendrerit quis ut neque. Curabitur molestie elit odio, eu interdum dui semper et. Aliquam a fermentum odio, faucibus porta nisl. Integer semper rhoncus tortor, ac dictum arcu dignissim a. Donec eget nunc semper nunc dignissim consectetur.',
      terms: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed ex nunc. Maecenas bibendum, tortor at aliquet tempor, enim mi gravida quam, non vehicula ligula ligula ac tortor. Vivamus accumsan nibh nec ligula pulvinar, quis sollicitudin sapien sagittis. Donec sit amet auctor libero. Maecenas eu pretium dui, non malesuada nisl. Donec nisl mi, commodo a tincidunt a, rutrum tempus leo. Sed interdum in ex id gravida.Fusce tristique consectetur pharetra. Duis finibus malesuada neque, lacinia bibendum dui. Donec vitae scelerisque risus. Donec mauris neque, hendrerit sit amet sapien et, sodales euismod eros. Maecenas blandit nulla felis, vel lobortis mi malesuada nec. Cras dictum leo risus, a laoreet massa feugiat sed. Pellentesque nec volutpat turpis, vitae aliquam dolor. Nullam elit lorem, bibendum sit amet turpis non, hendrerit suscipit purus. Phasellus vehicula, ligula eget gravida maximus, tortor mauris ultricies augue, eget sagittis urna diam sed sem. In id libero eu diam euismod sodales eu dignissim tellus. Sed a quam vel nisi imperdiet hendrerit quis ut neque. Curabitur molestie elit odio, eu interdum dui semper et. Aliquam a fermentum odio, faucibus porta nisl. Integer semper rhoncus tortor, ac dictum arcu dignissim a. Donec eget nunc semper nunc dignissim consectetur.',
    },
    footer: {
      email: 'Your e-mail address:',
      subscribe: 'Subscribe',
      thank_you: 'Thank You for subscribing!',
      stay_up_to_date: 'Stay up to date!',
      newsletter: 'Newsletter'
    },
    menu: {
      take_survey: 'Take the survey',
      watch_video: 'Watch the video',
    }
  },
  routes: {
    terms: 'terms-conditions',
    privacy: 'privacy-policy',
    video: 'video',
  }
};

export default appVars;
