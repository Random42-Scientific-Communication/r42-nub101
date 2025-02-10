import { gql, useQuery } from "@apollo/client";
import GetParentSection from "../../util/GetParentSection";

import Link from "next/link";

export const BannerHeader = ({ menuItems }) => {
  const section = GetParentSection();
  const {loading, error, data} = useQuery(GET_SITE_SETTINGS);

  if (loading) return "Loading...";
  if (error) return "error";

  const tagline = data.siteSettings.global.headerTagline.tagline;
  const contactNumber = data.siteSettings.global.headerTagline.contactNumber;
  const openHours = data.siteSettings.global.headerTagline.openHours;

  return (
    <div className="@container/supporting-info px-10 bg-tertiary text-tertiary-foreground w-full font-bold relative flex flex-row items-center gap-2 backdrop-blur-sm h-header_prelim">
      <div className="flex items-center justify-between w-full h-full">
        <div className="w-full flex justify-center xl:justify-normal flex-row gap-2">
          <span className="font-extrabold text-lime whitespace-nowrap min-w-fit text-[0.7rem] @md/supporting-info:text-[0.7rem]">{tagline}</span>
          <Link
            passHref
            href={`tel:+${contactNumber.replace(/\D/g, '')}`}
            className="transition-colors whitespace-nowrap min-w-fit px-2"
            aria-label={`Call our support line at ${contactNumber}`}
          >
            <p className="text-snow text-[0.7rem] @md/supporting-info:text-[0.7rem] font-normal">
              Call {contactNumber}
            </p>
            
          </Link>
          <p className="mr-2 -mt-[1px] font-normal text-lime">|</p>
          <p className="text-[0.7rem] font-medium">{openHours}</p>
        </div>
        <div className="block items-center gap-4 @5xl/top-header:ml-auto text-sm">
          <nav className="flex flex-row-reverse items-center gap-2">
            {menuItems.map((item, i) => (
              <NavLink
                key={i}
                href={item.uri}
                fullText={item.label}
                active={item.uri.split("/")[1].toLowerCase() === section.toLowerCase()}
              />
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

const NavLink = ({ href, fullText, active }) => (
  <Link href={href} className={`text-snow text-[0.7rem] font-normal whitespace-nowrap px-2 ${active ? 'underline font-semibold' : ''}`} passHref>
    <span className="block">{fullText} Site</span>
    {/* <span className="block @lg/top-header:hidden">{shortText}</span> */}
  </Link>
);

const GET_SITE_SETTINGS = gql`
  query global { 
    siteSettings {
      global {
        headerTagline {
          contactNumber
          fieldGroupName
          openHours
          tagline
        }
      }
    }
  }
`;