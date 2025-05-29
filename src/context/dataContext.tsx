import { createContext, useCallback, useEffect, useState, type ReactNode } from "react";
import { api } from "../service/api";

interface IAttacks{
    name: string,
    cost: string[],
    convertedEnergyCost: number,
    damage: string,
    text: string
}

export interface ICards {
    id: string,
    name: string,
    supertype: string,
    subtypes: string[],
    hp: string,
    types: string[],
    evolvesFrom: string,
    attacks: IAttacks[],
    rarity: string,
    images: {
        small: string,
        large: string
    }
}
interface IDataContext {
    cards: ICards[],
    saveCards: ICards[],
    isLoading: boolean,
    handleSaveCards: (card: ICards) => void, 
    findAllCards: (search?: string) => void
}
interface IDataContextProvider{
    children: ReactNode
}

export const DataContext = createContext<IDataContext>({
    cards: [],
    saveCards: [],
    isLoading: false,
    handleSaveCards: () => {},
    findAllCards: () => {}
})

const DataContextProvider = ({children}: IDataContextProvider) => {
    const [cards, setCards] = useState<ICards[]>([])
    const [saveCards, setSaveCards] = useState<ICards[]>([])
    const [isLoading, setIsLoading] = useState(false)
    
    const findAllCards = useCallback(async (search?: string) => {
        const controller = new AbortController();
        const signal = controller.signal;
        try {
            setIsLoading(true)
            const parmns = `${(search && search?.length > 0) ? `q=name:${search}&` : ''}page=1&pageSize=30`
            const saveCards = findSaveCards()
            await api.get(`${import.meta.env.VITE_API_URL}?${parmns}`, {signal}).then(response => {
                if (response.data.data) {
                    const cardsList: ICards[] = response.data.data
                    const filterCard = saveCards ? cardsList.filter(findCard => !saveCards.find(item => item.id === findCard.id)) : response.data.data
                    setCards(filterCard)
                    setIsLoading(false)
                }
            })
        } catch (error) {
            setIsLoading(false)
        }
    }, [])


    const findSaveCards = useCallback((): ICards[] | void  => {
        const json = localStorage.getItem("saveCards");
        const jsonFormat: ICards[] = json ? JSON.parse(json) : []
        if (jsonFormat.length > 0) {
            setSaveCards(jsonFormat)
            return jsonFormat
        }
        return []
    }, [])
      

    const handleSaveCards = (card: ICards) =>  {
        const cardsSave = localStorage.getItem("saveCards");
        let cardsSaveFormat = cardsSave ? JSON.parse(cardsSave) : []
        const json = JSON.stringify([card, ...cardsSaveFormat]);
        setSaveCards([...saveCards, card])
        const cardsList = cards.filter(cardItem => cardItem.id !== card.id)
        console.log(cardsList);
        
        setCards([...cardsList])
        localStorage.setItem("saveCards", json);
    }
      

    useEffect(() => {
        findAllCards()
        findSaveCards()
    }, [findAllCards, findSaveCards])

    return (
        <DataContext.Provider value={{cards, isLoading, saveCards, handleSaveCards, findAllCards}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;