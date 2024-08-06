import BaseLayout from "../../components/Layout/BaseLayout"
import Inprogress from "./containers/InprogressPage"
import * as ROUTES from "../../constants/routes"

export default () => [
    {
        path: ROUTES.INPROGRESS_PAGE,
        layout: BaseLayout,
        component: Inprogress
    }
]