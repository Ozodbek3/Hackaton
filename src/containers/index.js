import HomePage from "./HomePage/HomePage";
import LoginPage from "./LoginPage/LoginPage";
import AccountPage from "./AccountPage/AccountPage";
import InProgressPage from "./InprogressPage/InProgressPage";
import AIPage from "./AIPage/AIPage";

const tester = () => [
  ...HomePage(),
  ...LoginPage(),
  ...AccountPage(),
  ...InProgressPage(),
  ...AIPage(),
];

const Routes = () => [...tester()];

export default Routes;
