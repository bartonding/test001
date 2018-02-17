let config = {
  'title': 'bartonding',
  'keywords': 'kkk',
  'description': 'ddd'
};

config.layout = require('@layout/single')

require('./index.css');

config.qbtop = [
  require('@modules/top1')
];

config.qbheader = [
  require('@modules/header1')
];

config.qbbody = [
  require('@modules/body1'),
  require('@modules/body2')
];

config.qbfooter = [
  require('@modules/footer1')
]

module.exports = config