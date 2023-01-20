// Component
import HeroBanner from "../components/HeroBanner";

// Class Icon
import damageIcon from "../assets/images/paladins_roles_icon/Class_Damage_Icon.png";
import flankIcon from "../assets/images/paladins_roles_icon/Class_Flank_Icon.png";
import frontlineIcon from "../assets/images/paladins_roles_icon/Class_Front_Line_Icon.png";
import supportIcon from "../assets/images/paladins_roles_icon/Class_Support_Icon.png";

// File
import { champions_data } from "../data/champions_data.js";
import { all_champion_list } from "../data/all_champions.js";
import { champions_cards_info } from "../data/all_champions_cards.js";
import ChampionSkills from "../components/ChampionSkills";
import ChampionLegendaryCards from "../components/ChampionLegendaryCards";
import ChampionCommonCards from "../components/ChampionCommonCards";

function ChampionPage() {
  // Constants
  const championCards = champions_cards_info;
  const allChampions = all_champion_list; // Local data

  const champion: any = allChampions.paladins_champion.filter(
    (champions: any) => {
      return champions.Name === window.location.href.split("/paladins/champions/")[1].split("%20").join(" ");
    }
  );
  
  // Variables
  var icon;
  var role: string = "";

  // Check if the champion has cards and get the legendaries
  if (championCards !== undefined) {
    championCards.champion_info.filter((championcard: any) => {
      return championcard.rarity.includes("Legendary");
    });
  }

  // Get the information (Difficulties) from the champion
  const data: any = champions_data.champions.filter((champions: any) => {
    return champions.name === champion[0].Name;
  });

  switch (champion[0].Roles) {
    case "Paladins Dégâts":
      icon = damageIcon;
      role = "Dégâts";
      break;
    case "Paladins Flanc":
      icon = flankIcon;
      role = "Flanc";
      break;
    case "Paladins Tank":
      icon = frontlineIcon;
      role = "Tank";
      break;
    case "Paladins Soutien":
      icon = supportIcon;
      role = "Soutien";
      break;
  }

  // Difficulty rating system
  const maxRating = 5;

  let stars = new Array(maxRating);

  if (data.length > 0) {
    stars.fill("Star", 0, parseInt(data[0].difficulty));
    stars.fill("StarOutlineIcon", parseInt(data[0].difficulty));
  }

    // Sort Legendary Cards
    var legendaryCards : Array<any> = [];
    championCards.champion_info.map((championcard: any) => {
      if (
        championcard.rarity.includes("Legendary") &&
        championcard.champion_name.includes(champion[0].Name) ||
        championcard.rarity.includes("Legendary") &&
        championcard.champion_name.includes(champion[0].Name.split(" ").join(""))
      )
      {
        legendaryCards.push(championcard);
      }
      })

  // Sort Common Cards
  var commonCards : Array<any> = [];
  championCards.champion_info.map((championcard: any) => {
  if (
    championcard.rarity.includes("Common") &&
    championcard.champion_name.includes(champion[0].Name) ||
    championcard.rarity.includes("Common") &&
    championcard.champion_name.includes(champion[0].Name.split(" ").join(""))
  )
  {
    commonCards.push(championcard);
  }
  })
  commonCards.sort((a: any, b: any) =>
    a.card_description.localeCompare(b.card_description)
  );

  return (
    <>
      <section className="champion__page">
        <HeroBanner
          champion_name={champion[0].Name}
          champion_lore={champion[0].Lore}
          champion_health={champion[0].Health}
          stars={stars}
          icon={icon}
          role={role}
        />
        <h2 className="champion__page__skills__title"> Capacités </h2>
        <ChampionSkills champion={champion[0]} />

        <ChampionLegendaryCards
          champion_leg_card={legendaryCards}
        />


        <ChampionCommonCards champion_common_card={commonCards}/>
      </section>
    </>
  );
}

export default ChampionPage;
