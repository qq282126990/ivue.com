import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('./views/Home.vue')
const Docs = () => import('./views/Docs.vue')
const Install = () => import('./views/Install.vue')
const StartUse = () => import('./views/StartUse.vue')
const Color = () => import('./views/Color.vue')
const Elevation = () => import('./views/Elevation.vue')
const Layout = () => import('./views/Layout.vue')
const Content = () => import('./views/Content.vue')
const Button = () => import('./views/Button.vue')
const Icon = () => import('./views/Icon.vue')
const List = () => import('./views/List.vue')
const Carousel = () => import('./views/Carousel.vue')
const Switch = () => import('./views/Switch.vue')
const BottomNav = () => import('./views/BottomNav.vue')
const Breadcrumbs = () => import('./views/Breadcrumbs.vue')
const Select = () => import('./views/Select.vue')
const AutoComplete = () => import('./views/AutoComplete.vue')
const Input = () => import('./views/Input.vue')
const Stepper = () => import('./views/Stepper.vue')
const Upload = () => import('./views/Upload.vue')
const Progress = () => import('./views/Progress.vue')
const Notice = () => import('./views/Notice.vue')
const Message = () => import('./views/Message.vue')
const Tabs = () => import('./views/Tabs.vue')
const LoadingBar = () => import('./views/LoadingBar.vue')
const Badge = () => import('./views/Badge.vue')
const DatePicker = () => import('./views/DatePicker.vue')
const Affix = () => import('./views/Affix.vue')
const VirtualCollection = () => import('./views/VirtualCollection.vue')
const Collapse = () => import('./views/Collapse.vue')
const Cascader = () => import('./views/Cascader.vue')
const Ripple = () => import('./views/Ripple.vue')
const Touch = () => import('./views/Touch.vue')
const Tooltip = () => import('./views/Tooltip.vue')
const Chip = () => import('./views/Chip.vue')
const Radio = () => import('./views/Radio.vue')
const CheckBox = () => import('./views/CheckBox.vue')
const Avatar = () => import('./views/Avatar.vue')
const Page = () => import('./views/Page.vue')
const Spin = () => import('./views/Spin.vue')
const Table = () => import('./views/Table.vue')


Vue.use(Router);


export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        // 路径错误时跳转
        {
            path: '/',
            name: 'error',
            alias: '*',
            component: Home
        },
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/docs/',
            name: 'docs',
            component: Docs,
            children: [
                // 安装
                {
                    path: '/docs/install',
                    name: 'install',
                    component: Install
                },
                // 开始使用
                {
                    path: '/docs/start-use',
                    name: 'start-use',
                    component: StartUse
                },
                // 颜色
                {
                    path: '/docs/color',
                    name: 'color',
                    component: Color
                },
                // elevation
                {
                    path: '/components/elevation',
                    name: 'elevation',
                    component: Elevation
                },
                // Layout
                {
                    path: '/components/layout',
                    name: 'layout',
                    component: Layout
                },
                // content
                {
                    path: '/components/content',
                    name: 'content',
                    component: Content
                },
                // button
                {
                    path: '/components/button',
                    name: 'button',
                    component: Button
                },
                // icon
                {
                    path: '/components/icon',
                    name: 'icon',
                    component: Icon
                },
                // list
                {
                    path: '/components/list',
                    name: 'list',
                    component: List
                },
                // carousel
                {
                    path: '/components/carousel',
                    name: 'carousel',
                    component: Carousel
                },
                // Switch
                {
                    path: '/components/switch',
                    name: 'switch',
                    component: Switch
                },
                // BottomNav
                {
                    path: '/components/bottom-nav',
                    name: 'bottom-nav',
                    component: BottomNav
                },
                // Breadcrumbs
                {
                    path: '/components/breadcrumbs',
                    name: 'breadcrumbs',
                    component: Breadcrumbs
                },
                // Select
                {
                    path: '/components/select',
                    name: 'select',
                    component: Select
                },
                // AutoComplete
                {
                    path: '/components/auto-complete',
                    name: 'auto-complete',
                    component: AutoComplete
                },
                // Input
                {
                    path: '/components/input',
                    name: 'input',
                    component: Input
                },
                // Stepper
                {
                    path: '/components/stepper',
                    name: 'stepper',
                    component: Stepper
                },
                // Upload
                {
                    path: '/components/upload',
                    name: 'upload',
                    component: Upload
                },
                // Progress
                {
                    path: '/components/progress',
                    name: 'progress',
                    component: Progress
                },
                // Notice
                {
                    path: '/components/notice',
                    name: 'notice',
                    component: Notice
                },
                // Message
                {
                    path: '/components/message',
                    name: 'message',
                    component: Message
                },
                // Tabs
                {
                    path: '/components/tabs',
                    name: 'tabs',
                    component: Tabs
                },
                // LoadingBar
                {
                    path: '/components/loading-bar',
                    name: 'loading-bar',
                    component: LoadingBar
                },
                // Badge
                {
                    path: '/components/badge',
                    name: 'badge',
                    component: Badge
                },
                // DatePicker
                {
                    path: '/components/date-picker',
                    name: 'date-picker',
                    component: DatePicker
                },
                // Affix
                {
                    path: '/components/affix',
                    name: 'affix',
                    component: Affix
                },
                // VirtualCollection
                {
                    path: '/components/virtual-collection',
                    name: 'virtual-collection',
                    component: VirtualCollection
                },
                // Collapse
                {
                    path: '/components/collapse',
                    name: 'collapse',
                    component: Collapse
                },
                // cascader
                {
                    path: '/components/cascader',
                    name: 'cascader',
                    component: Cascader
                },
                // Tooltip
                {
                    path: '/components/tooltip',
                    name: 'tooltip',
                    component: Tooltip

                },
                // Chip
                {
                    path: '/components/chip',
                    name: 'chip',
                    component: Chip

                },
                // Radio
                {
                    path: '/components/radio',
                    name: 'radio',
                    component: Radio
                },
                // CheckBox
                {
                    path: '/components/checkbox',
                    name: 'checkbox',
                    component: CheckBox
                },
                // Avatar
                {
                    path: '/components/avatar',
                    name: 'avatar',
                    component: Avatar
                },
                // Page
                {
                    path: '/components/page',
                    name: 'page',
                    component: Page
                },
                // Spin
                {
                    path: '/components/spin',
                    name: 'spin',
                    component: Spin
                },
                // Table
                {
                    path: '/components/table',
                    name: 'table',
                    component: Table
                },
                // directives ripple
                {
                    path: '/directives/ripple',
                    name: 'directives-ripple',
                    component: Ripple
                },
                // directives touch
                {
                    path: '/directives/touch',
                    name: 'directives-touch',
                    component: Touch
                }
            ]
        }
    ]
})
