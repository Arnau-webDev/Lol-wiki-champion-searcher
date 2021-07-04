
const filterChampionsByClass = (e, champions, setFilteredChampions) => {
    const filter = e.target.innerText;
    let wordToFilter = "";

    if (filter === "ALL") {
        setFilteredChampions(champions);
    }

    if (filter.charAt(filter.length - 1) === "S") {
        const filterToArray = filter.split("");
        filterToArray.pop();
        wordToFilter = filterToArray.join("");
    } else {
        wordToFilter = filter;
    }

    wordToFilter = wordToFilter.charAt(0).toUpperCase() + wordToFilter.slice(1).toLowerCase();

    const filteredChampions = champions.filter((champion) => {
        return champion.tags[0].includes(wordToFilter);
    })

    setFilteredChampions(filteredChampions);
}

export default filterChampionsByClass
