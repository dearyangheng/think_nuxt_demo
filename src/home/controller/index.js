const Base = require('./base.js');

module.exports = class extends Base {
  async indexAction() {
    this.json('前台首页')
  }
};




// var db = this.mongoose('mongo/user')
// var pagesize = 2 // 分页大小
// var page = parseInt(this.get('page')) // 页码
// var user = await db.find({}).sort({'register_time': -1}).limit(pagesize).skip((page - 1) * pagesize) // 1为升序小到大  -1位降序大到小
// // limit: 查询多少个    skip：跳过多少个
// var count = await db.count({})
// var total = count % pagesize === 0 ? count/ pagesize : parseInt(count/ pagesize) + 1 //计算总页数
// this.json({
//   page: page,
//   total: total,
//   result: user
// })

// var user = new db({
//   id: think.uuid('v1'),
//   pid: 0,
//   nickname: '杨恒',
//   username: 'yangheng',
//   password: think.md5('123456')
// })
// var result = await user.save() // 存储数据
// this.json(result)