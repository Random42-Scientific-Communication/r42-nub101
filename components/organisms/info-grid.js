import { gql, useQuery } from "@apollo/client";
import InfoItem from "../molecules/info-item";

export const info_query = gql`
  query Hero($id: ID!) {
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

export const queryName = "infogrid";

const InfoGrid = (props) => {
  const title = props.infoTitle;
  const infoItems = props.infoItem;
  
  return (
    <div>
      <h1>{title}</h1>
      {infoItems.map((infoItem, i) => (
        <InfoItem title={infoItem.title} description={infoItem.description} />
      ))}
    </div>
  );
};

export default InfoGrid;