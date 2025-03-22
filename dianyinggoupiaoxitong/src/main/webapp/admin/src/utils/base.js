const base = {
    get() {
        return {
            url : "http://localhost:8080/dianyinggoupiaoxitong/",
            name: "dianyinggoupiaoxitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/dianyinggoupiaoxitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "电影购票系统"
        } 
    }
}
export default base
