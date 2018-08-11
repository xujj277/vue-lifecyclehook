# lifecyclehook


### 业务逻辑的处理时机
- created：异步数据适合在created阶段中调用，初始化
- mounted：挂载元素内dom节点的获取。初始数据的dom渲染完毕，可以获取到dom
- nextTick：更新数据后立即操作dom。（某个数据某一个变化就用nextTick）如果想区别不同的数据更新，同时对dom操作，使用nextTick函数处理
- updated：任何数据的更新，如果要做统一的业务逻辑处理。数据更新完毕时 如果对数据更新做统一处理就在updated钩子中处理
- watch：监听具体数据变化，并做相应的处理。对具体某个数据变化作统一处理

