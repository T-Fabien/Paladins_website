import AllChampionsItem from './AllChampionsItem';

type Props = {
    data: any;
    champions: any;
    filter: string;
  };

function AllChampionsGrid({data, champions, filter}: Props) {

  let nofilter_champion: Array<any> = [];

  if (filter !== 'name') {
    champions.filter((champion: any) => {
      if (!champion.Roles.includes(filter)) {
        nofilter_champion.push(champion);
      }
    });
  }

  return (
    <div className='champion__grid'>
        {data.map((champion : any, key : number) => {        
          return (
              <AllChampionsItem key={key} champion_image={champion.ChampionIcon_URL} champion={champion} />
          );
        })}
          {nofilter_champion.map((champion : any, key : number) => {
            return (
              <AllChampionsItem key={key} champion_image={champion.ChampionIcon_URL} champion={champion} filter={false}/>
            );
          })}
      </div>
  )
}

export default AllChampionsGrid