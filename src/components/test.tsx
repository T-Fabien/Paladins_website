import React from "react";

type Props = {
  data: any;
};

function test({ data }: Props) {
  data.deck.map((card: any, key: any) => {
    console.log(card.card_id);
  });

  return (
    <div>
      {data.deck.map((card: any, key: any) => {
        return (<p key={key}>{card.card_id}</p>)
      })}
    </div>
  );
}

export default test;
