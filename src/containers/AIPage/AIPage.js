import BaseLayout from "../../components/Layout/BaseLayout"
import AIContainer from "./containers/AIContainer"
import * as ROUTES from "../../constants/routes"

export default () => [
    {
        path: ROUTES.AI_PAGE,
        layout: BaseLayout,
        component: AIContainer
    }
]