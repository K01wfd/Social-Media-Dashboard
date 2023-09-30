const cardsDetails = [
  {
    titleIcon: 'facebook',
    acountName: '@nathanf',
    followersTitle: 'Followers',
    numOfFollowers: '1987',
    footerIcon: 'arrowUp',
    footerTitle: '12 Today',
    borderColor: '#198ff5',
    footerColor: '',
  },

  {
    titleIcon: 'twitter',
    acountName: '@nathanf',
    followersTitle: 'Followers',
    numOfFollowers: '1044',
    footerIcon: 'arrowUp',
    footerTitle: '99 Today',
    borderColor: '#1ca0f2',
    footerColor: '#1db489',
  },
  {
    titleIcon: 'instagram',
    acountName: '@realnathanf',
    followersTitle: 'Followers',
    numOfFollowers: '11k',
    footerIcon: 'arrowUp',
    footerTitle: '1099 Today',
    borderColor: 'linear-gradient(to right, #fdc468 , #df4996)',
    footerColor: '#1db489',
  },
  {
    titleIcon: 'youtube',
    acountName: 'Nathan F.',
    followersTitle: 'Subscribers',
    numOfFollowers: '8239',
    footerIcon: 'arrowDown',
    footerTitle: '144 Today',
    borderColor: '#c4032a',
    footerColor: '#dc414c',
  },
];
const overviewDetails = [
  {
    activity: 'Page',
    activityIcone: 'facebook',
    followers: '87',
    indicator: 'arrowUp',
    percentage: '3%',
    indicatorColor: '#1db489',
  },
  {
    activity: 'Likes',
    activityIcone: 'facebook',
    followers: '52',
    indicator: 'arrowDown',
    percentage: '2%',
    indicatorColor: '#dc414c',
  },
  {
    activity: 'Likes',
    activityIcone: 'instagram',
    followers: '5462',
    indicator: 'arrowUp',
    percentage: '2257%',
    indicatorColor: '#1db489',
  },
  {
    activity: 'Profile Views',
    activityIcone: 'instagram',
    followers: '52k',
    indicator: 'arrowUp',
    percentage: '1375%',
    indicatorColor: '#1db489',
  },
  {
    activity: 'Retweets',
    activityIcone: 'twitter',
    followers: '117',
    indicator: 'arrowUp',
    percentage: '303%',
    indicatorColor: '#1db489',
  },
  {
    activity: 'Likes',
    activityIcone: 'twitter',
    followers: '507',
    indicator: 'arrowUp',
    percentage: '553%',
    indicatorColor: '#1db489',
  },
  {
    activity: 'Likes',
    activityIcone: 'youtube',
    followers: '107',
    indicator: 'arrowDown',
    percentage: '19%',
    indicatorColor: '#dc414c',
  },

  {
    activity: 'Total Views',
    activityIcone: 'youtube',
    followers: '1407',
    indicator: 'arrowDown',
    percentage: '12%',
    indicatorColor: '#dc414c',
  },
];
const todayCardsSection = document.getElementById('today-cards');
const todayCardsTemplate = document.getElementById('today-media-cards');
const overviewCardsSection = document.getElementById('overview-cards');
const overviewCardsTemplate = document.getElementById('overview-media-cards');
const themeTwitch = document.getElementById('switch');

document.addEventListener('DOMContentLoaded', () => {
  themeTwitch.addEventListener('change', (e) => {
    if (e.target.checked) {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  });
  renderTodayCards(cardsDetails);
  renderOverviewCards(overviewDetails);
});

// Function to Dynamically render overview Media Cards
function renderOverviewCards(overviewDetails) {
  let overviewCradBox = overviewCardsSection.querySelector(
    '.overview-cards-box'
  );
  overviewDetails.forEach((card) => {
    let parentElement = overviewCardsTemplate.content.cloneNode(true);

    setFieldValue('overview-media-activity', card.activity, {
      parent: parentElement,
    });
    //
    parentElement.querySelector('[data-overview-media-icon]').src = getIconUrl(
      card.activityIcone
    );
    parentElement.querySelector('[data-overview-media-icon]').alt =
      card.activityIcone + ' icon';
    setFieldValue('overview-followers', card.followers, {
      parent: parentElement,
    });
    //
    parentElement.querySelector('[data-overview-indicator]').src = getIconUrl(
      card.indicator
    );
    parentElement.querySelector('[data-overview-indicator]').alt =
      card.indicator + ' icon';
    //
    setFieldValue('overview-percentage', card.percentage, {
      parent: parentElement,
    });
    //
    parentElement.querySelector('.indicator-box').style.color =
      card.indicatorColor;
    overviewCradBox.append(parentElement);
  });
  overviewCardsSection.appendChild(overviewCradBox);
}
// Function to Dynamically render Today Media Cards
function renderTodayCards(cards) {
  todayCardsSection.innerHTML = '';
  cards.forEach((card) => {
    let parentElement = todayCardsTemplate.content.cloneNode(true);

    parentElement.querySelector('.card-bg-pattern').style.background =
      card.borderColor;
    //
    setFieldValue('today-title', card.acountName, { parent: parentElement });
    //
    parentElement.querySelector('[data-today-title-icon]').src = getIconUrl(
      card.titleIcon
    );
    parentElement.querySelector('[data-today-title-icon]').alt =
      card.titleIcon + ' icon';
    //
    setFieldValue('today-body-title', card.numOfFollowers, {
      parent: parentElement,
    });
    //
    setFieldValue('today-body-subtitle', card.followersTitle, {
      parent: parentElement,
    });
    //
    parentElement.querySelector('[data-today-footer-icon]').src = getIconUrl(
      card.footerIcon
    );
    parentElement.querySelector('[data-today-footer-icon]').alt =
      card.footerIcon + ' icone';
    //
    setFieldValue('today-footer-text', card.footerTitle, {
      parent: parentElement,
    });
    parentElement.querySelector('[data-today-footer-text]').style.color =
      card.footerColor;
    todayCardsSection.append(parentElement);
  });
}

function setFieldValue(selector, value, { parent = document } = {}) {
  parent.querySelector(`[data-${selector}]`).textContent = value;
}

function getIconUrl(iconName) {
  return `images/${iconName}.svg`;
}
