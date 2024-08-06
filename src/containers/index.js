import HomePage from "./HomePage/HomePage";
import LoginPage from "./LoginPage/LoginPage";
import DachaPage from "./DachaPage/DachaPage";
import AccountPage from "./AccountPage/AccountPage";
import InProgressPage from "./InprogressPage/InProgressPage";
const tester = () => [
  ...HomePage(),
  ...LoginPage(),
  ...DachaPage(),
  ...AccountPage(),
  ...InProgressPage(),
];

const Routes = () => [...tester()];

export default Routes;
