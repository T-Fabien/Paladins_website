import React from "react";

type Props = {
  champion_leg_card: any;
};

function ChampionLegendaryCards({ champion_leg_card }: Props) {
  console.log(champion_leg_card);

  var categorie = "";
  var description = "";


  return (
    <div className={"champion__page__cards__legendary"}>
      {champion_leg_card.map((championcard: any) => {
        description = championcard.card_description;
          try {
            categorie = championcard.card_description.split("]")[0].substring(1);
            description = championcard.card_description.split("]")[1].substring(1);
          } catch (error) {
            console.log(error);
          }
        return (
          <div
            className={"champion__page__cards__legendary__container"}
            key={championcard.card_id1}
          >
            <img
              className={"champion__page__cards__legendary__container__img"}
              src={championcard.championTalent_URL}
              alt=""
            />
            <h3
              className={"champion__page__cards__legendary__container__title"}
            >
              {championcard.card_name}
            </h3>
                <p className={"champion__page__cards__legendary__container__text"}>
                  <span>
                  {categorie} {" "}
                  </span>
                  :  {description}
                </p>
          </div>
        );
      })}
    </div>
  );
}

export default ChampionLegendaryCards;
