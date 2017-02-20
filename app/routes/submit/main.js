// import VueChatScroll from 'vue-chat-scroll';
// Vue.use(VueChatScroll);

// @flow
class MainScope {
    data : Object;
    vue  : Object;
    constructor() {
        this.data = {
            msg: 'Hello Vue',
            n: 'xxx'
        };
        this.vue = {
            meta: {
                title: 'Progressbar Chat',
            }
        }
    }
}

export default (router: Object) => {
    router.get('/chat', (req, res, next) => {
        // console.log(req.body);
        let scope = new MainScope();
        console.log(scope);
        res.render('main/main', scope);
    })
};
