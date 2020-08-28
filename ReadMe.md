<!-- vue内信息 -->
el : '#app',
<!-- el : element 用于存放容器 -->
data ：
<!-- data : 数据 -->
msg : 
<!-- 存放信息 -->
methods :
<!-- 存放函数/方法 -->



<!-- ------------------------- 指令类--------------------------- -->

'{{}}'
<!-- 
1、插值表达式 ， 方式如下 ： <p>{{msg}}</p> 
2、会在慢速加载中显示出{{msg}}
-->

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
1、数据绑定指令 ， 方式如下 ： <button v-bind:title=msg3>提交</button>   v-bind: 缩写 ：
                             <button :title=msg3>提交</button>
2、传递HTML文本数据 ，会覆盖html原本的数据
3、无论网速如何 ，不会出现{{msg}}
-->

'v-on指令'
<!-- 
1、事件绑定指令 ， 方式如下 ：<button v-bind:title=msg3     v-on:click = show()>提交</button>     v-on: 缩写 @
                            <button v-bind:title=msg3    v-on:mouseover = show()>提交</button>
-->

'v-model指令'
<!--  
1、双向数据绑定指令 ， 方式如下 ： <input type="text" v-model:value="msg">
2、v-model 只能用于表单元素
-->

'v-for指令'
<!-- 
1、循环遍历指令
2、注意：
  1.v-for循环的时候，key属性只能使用number获取string
  2.在组件中，使用v-for循环的时候，或者在一些特殊情况中，如果v-for有问题，必须在使用v-for的同时，指定唯一的字符串/数字类型 :key 值
-->

'v-if指令'
<!--  

-->

'v-show指令'
<!--  

-->

<!-- ------------------------- this--------------------------- -->
<!-- 
在vue实例中获取 data 或者 methods 的数据、方法，必须用过 this 的调用。
-->



<!-- ----------------------- 事件修饰符------------------------ -->

'.stop'
<!-- 
1、阻止冒泡事件修饰符 ， 方法如下 ： 
                      <div class="inner" @click = divClick>
                        <button @click.stop = btnClick >提交</button>
                      </div>
-->

'.prevent'
<!-- 
1、阻止默认事件修饰符 ， 方法如下 ： <a href="https://www.baidu.com" @click.prevent = aClick>go to 百度</a>
-->

'.capture'
<!-- 
1、添加事件侦听器时使用事件捕捉模式 ， 方式如下 ：     
                                <div class="inner" @click.capture = divClick>
                                  <button @click = btnClick >提交</button>
                                </div>
-->

'.self'
<!--  
1、只当事件在该元素本身触发时触发事件函数 ， 方法如下 ：
                                <div class="inner" @click.self = divClick>
                                  <button @click = btnClick >提交</button>
                                </div>
-->

'.once'
<!--
1、只触发一次事件
-->


<!-- -----------------------vue样式-------------------------- -->
'class'
<!-- 
1、方法如下 
 1.<p :class = ['red','italic']>vue方法添加class属性</p>
 2.<p :class = {red:true,italic:false}>vue方法添加class属性2</p>
 3.<p :class = style>vue方法添加class属性3</p>     /*vue里面的写法*/   data : {style : {red:false,italic:true}}
 4.<p :class = ['red',false?'italic':'weight']>vue方法添加class属性4</p>

2、注意：
  1.在属性中，不能添加空格
  2.class前面有 :
-->

'style'
<!-- 
1、方法如下
  1.<p :style = {color:'red','font-weight':200}>Vue方法添加style样式1</p>
  2.<p :style = styel>Vue方法添加style样式2</p>     /*vue里面的写法*/   data : style2 : {color:'red','font-weight':200}}

-->

<!-- ------------------------git冲突 ------------------------- -->
<!--
实例：
沙哈萨克的撒号地块撒谎
-->
