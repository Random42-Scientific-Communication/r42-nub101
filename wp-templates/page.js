import { gql, useQuery } from "@apollo/client";
import EntryHeader from "../components/entry-header";
import Footer from "../components/organisms/footer";
import Header from "../components/organisms/header";
import ComponentList from "../components/ComponentList";

export default function Component(props) {
  // Loading state for previews
  if (props.loading) {
    return <>Loading...</>;
  }

  const { title, content } = props.data.page;

  const { loading: componentsLoading, error: componentsError, data: componentsData } = useQuery(GET_COMPONENTS, {
    variables: { databaseId: props.__SEED_NODE__.databaseId },
  });

  if (componentsLoading) return "Loading components...";
  if (componentsError) return "Error loading components";

  const componentList = componentsData?.page?.components?.components || [];

  return (
    <>
      <Header
        generalSettings={props.data.generalSettings}
        pageTitle={title}
        menuItems={props.data.primaryMenuItems.nodes}
      />

      <main className="container">
        <ComponentList components={componentList} pageId={props.__SEED_NODE__.databaseId} />
      </main>

      <Footer />
    </>
  );
}

Component.variables = ({ databaseId }, ctx) => {
  return {
    databaseId,
    asPreview: ctx?.asPreview,
  };
};

Component.query = gql`
  ${Header.fragments.entry}
  query GetPage($databaseId: ID!, $asPreview: Boolean = false) {
    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
    }
    ...HeaderFragment
  }
`;

const GET_COMPONENTS = gql`
  query GetComponents($databaseId: ID!) {
    page(id: $databaseId, idType: DATABASE_ID){
      title
      components {
        components {
          fieldGroupName
        }
      }
    }
  }
`;
