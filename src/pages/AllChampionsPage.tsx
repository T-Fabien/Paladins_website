import {useState } from "react";

import AllChampionsGrid from "../components/AllChampionsGrid";

// File
import { all_champion_list } from "../data/all_champions";

function AllChampionsPage() {

  // Constants
  const allChampions = all_champion_list; // Local data 
  // State
  const [Filter, SetFilter] = useState("name");
  const [FilterData, SetFilterData] = useState<any>(allChampions.paladins_champion); // Filters the champions according to the user's choice


  // Champion Filter
  const updateFilter = (role: string) => {
    var filter_champions = allChampions.paladins_champion;

    if (role === "" || Filter === role) {
      SetFilter("");
      filter_champions = allChampions.paladins_champion;
    } else {
      if (Filter !== role) {
        SetFilter(role);
        filter_champions =  allChampions.paladins_champion
          .filter((champion: any) => {
            return champion.Roles.includes(role);
          })
          .sort((a: any, b: any) => {
            return a.rôle > b.rôle ? 1 : a.rôle < b.rôle ? -1 : 0;
          });
      }
    }
    SetFilterData(filter_champions);
  };

    return (
      <div>
        <button onClick={() => updateFilter("")}>All</button>
        <button onClick={() => updateFilter("Dégâts")}>Damage</button>
        <button onClick={() => updateFilter("Flanc")}>Flank</button>
        <button onClick={() => updateFilter("Tank")}>Tank</button>
        <button onClick={() => updateFilter("Soutien")}>Healer</button>
        <AllChampionsGrid
          data={FilterData}
          champions={ allChampions.paladins_champion}
          filter={Filter}
        />
      </div>
    );
}

export default AllChampionsPage;
