import FullWidthImage, { full_width_image_query } from '../components/molecules/full-width-image';
import HeroBanner, { hero_query } from '../components/organisms/hero-banner';
import InfoBanner, { info_banner_query } from '../components/organisms/info-banner';
import InfoGrid, { info_query } from '../components/organisms/info-grid';
import ResponsiveTabs, { responsive_tabs_query } from '../components/organisms/responsive-tabs';
import ScrollList, { scroll_list_query } from '../components/organisms/scroll-list';
import SectionBanner, { section_banner_query } from '../components/organisms/section-banner';

const ComponentMapping = {
  ComponentsComponentsHeroBannerLayout: { 
    component: HeroBanner, 
    query: hero_query, 
  },
  ComponentsComponentsInfoGridLayout: {
    component: InfoGrid,
    query: info_query,
  },
  ComponentsComponentsScrollListLayout: {
    component: ScrollList,
    query: scroll_list_query,
  },
  ComponentsComponentsSectionBannerLayout: {
    component: SectionBanner,
    query: section_banner_query,
  },
  ComponentsComponentsResponsiveTabsLayout: {
    component: ResponsiveTabs,
    query: responsive_tabs_query,
  },
  ComponentsComponentsFullWidthImageLayout: {
    component: FullWidthImage,
    query: full_width_image_query,
  },
  ComponentsComponentsInfoBannerLayout: {
    component: InfoBanner,
    query: info_banner_query
  }
};

export default ComponentMapping;