import type { ICards } from "../../context/dataContext"

interface CardSaveProps{
    card: ICards
}
const CardSaveItem: React.FC<CardSaveProps> = ({card}) => {
    return (
        <div className={`bg-red-50 border border-red-300 rounded-md shadow p-2 items-center max-w-[350px]`}>
            <div className="flex gap-3 items-start  h-full">
                <div className="flex-col flex justify-center  h-full flex-1 w-full">
                    <img
                        src={card.images.small}
                        alt={card.name}
                        className="  w-full rounded-lg shadow-md border border-red-200"
                    />
                    <p className="text-sm text-center text-black mt-1"><b>ID:</b> {card.id}</p>
                    <h2 className="text-sm font-bold text-center text-black">{card.name}</h2>
                </div>
                
                <div className="flex flex-1 flex-col text-center w-full">
                    

                    <div className="mt-2 rounded-xl shadow-md  bg-white p-3 ">
                        <p className="text-sm text-black flex justify-between mb-1"><strong>Supertype:</strong> <span>{card.supertype}</span></p>
                        <p className="text-sm text-black flex justify-between mb-1"><strong>Subtypes:</strong> <span>{card.subtypes.join(", ")}</span></p>
                        <p className="text-sm text-black flex justify-between mb-1"><strong>HP:</strong> <span>{card.hp}</span></p>
                        <p className="text-sm text-black flex justify-between mb-1"><strong>Types:</strong> <span>{card.types.join(", ")}</span></p>
                        <p className="text-sm text-black flex justify-between mb-1"><strong style={{ "maxWidth": "min-content" }}>Evolves From:</strong> <span>{card.evolvesFrom}</span></p>
                        <p className="text-sm text-black flex justify-between mb-1"><strong>Rarity:</strong> <span>{card.rarity}</span></p>
                        <div>
                            <strong className="text-sm text-black">Attacks:</strong>
                            <ul className="list-none list-inside ml-4 ">
                                {card.attacks.map((atk, i) => (
                                    <li key={i} className="text-sm text-black">{atk.name} – {atk.damage} damage</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CardSaveItem