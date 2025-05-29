import { useContext } from "react"
import { DataContext } from "../../context/dataContext"
import CardSaveItem from "../CardSaveItem"

const CardsSaveList = () => {
    const {saveCards} = useContext(DataContext)
    return (
        <div className="save-cards mb-12">
            {
                !(saveCards.length > 0) ? (
                    <h1 className="text-3xl font-bold mb-8 text-center text-red-800 ">Nenhuma Carta Salva</h1>
                ):(
                    <>
                        <h1 className="text-2xl font-bold mb-6 text-left text-red-800 ">Cartas Salvas</h1>
                        <div className="save-cards-container flex gap-4 justify-center bg-gray-100 px-2 py-8 flex-wrap rounded-xl">
                            {
                                saveCards && saveCards.map(card => 
                                    <CardSaveItem card={card} key={card.id}/>
                                )
                            }
                        </div>
                    </>
                )
            }
            
        </div>
    )
}

export default CardsSaveList