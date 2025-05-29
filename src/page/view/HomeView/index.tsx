import type { ICards } from "../../../context/dataContext"
import CardItem from "../../../components/CardItem";
import CardsSaveList from "../../../components/CardsSaveList";
import background from '../../../assets/pokemon-background.jpg'
import logo from '../../../assets/logo.jpg'
import SearchCards from "../../../components/SearchCards";


interface IHomeView {
    cards: ICards[],
    isLoading?: boolean
}

const HomeView: React.FC<IHomeView> = ({ cards, isLoading = false }) => {

    return (
        <div className="min-h-screen text-red-700 py-6 ">
           <div className="fixed top-0 left-0 z-0 w-full h-full">
                <img
                    src={background}
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="max-w-[1200px] px-6 mx-auto relative bg-white py-6 rounded-xl">
                <div className="header-logo w-full flex justify-center p-6" >
                    <img
                        src={logo}
                        alt=""
                        className="w-[200px] h-[200px] rounded-lg"
                    />
                </div>
                <div className="flex-col container">
                    <CardsSaveList />
                    <h1 className="text-4xl font-bold mb-6 text-center text-red-800 ">Pokémon Cards</h1>
                    <SearchCards />
                    <div>

                        <div className="space-y-6 flex gap-4 flex-wrap justify-center items-center bg-gray-100 rounded-xl py-10 min-h-[500px]">
                            {!isLoading && cards.map((item) => (
                                <CardItem
                                    key={item.id}
                                    card={item}
                                />
                            ))}
                            {
                                isLoading && (
                                    <h1 className="text-2xl font-medium mb-6 text-center text-black ">Proucurando......</h1>
                                )
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeView