import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/dataContext";

const SearchCards: React.FC = () => {
    const {findAllCards} = useContext(DataContext)
    const [search, setSearch] = useState("");

    useEffect(() => {
        if (search.length > 0) {
            findAllCards(search)
            return
        }
        findAllCards()
    }, [search])

  return (
    <div className="w-full max-w-[800px] mx-auto mb-12">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar por nome"
        className="w-full px-6 py-3 text-2xl border border-red-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 text-red-800 placeholder-red-400 "
      />
    </div>
  );
}

export default SearchCards