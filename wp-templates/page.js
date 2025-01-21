import { gql, useQuery } from "@apollo/client";
import Head from "next/head";
import EntryHeader from "../components/entry-header";
import Footer from "../components/footer";
import Header from "../components/header";
import GetParentSection from "../util/GetParentSection";

export default function Component(props) {
  // Loading state for previews
  if (props.loading) {
    return <>Loading...</>;
  }

  const { title: siteTitle, description: siteDescription } =
    props.data.generalSettings;
  const menuItems = props.data.primaryMenuItems.nodes;
  const { title, content } = props.data.page;

  const section = GetParentSection();

  const {loading, error, data} = useQuery(GET_COMPONENTS, {
    variables: { databaseId: props.__SEED_NODE__.databaseId }
  });
  
  if (loading) return "Loading...";
  if (error) return "error";
  
  const componentList = data.page.components.components;
  console.log(componentList);

  return (
    <>
      <Head>
        <title>{`${title} - ${siteTitle}`}</title>
      </Head>

      <Header
        siteTitle={siteTitle}
        siteDescription={siteDescription}
        menuItems={menuItems}
        secondaryMenu={section}
      />

      <main className="container">
        <EntryHeader title={title} />
        <div dangerouslySetInnerHTML={{ __html: content }} />
        
        {componentList && componentList.map((component, id) => (
          <section key={id}>
            <h1>{component.fieldGroupName}</h1>
          </section>
        ))}
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
