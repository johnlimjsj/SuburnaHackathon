
import BrowsePage from '../../containers/global/BrowsePage/BrowsePage'
import GroupsPage from '../../containers/global/GroupsPage/GroupsPage'
import ProfilePage from '../../containers/global/ProfilePage/ProfilePage'
import SellPage from '../../containers/global/SellPage/SellPage'
import RequestsPage from '../../containers/global/RequestsPage/RequestsPage'


const pages = [{
  name: "BrowsePage",
  screen:BrowsePage, 
  label: "Browse",
  icon:"search",
  path: '/',
}, {
  name: "GroupsPage",
  screen:GroupsPage,
  label: "Groups",
  icon: "group",
  path: '/login',
}, {
  name: "SellPage",
  screen:SellPage,
  label: "Sell",
  icon: "add-circle-outline",
  path: '/login',
}, {
  name: "RequestsPage",
  screen:RequestsPage,
  label: "Requests",
  icon: "check-box",
  path: '/login',
}, {
  name: "ProfilePage",
  screen:ProfilePage,
  label: "Profile",
  icon: "account-circle",
  path: '/services',
}];

module.exports = {pages}