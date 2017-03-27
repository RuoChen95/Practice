# Practice
个人对于HTML、CSS以及JavaScript的练习，源码在[这里](https://github.com/zhangmengxue/Practice)






有难的也有简单的

关于dom的笔记：
http://mubu.io/doc/5RshlL1zQ

     #learning #pass #learningAgain #learned #new
    JavaScript
        js语言特性
            操作符
                位操作符 #pass
            OOP
                类的实例化
                类的函数声明
                    原型法
                    定义法
            什么是闭包 #learningAgain 
            原型链如何成立 #learned
                精通js
                    一种用于解析对象成员值的两种途径之一 p25
                    通过Object.create实现
        数组
            方法
                添加和删除
                    push
                    unshift
                    pop
                    shift
                    splice
                        起始点，删除的数目，插入的元素
                        如果删除，则返回删除的数组
                    数组0，concat（数组a，数组b）
                迭代器函数
                    every：返回false结束
                    some：返回true结束
                    forEach：遍历
                    返回新数组
                        map
                        filter
                    reduce #pass
                搜索和排序
                    slice(start,end) #new
                    reverse
                    sort
                        自定义排序
                        字符串排序
                    indexOf：返回父元素首次出现的位置
                    lastIndexOf
                输出数组为字符串
                    toString
                    join
        栈
            十进制转二进制
            平衡圆括号
            汉诺塔
        队列
            优先队列
            循环队列
        链表
             优势
                方便插入或者移出某项
            原理
                元素由储存块以及指针组成
            单向链表类的方法
                在链表尾部添加一个新的项
                    在空的链表中添加
                    在非空的添加：循环遍历，当current.next = null 的时候，将current.next = node
                从列表中移出一项
                    移除第一个元素：head = current.next
                    移除任意元素： previous.next = current.next
                在列表的特定位置插入一个新的项
                    增加第一个元素：node.next = current  head=node
                    增加最后一个元素 #pass 
                    增加任意元素 node.next = current; previous.next =node;
                转化为字符串
                返回元素在列表中的索引： element == current.element ==> return index
                移出某一元素：返回索引+移除项
                如果链表不包含任何元素，返回true：length == 0 
                返回元素个数： length
                输出元素的值
            双向链表
                插入
                移除
            循环链表
        集合
            向集合中增加一个新的项
            从集合中移除一个值
            如果值在集合中，返回true
            移除所有向
            返回集合中元素数量
            返回一个包含集合中所有值的数组
        字典和散列表
        树
        图
        排序和搜索算法
        算法补充知识
    CSS
        预先知识
            CSS2.1
                定位原理
                    background: url(http://csssecrets.io/images/code-pirate.svg) no-repeat bottom right #58a
                    position: relative
                生成性内容
                选择符优先级、继承和层叠机制
                盒模型
                各种长度单位
                    em：父元素的字体大小，默认16px
                    %：max-width：100%的意义 #learned
                        100%：最大长度等于父元素的长度
                        width以及max-width的区别
                    vh，vw
            CSS3特性                                                                                                                                     
                生成圆角：border-radius
                加上投影：box-shadow
                生成线性渐变图案：liner-gradient
                2D变形
                过渡和动画
            SVG
                可缩放矢量图形
            JS
                创建元素
                操作属性
                加入文档
            CSS预处理器
            编码技巧
                DRY
                    减少改动时需要编辑的地方
                    第一个变量：currentColor
                    继承：inherit
                使用眼睛而非数字
                ……
        背景和边框
            半透明边框
                border: 10px solid hsla(0,0%,100%,.5); background-clip: padding-box;
            多重边框
                box-shadow: 0 0 0 10px #655, 0 0 0 15px deeppink;
                边框内圆角 #pass
            灵活的背景定位
                background-position: right 20px bottom 10px;
                background-origin:选定框模型的参照角，是content，padding还是border
                calc #pass
            背景深入
                条纹背景
                    如果某个色标的位置比整个列表中在它之前的色标位置的值都要小，则其位置会设置为他前面所有色标位置值的最大值
                    linear-gradient(45deg, #fb3 25%, #58a 0, #58a 50%, #fb3 0, #fb3 75%, #58a 0);
                复杂的背景图案
                    IMAGE以及size的简单拼接
                    径向渐变
                    棋盘：复杂拼接 #pass
                伪随机背景
                    background-size: 83px 100%, 61px 100%, 41px 100%;
                        作用：后一个表示高度，前一个是长度 #learned
            连续的图像边框
                基本的border-image
                    九宫格原理
                实现图像边框
                    background-clip: padding-box, border-box #learned
                        第一个北京表示内容，第二个背景表示边框
                CSS渐变：repeat-liner-gradient #pass
                基本的CSS动画: animation: ants 0.3s linear infinite;
        形状
            四边形
                利用伪元素以及定位属性产生一个方块，然后对伪元素设置样式（transform: skew(45deg);），并将其放置到宿主元素的下层
            菱形
                transform: rotate(45deg)
                SVG方案——clip-path
            梯形
                transform: scale(1.1, 1.3) perspective(.5em) rotateX(5deg);
                transform-origin: bottom;
            切脚效果以及三角形
                渐变
                SVG方案
                裁剪路径方案
            椭圆：border-radius: 50% / 100% 100% 0 0;
            饼图
                transform方案
                    将圆形的左右分为两种颜色，然后用伪元素覆盖后通过旋转来决定露出多大扇区
                    使用棕色伪元素，让它在0~0.5turn范围内旋转
                    使用负的动画延时来直接跳到动画中的任意时间，并且定格到那里
                SVG方案
                    stroke-dasharray
                角向渐变
        视觉效果
        字体排印
        用户体验
        结构和布局
        过渡和动画
