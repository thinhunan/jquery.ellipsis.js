jquery.ellipsis
===============

自动计算内容宽度（不是字数）截断，并加上省略号，内容不受中英文或符号限制。
如果根据字数来计算的话，因为不同字符的宽度并不相同，比如l和W，特别是中英文，最终内容宽度会有很大的差异。

jquery.ellipsis.js 
依赖jquery,使用方式
<pre>
$(dom).ellipsis({maxWidth:120,maxLine:2});
</pre>
maxWidth，最大宽度
maxLine,最大亮度，标题啊什么的显示通常需要支持多行内容显示。默认为1

jquery.ellipsis.unobtrusive.js
依赖jquery.ellipsis.js，非必须项，这个是用来支持用data-标签来控制行为
使用方式：
<pre>
&lt;p data-ellipsis="true" data-ellipsis-max-width="200" data-ellipsis-max-line="2"&gt;
   ...
&lt;/p&gt;
</pre>
引入这个js即可自动根据元素上的data属性来处理，不需要写额外的脚本

