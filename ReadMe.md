<!-- vue内信息 -->
el : '#app',
<!-- el : element 用于存放容器 -->
data ：
<!-- data : 数据 -->
msg : 
<!-- 存放信息 -->
methods :
<!-- 存放函数/方法 -->



<!-- 指令类 -->

'v-cloak指令',
<!-- 
1、文本数据加载指令 ，方式如下 ： css:[v-cloak]{display:none}
                              html: <p>{{msg}}</p>    / <p>1111{{msg}}1111</p>
2、传递文本数据，不影响html原本的数据
3、不使用css样式，会在慢速加载中显示出{{msg}}。（ps:我一直没有试出来）
 -->

'v-text指令'
<!-- 
1、文本数据加载指令 ， 方式如下 ： <p v-text = msg1>v-text</p>
2、传递文本数据，会覆盖html原本的数据
3、无论网速如何，不会出现{{msg}}
 -->

'v-html指令'
<!-- 
1、文本数据加载指令 ， 方式如下 ： <div v-html = msg2>v-html</div>
2、传递HTML文本数据，会覆盖html原本的数据
3、无论网速如何，不会出现{{msg}}
-->

'v-bind指令'
<!-- 
1、数据绑定指令 ， 方式如下 ： <button v-bind:title=msg3>提交</button>
                             <button :title=msg3>提交</button>
2、传递HTML文本数据 ，会覆盖html原本的数据
3、无论网速如何 ，不会出现{{msg}}
-->

'v-on指令'
<!-- 
1、事件绑定指令 ， 方式如下 ：<button v-bind:title=msg3     v-on:click = show()>提交</button>
                            <button v-bind:title=msg3    v-on:mouseover = show()>提交</button>
-->
