import { gql, useQuery } from "@apollo/client";

export const responsive_tabs_query = gql`
  query Infogrid($id: ID!) {
    page(id: $id, idType: DATABASE_ID) {
      components {
        components {
          ... on ComponentsComponentsResponsiveTabsLayout {
            heading
            tabs {
              tabContent
              tabName
              button {
                title
                url
              }
            }
          }
        }
      }
    }
  }
`;
export const queryName = "responsive-tabs";

const ResponsiveTabs = (props) => {
  const tabItems = props.tabs;  

  return (
    <div>
      <pre className="underline">Responsive Tabs</pre>
      {tabItems.map((tab, i) => {
        const tabContent = tab.tabContent;
        return (
          <div key={i} dangerouslySetInnerHTML={{__html: tabContent}}></div>
        );
      })}
    </div>
  );
};

export default ResponsiveTabs;