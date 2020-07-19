import Vue from 'vue';
import Router from 'vue-router';
import CommandPanel from '@/components/CommandPanel/Index';
import DShipPanel from '@/components/DShipPanel/Index';
import EnvironmentalDataPanel from '@/components/EnvironmentalDataPanel/Index';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'home', component: EnvironmentalDataPanel },
    { path: '/command-panel/:oos_name', name: 'CommandPanel', component: CommandPanel,props: true},
    { path: '/dship-panel', name: 'DShipPanel', component: DShipPanel},
    { path: '/environmental-data-panel', name: 'EnvironmentalDataPanel', component: EnvironmentalDataPanel},
    // { path: '/editor/:id', name: 'edit-article', component: Editor },
    // { path: '/article/:id', name: 'article', component: Article },
    // { path: '/profile/:username', name: 'user', component: Profile },
    // { path: '/article/:username/favorites', name: 'favorites', component: Favorites },
    { path: '*', redirect: { name: 'home' } },
  ],
});