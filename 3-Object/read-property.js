const post = {
  title: '基本数据处理 · 对象字面量',
  serialNo: 2,
  parentBook: {
    title: '基于 JavaScript 开发灵活的数据应用',
    author: {
      name: '小问',
      title: '多领域开发者',
      domains: [ 'Web 开发', '大数据', '机器学习' ]
    }
  },
  
  content: '......'
}

console.log(post.title) //=> 基本数据处理 · 对象字面量
console.log(post.parentBook.author.name) //=> 小问

// ----------------------------------------------------

const obj = {
  1: 2,
  'a b c': 'd e f',
  [Symbol.for('foo')]: 'bar'
}

console.log(obj[1]) //=> 2
console.log(obj['a b c']) //=> d e f
console.log(obj[Symbol.for('foo')]) //=> bar