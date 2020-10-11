
const filterChampionsByClass = (e, champions, setFilteredChampions) => {
    const filter = e.target.innerText;
    let wordToFilter = "";

    if(filter === "All") {
        setFilteredChampions(champions);
    }

    if(filter.charAt(filter.length - 1) === "s") {
        const filterToArray = filter.split("");
        filterToArray.pop();
        wordToFilter = filterToArray.join("");
        
    } else {
        wordToFilter = filter;
    }
    
    const filteredChampions = champions.filter((champion) => {
        return champion.tags.includes(wordToFilter);
    })

    setFilteredChampions(filteredChampions);
}

export default filterChampionsByClass
