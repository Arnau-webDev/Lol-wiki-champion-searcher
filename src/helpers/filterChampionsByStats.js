
const filterChampionsByStats = (e, champions, setFilteredChampions) => {
    const filter = e.target.innerText;
    const statToFilter = filter.slice(4, filter.length).toLowerCase().trim();

    const filteredChampionsByStats = champions.filter((champion) => {
        return champion.info.[statToFilter] === 10;
    })

    setFilteredChampions(filteredChampionsByStats);
}

export default filterChampionsByStats
