// @flow
class MainScope {
    data : Object;
    vue  : Object;
    constructor() {
        this.data = {
            msg: 'Hello Vue'
        };
        this.vue = {
            meta: {
                title: 'Progressbar Chat',
            }
        }
    }
}

export default (router: Object) => {
    router.get('/', (req, res, next) => {
        let scope = new MainScope();
        console.log(scope);
        res.render('main/main', scope);
    })
};
