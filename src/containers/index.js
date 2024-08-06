import HomePage from "./HomePage/HomePage";
import LoginPage from "./LoginPage/LoginPage";
import AccountPage from "./AccountPage/AccountPage";
import InProgressPage from "./InprogressPage/InProgressPage";
const tester = () => [
  ...HomePage(),
  ...LoginPage(),
  ...AccountPage(),
  ...InProgressPage(),
];

const Routes = () => [...tester()];

export default Routes;
