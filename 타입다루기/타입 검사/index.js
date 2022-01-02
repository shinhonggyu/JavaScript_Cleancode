const { isPrimitive } = require('util')

// 문자열로 반환
typeof '문자열'     'string'
typeof  true       'boolean'
typeof  undefined  'undefined'
typeof  123        'number'
typeof  Symbol()   'symbol'

// PRIMITIVE vs REFERENCE
function myFunction() {}

typeof myFunction  'function'

const str = new String()
typeof str  'object'

typeof null  'object'

// 동적으로 변하는 언어 => 타입 동적

const arr = []
const func = function() {}
const date = new Date()
// true
arr instanceof Array
func instanceof Function
date instanceof Date

/* 정리
JS 동적인 타입 -> 타입검사 어려움 -> 잘 찾아서..!(스택오버플로우) -> 외우지말기 ㅠ
isPrimitive(원시) vs Reference(참조) 
typeof vs instaceof
*/