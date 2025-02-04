import HeroBanner, { hero_query } from '../components/organisms/hero-banner';
import InfoGrid, { info_query } from '../components/organisms/info-grid';

const ComponentMapping = {
  ComponentsComponentsHeroBannerLayout: { 
    component: HeroBanner, 
    query: hero_query, 
  },
  ComponentsComponentsInfoGridLayout: {
    component: InfoGrid,
    query: info_query,
  }
};

export default ComponentMapping;