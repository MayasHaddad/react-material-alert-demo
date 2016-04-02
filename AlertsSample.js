var Natures = require('react-material-alert').Natures
var React = require('react')

var Alerts = [
  {
    nature: Natures.SUCCESS,
    content: function () { return <div style={{color: 'white'}}>This is a success people!</div> }
  },
  {
    nature: Natures.WARNING,
    content: function () { return <div style={{color: 'white'}}>Looks like something might go wrong!</div> }
  },
  {
    nature: Natures.FAILURE,
    content: function () { return <div style={{color: 'white'}}>Houston, we have a problem!</div> }
  },
  {
    nature: Natures.INFO,
    content: function () { return <div style={{color: 'white'}}>Plain information</div> }
  }
]

module.exports = Alerts
