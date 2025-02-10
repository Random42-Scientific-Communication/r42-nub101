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
  const description = props.description;
  
  return (
    <div>
      <pre className="underline">Section Banner</pre>
      <p>{description}</p>
    </div>
  );
};

export default SectionBanner;