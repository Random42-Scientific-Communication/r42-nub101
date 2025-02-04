import HeroBanner, { hero_query } from '../components/organisms/hero-banner';
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
  }
};

export default ComponentMapping;