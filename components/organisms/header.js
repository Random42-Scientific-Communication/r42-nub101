import { gql, useQuery } from "@apollo/client";
import Head from "next/head";
import Link from "next/link";
import GetParentSection from "../../util/GetParentSection";
import { BannerHeader } from "../molecules/banner-header";
import { MainHeader } from "../molecules/main-header";

export default function Header({ generalSettings, pageTitle, menuItems }) {
  const section = GetParentSection();
  const { title: siteTitle, description: siteDescription } = generalSettings;
  
  const {loading, error, data} = useQuery(GET_SUB_MENU, {
    variables: { location: section },
  });

  if (loading) return "Loading...";
  if (error) return "error";

  const subMenuItems = data.menus.edges[0].node.menuItems.nodes;

  return (
    <>
      <Head>
        <title>{`${pageTitle} - ${siteTitle}`}</title>
      </Head>
    
      <header className="@container/header sticky top-0 w-full h-full">
        <div className="z-10 flex w-full h-full border-b lg:flex-col backdrop-blur-sm">
          <BannerHeader menuItems={menuItems} />
          <MainHeader menuItems={subMenuItems} />
        </div>
      </header>
    </>
  );
}

Header.fragments = {
  entry: gql`
    fragment HeaderFragment on RootQuery {
      generalSettings {
        title
        description
      }
      primaryMenuItems: menuItems(where: { location: PRIMARY }) {
        nodes {
          id  
          uri
          path
          label
          parentId
          cssClasses
          menu {
            node {
              name
            }
          }
        }
      }
    }
  `,
};

const GET_SUB_MENU = gql`
  query GetSubMenu($location: MenuLocationEnum) {
    menus(where: { location: $location }) {
      edges {
        node {
          name
          menuItems {
            nodes {
              label
              uri
              id
            }
          }
        }
      }
    }
  }
`;

