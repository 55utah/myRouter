#### web目前两种路由技术
<span>hash路由方案<span><br>
```
   hash方案网址会有 # ,兼容性好，用的逐渐减少；
   监听hashchange事件;
```
<span>history路由方案<span>

```
    H5特性，是主流，api比较简洁；
    监听popstate事件, 点击浏览器回退前进按钮，history.go,history.back,history.forward方法时触发这个事件;
```

```

//实现一个简单history路由:
//history.pushState() replaceState() 并不会触发popstate事件，路由不会跳转；

class Router{
    constructor(){
        this.routes = {}
    }
    init(){
        let that = this
        window.addEventListener('popstate', function(e){
            e.preventDefault()
            if(e.state && e.state.path){
                that.routes[e.state.path]()
            }
        }, false)
    }
    push(path, callback){
        history.replaceState({path: path}, null, path)
        this.routes[path] = callback
    }
    go(path){
        history.pushState({path}, null, path)
        if(this.routes[path]){
            this.routes[path]()
        }
    }
}

```
