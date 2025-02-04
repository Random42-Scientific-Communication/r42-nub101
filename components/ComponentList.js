import { useQuery } from "@apollo/client";
import ComponentMapping from "../util/ComponentMapping";

const ComponentList = ({ components, pageId }) => {
  
  const componentQueries = components.map((component) => {
    const ComponentToRender = ComponentMapping[component.__typename];
    if (!ComponentToRender || !ComponentToRender.query) {
      console.warn(`Component or query not found for: ${component.__typename}`);
      return { loading: false, error: true, data: null };
    }

    const { loading, error, data } = useQuery(ComponentToRender.query, {
      variables: { id: pageId },
    });

    return { loading, error, data: data ? data : null, component: ComponentToRender.component };
  });

  return (
    <>
      {componentQueries.map((componentData, index) => {
        if (componentData.loading) return <section key={index}>Loading {components[index].__typename}...</section>;
        if (componentData.error) return <section key={index}>Error loading {components[index].__typename}</section>;
        if (!componentData.component) return null;

        // console.log(componentData.data.page.components.components[index]);

        return (
          <section key={index}>
            <componentData.component {...componentData.data.page.components.components[index]} />
          </section>
        );
      })}
    </>
  );
};

export default ComponentList;