import { useContext } from "react"
import HomeView from "../../view/HomeView"
import { DataContext } from "../../../context/dataContext"

const HomeContainer: React.FC = () => {
    const {cards, isLoading} = useContext(DataContext)
    return (
        <HomeView cards={cards} isLoading={isLoading}/>
    )
}

export default HomeContainer