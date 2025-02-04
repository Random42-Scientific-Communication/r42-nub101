import { gql, useQuery } from "@apollo/client";

export const hero_query = gql`
  query Hero($id: ID!) {
    page(id: $id, idType: DATABASE_ID) {
      components {
        components {
          ... on ComponentsComponentsHeroBannerLayout {
            description
            __typename
          }
        }
      }
    }
  }
`;
export const queryName = "hero";

const HeroBanner = (props) => {
  const description = props.description;

  return (
    <div>
      <p>{description}</p>
    </div>
  );
};

export default HeroBanner;