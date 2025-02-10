import { gql, useQuery } from "@apollo/client";
import Image from "next/image";

export const full_width_image_query = gql`
  query Infogrid($id: ID!) {
    page(id: $id, idType: DATABASE_ID) {
      components {
        components {
          ... on ComponentsComponentsFullWidthImageLayout {
            fullWidthImage {
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
export const queryName = "responsive-tabs";

const FullWidthImage = (props) => {
  const image = props.fullWidthImage.node.sourceUrl;

  return (
    <div>
      <div className="w-24 h-24 ">
        <Image src={image} alt="Hero Image" width={500} height={500} className="relative"/>
      </div>
    </div>
  );
};

export default FullWidthImage;