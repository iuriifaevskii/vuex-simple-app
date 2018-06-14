import ArticlePage from './components/blog/ArticlePage';
import CreatePostPage from './components/createPost/CreatePostPage';
import Home from './components/home/Home';
import Header from './components/layout/Header';

export const routes = [
    { path: '', name: 'routerHome', components: {
        default: Home,
        'header-top': Header
    } },
    { path: '/article', name: 'allArticles', components: {
        default: ArticlePage,
        'header-top': Header
    } },
    { path: '/posts', name: 'addArticles', components: {
        default: CreatePostPage,
        'header-top': Header
    } },
    { path: '/redirect-to-articles', redirect: { name: 'allArticles' }},
    { path: '*', redirect: { name: 'routerHome' }}
];