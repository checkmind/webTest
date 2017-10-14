# webTest
前端的测试也是前端工程化的一部分，所以花几天时间研究一下前端测试。
## 测试  
首先是几个概念：测试金字塔、单元测试、功能测试、端对端测试。  
- 测试金字塔：将工程分层，大的功能分成几个小的模块，从上到下排列，应保证底层的功能  
测试用例最多。  
- 单元测试：也就是api测试，对单一的函数或者模块进行测试。  
- 功能测试：对软件整体的某个功能进行测试。  
- 端对端测试：也就是前端、后端联合测试，从前端到后端一体化测试。  
### 单元测试  
单元测试是前端的一大部分，主要的工具有：karma + mocha + chai  
- karma ：是一个测试工具，也可以说是测试环境的启动器  
- mocha ： 是测试框架，可以和其他工具混合使用,比如下面的chai.js   
- chai ：是断言库，expect 风格。  
### karma的安装与使用  
安装上面说的三个工具：  
```
npm install --save-dev chai mocha
npm install --save-dev karma karma-mocha karma-chai
```
安装完成后运行 `mocha init`  
如果没有错误就进行下一步，如果出错：'karma' 不是内部或外部命令，也不是可运行的程序。（你可以在网上搜索如何新增karma cmd命令，或者全局安装karma）  
运行以上指令后，会出现一系列选择问题，这里是建立karma.config.js的过程，当然你可以手动建立。直接回车就可以了。
  

### mocha的安装与使用  
npm install --save-dev mocha  
在项目根目录新建test.js  
```javascript
//test.js
var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});
```
在package.json配置文件里添加  
```javascript
	scripts : {
		"test" : "mocha"
	}
```  
终端运行 npm test  
输出结果：should return -1 when the value is not present








TIPS:  
本文参考链接：http://mochajs.org/