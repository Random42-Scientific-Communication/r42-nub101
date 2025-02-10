import { gql, useQuery } from "@apollo/client";
import Image from "next/image";

export const hero_query = gql`
  query Hero($id: ID!) {
    page(id: $id, idType: DATABASE_ID) {
      components {
        components {
          ... on ComponentsComponentsHeroBannerLayout {
            description
            __typename
            heroImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
`;
export const queryName = "hero";

const HeroBanner = (props) => {
  const description = props.description;
  const heroImage = props.heroImage.node.sourceUrl;
  console.log(heroImage);

  return (
    <div>
      <pre className="underline">HeroBanner</pre>
      <p>{description}</p>
      <div className="w-24 h-24 ">
        <Image src={heroImage} alt="Hero Image" width={500} height={500} className="relative"/>
      </div>
    </div>
  );
};

export default HeroBanner;