import { useContext, useState } from "react"
import { DataContext, type ICards } from "../../context/dataContext"

interface ICardItem {
    card: ICards,
    isSearch?: boolean
}
const CardItem: React.FC<ICardItem> = ({ card, isSearch }) => {
    const [isModal, setIsModal] = useState(false)
    const {handleSaveCards} = useContext(DataContext)
    return (
        <div className={`bg-red-50 border border-red-300 rounded-md shadow p-2 w-full relative ${!isSearch && "max-w-[350px]"}`}>
            <div className="flex flex-col md:flex-col gap-6 items-start">
                <img
                    src={card.images.large}
                    alt={card.name}
                    className="w-full rounded-lg shadow-md border border-red-200"
                />
                <div className="flex flex-col text-center w-full">
                    <p className="text-xl text-black mb-1"><b>ID:</b> {card.id}</p>
                    <h2 className="text-2xl font-bold text-black">{card.name}</h2>

                    <button className="bg-red-600 w-full mt-5 text-white rounded text-2xl font-medium py-3 px-8 cursor-pointer" onClick={() => handleSaveCards(card)}>Salvar</button>
                    
                     <button
                        onClick={() => setIsModal(!isModal)}
                        className="text-white w-[35px] h-[35px] bg-red-600 hover:bg-black-700 rounded shadow absolute top-[15px] right-[15px] cursor-pointer"
                    >
                        <span className="barHorizontal w-full h-[4px] bg-white block absolute top-1/2 left"></span>
                        {!isModal && <span className="barVertical bg-white block w-[4px] h-full absolute left-1/2 top-0"></span>}
                    </button>

                    {isModal && (
                        <div className="mt-4 rounded-xl shadow-md absolute top-[50px] bg-white w-[95%] h-[80%] left right py-8 px-6">
                            <p className="text-2xl text-black flex justify-between mb-2"><strong>Supertype:</strong> <span>{card.supertype}</span></p>
                            <p className="text-2xl text-black flex justify-between mb-2"><strong>Subtypes:</strong> <span>{card.subtypes.join(", ")}</span></p>
                            <p className="text-2xl text-black flex justify-between mb-2"><strong>HP:</strong> <span>{card.hp}</span></p>
                            <p className="text-2xl text-black flex justify-between mb-2"><strong>Types:</strong> <span>{card.types.join(", ")}</span></p>
                            <p className="text-2xl text-black flex justify-between mb-2"><strong  style={{"maxWidth": "min-content"}}>Evolves From:</strong> <span>{card.evolvesFrom}</span></p>
                            <p className="text-2xl text-black flex justify-between mb-2"><strong>Rarity:</strong> <span>{card.rarity}</span></p>
                            <div>
                                <strong className="text-2xl text-black">Attacks:</strong>
                                <ul className="list-disc list-inside ml-4 ">
                                    {card.attacks.map((atk, i) => (
                                        <li key={i} className="text-xl text-black">{atk.name} – {atk.damage} damage</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )} 

                </div>
            </div>
        </div>
    )
}

export default CardItem