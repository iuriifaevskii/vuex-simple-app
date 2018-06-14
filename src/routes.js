import ArticlePage from './components/blog/ArticlePage.vue';
import Home from './components/home/Home.vue';
import Header from './components/layout/Header';

export const routes = [
    { path: '', name: 'routerHome', components: {
        default: Home,
        'header-top': Header
    } },
    { path: '/article', name: 'allArticles', components: {
            default: ArticlePage,
            'header-top': Header
        } 
    },
    { path: '/redirect-to-articles', redirect: { name: 'allArticles' }},
    { path: '*', redirect: { name: 'routerHome' }}
];