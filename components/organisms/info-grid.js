import { gql, useQuery } from "@apollo/client";
import InfoItem from "../molecules/info-item";

export const info_query = gql`
  query Infogrid($id: ID!) {
    page(id: $id, idType: DATABASE_ID) {
      components {
        components {
          ... on ComponentsComponentsInfoGridLayout {
            fieldGroupName
            infoTitle
            infoItem {
              title
              description
            }
          }
        }
      }
    }
  }
`;
export const queryName = "info-grid";

const InfoGrid = (props) => {
  const title = props.infoTitle;
  const infoItems = props.infoItem;
  
  return (
    <div>
      <pre className="underline">InfoGrid</pre>
      <h1>{title}</h1>
      {infoItems.map((infoItem, i) => (
        <InfoItem key={i} title={infoItem.title} description={infoItem.description} />
      ))}
    </div>
  );
};

export default InfoGrid;