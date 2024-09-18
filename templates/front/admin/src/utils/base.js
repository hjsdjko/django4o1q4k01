const base = {
    get() {
        return {
            url : "http://localhost:8080/django4o1q4k01/",
            name: "django4o1q4k01",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于django的民族服饰数据分析系统的设计与实现"
        } 
    }
}
export default base
