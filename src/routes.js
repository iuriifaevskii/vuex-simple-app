import {
    Blog,
    CreatePost,
    Home,
    EditArticleForm,
    SingleArticlePage
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
        default: SingleArticlePage,
        'header-top': Header
    }, children: [
        { path: '/article/:id/edit', name: 'editArticle', component: EditArticleForm }
    ] },
    { path: '/posts', name: 'addArticles', components: {
        default: CreatePost,
        'header-top': Header
    } },
    { path: '/redirect-to-articles', redirect: { name: 'allArticles' }},
    { path: '*', redirect: { name: 'routerHome' }}
];