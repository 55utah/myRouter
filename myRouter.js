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