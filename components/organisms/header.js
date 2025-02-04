import { gql, useQuery } from "@apollo/client";
import Head from "next/head";
import Link from "next/link";
import style from "./header.module.css";
import GetParentSection from "../../util/GetParentSection";

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
    
      <header className={style.header}>
        <div className="container">
          <Link href="/" className={style.brand}>
            <h2 className={style.siteTitle}>{siteTitle}</h2>
            <p className={style.siteDescription}>{siteDescription}</p>
          </Link>

          <nav className={style.nav}>
            <ul>
              {menuItems.map((item) => (
                <li key={item.id}>
                  <Link href={item.uri}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div>
          <ul className="flex mx-auto gap-8">
            {subMenuItems.map((item) => (
              <li key={item.id}>
                <Link href={item.uri}>{item.label}</Link>
              </li>
            ))}
          </ul>
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