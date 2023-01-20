import AccessTimeIcon from "@mui/icons-material/AccessTime";

type Props = {
  champion_common_card: any;
};

function ChampionCommonCards({ champion_common_card }: Props) {
  return (
    <table className="champion__page__cards__common__table">
      <thead>
        <tr>
        <th> Nom </th>
        <th> Image </th>
        <th> Catégorie </th>
        <th> Description </th>
        <th> Coolodwn </th>

        </tr>
      </thead>
      <tbody>
        {champion_common_card.map((championcard: any, key : any) => {
          var categorie = ""
          var description = championcard.card_description
          try {
            categorie = championcard.card_description.split("]")[0].substring(1);
            description = championcard.card_description.split("]")[1].substring(1)
          } catch (error) {
            console.log(error);
          }
          
          return (
            <tr key={key}>
              <td className="champion__page__cards__common__table__name">{championcard.card_name}</td>
              <td>
                <img src={championcard.championCard_URL} alt="" />
              </td>
              <td>{categorie}</td>
              <td>{description}</td>
              { championcard.recharge_seconds > 0 ?
                <td className="champion__page__cards__common__table__cooldown"> 
                <span>{championcard.recharge_seconds} </span> <AccessTimeIcon /></td> : 
                <td></td>
              }

            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ChampionCommonCards;
