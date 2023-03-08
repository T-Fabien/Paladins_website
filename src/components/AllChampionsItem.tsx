import React from 'react';
import { Link } from 'react-router-dom';

import damageIcon from '../assets/images/paladins_roles_icon/Class_Damage_Icon_Black.png';
import flankIcon from '../assets/images/paladins_roles_icon/Class_Flank_Icon_Black.png';
import frontlineIcon from '../assets/images/paladins_roles_icon/Class_Front_Line_Icon_Black.png';
import supportIcon from '../assets/images/paladins_roles_icon/Class_Support_Icon_Black.png';

type Props = {
  key: number;
  champion_image: string;
  champion: any;
  filter?: boolean;
};

function ChampionCard({ champion_image, champion, filter }: Props) {
  
  let icon;
  switch (champion.Roles) {
    case 'Paladins Dégâts':
      icon = damageIcon;
      break;
    case 'Paladins Flanc':
      icon = flankIcon;
      break;
    case 'Paladins Tank':
      icon = frontlineIcon;
      break;
    case 'Paladins Soutien':
      icon = supportIcon;
      break;
  }
  if (filter === false) {
    return (
      <div className="champion__grid__card card__nofiltered">
        <Link to={`/champion/${champion.Name}`}>
          <img src={champion_image} alt="" className="champion__grid__card__championimage" />
          <div>
            <img src={icon} alt="" className="champion__grid__card__classicon" />
            <p> {champion.Name}</p>
          </div>
        </Link>
      </div>
    );
  } else {
    return (
        <div className="champion__grid__card">
        <Link to={'/paladins/champions/'+ champion.Name} state={{ paladins_champion: champion }}>
          <img src={champion_image} alt="" className="champion__grid__card__championimage" />
          <div>
            <img src={icon} alt="" className="champion__grid__card__classicon" />
            <p>{champion.Name}</p>
          </div>
        </Link>
      </div>
      );
  }
}

export default ChampionCard;
