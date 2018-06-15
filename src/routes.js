import {
    Blog,
    CreatePost,
    Home,
    SingleArticle
} from './components/pages';
import Header from './components/layout';

export const routes = [
    { path: '', name: 'routerHome', components: {
        default: Home,
        'header-top': Header
    } },
    { path: '/article', name: 'allArticles', components: {
        default: Blog,
        'header-top': Header
    } },
    { path: '/article/:id', name: 'singleArticle', components: {
        default: SingleArticle,
        'header-top': Header
    } },
    { path: '/posts', name: 'addArticles', components: {
        default: CreatePost,
        'header-top': Header
    } },
    { path: '/redirect-to-articles', redirect: { name: 'allArticles' }},
    { path: '*', redirect: { name: 'routerHome' }}
];