
import GroupsPage from 'SuburnaHackathon/app/containers/global/GroupsPage/GroupsPage'
import ProfilePage from 'SuburnaHackathon/app/containers/global/ProfilePage/ProfilePage'
import SellPage from 'SuburnaHackathon/app/containers/global/SellPage/SellPage'
import RequestsPage from 'SuburnaHackathon/app/containers/global/RequestsPage/RequestsPage'
import { BrowseStack} from '../Stacks'

export const pages = [{
  name: "BrowsePage",
  screen:BrowseStack, 
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
