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
单元测试是前端的一大部分，主要的工具有：mocha + chai  
- mocha ： 是一套前端测试工具，可以和其他工具混合使用,比如下面的chai.js   
- chai ：是断言库，提供assert、方法。  
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