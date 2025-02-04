import { gql, useQuery } from "@apollo/client";

export const section_banner_query = gql`
  query Infogrid($id: ID!) {
    page(id: $id, idType: DATABASE_ID) {
      components {
        components {
          ... on ComponentsComponentsSectionBannerLayout {
            description
          }
        }
      }
    }
  }
`;
export const queryName = "sectionbanner";

const SectionBanner = (props) => {
  console.log(props);
  
  return (
    <div>
      <h1>Section Banner</h1>
    </div>
  );
};

export default SectionBanner;