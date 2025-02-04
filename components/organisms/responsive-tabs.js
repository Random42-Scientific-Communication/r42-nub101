import { gql, useQuery } from "@apollo/client";

export const responsive_tabs_query = gql`
  query Infogrid($id: ID!) {
    page(id: $id, idType: DATABASE_ID) {
      components {
        components {
          ... on ComponentsComponentsResponsiveTabsLayout {
            heading
          }
        }
      }
    }
  }
`;
export const queryName = "responsive-tabs";

const ResponsiveTabs = (props) => {
  console.log(props);
  
  return (
    <div>
      <h1>Responsive Tabs</h1>
    </div>
  );
};

export default ResponsiveTabs;