import { gql, useQuery } from "@apollo/client";
import Image from "next/image";

export const info_banner_query = gql`
  query Hero($id: ID!) {
    page(id: $id, idType: DATABASE_ID) {
      components {
        components {
          ... on ComponentsComponentsInfoBannerLayout {
            heading
            description
            mainImage {
              node {
                sourceUrl
              }
            }
            ctaImage {
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

const InfoBanner = (props) => {
  const heading = props.heading;
  const description = props.description;
  const mainImage = props.mainImage.node.sourceUrl;
  const ctaImage = props.ctaImage.node.sourceUrl;

  return (
    <div>
      <pre className="underline">InfoBanner</pre>
      <h2>{heading}</h2>
      <p>{description}</p>
      <div className="w-24 h-24 ">
        <Image src={mainImage} alt="Main Image" width={500} height={500} className="relative"/>
      </div>
      <div className="w-24 h-24 ">
        <Image src={ctaImage} alt="Main Image" width={500} height={500} className="relative"/>
      </div>
    </div>
  );
};

export default InfoBanner;