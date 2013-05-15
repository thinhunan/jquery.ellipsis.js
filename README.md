jquery.ellipsis
===============

自动计算内容宽度截断，并加上省略号，内容不受中英文或符号限制

jquery.ellipsis.js 
依赖jquery,使用方式
$(dom).ellipsis({maxWidth:120,maxLine:2});
maxWidth，最大宽度
maxLine,最大亮度，标题啊什么的显示通常需要支持多行内容显示。默认为1

jquery.ellipsis.unobtrusive.js
依赖jquery.ellipsis.js，非必须项，这个是用来支持用data-标签来控制行为
使用方式：
<p data-ellipsis="true" data-ellipsis-max-width="200" data-ellipsis-max-line="2">
   ...
</p>
引入这个js即可自动根据元素上的data属性来处理，不需要写额外的脚本

