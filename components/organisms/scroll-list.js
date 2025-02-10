import { gql, useQuery } from "@apollo/client";

export const scroll_list_query = gql`
  query ScrollList($id: ID!) {
    page(id: $id, idType: DATABASE_ID) {
      components {
        components {
          ... on ComponentsComponentsScrollListLayout {
            fieldGroupName
            heading
            steps {
              stepText
              stepHeading
              stepLinks {
                stepLink
                stepLinkText
              }
            }
          }
        }
      }
    }
  }
`;
export const queryName = "scroll-list";

const ScrollList = (props) => {
  const heading = props.heading;
  const steps = props.steps;

  return (
    <div>
      <pre className="underline">ScrollList</pre>
      <h1>Getting started is easy.</h1>
      <h2>{heading}</h2>
      {steps.map((step, i) => (
        <div key={i}>
          <h3>{step.stepHeading}</h3>
          <p>{step.stepText}</p>
        </div>
      ))}
    </div>
  );
};

export default ScrollList;