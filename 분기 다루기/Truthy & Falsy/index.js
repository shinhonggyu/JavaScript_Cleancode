if ('string'.length > 0) {
}

if (!isNaN(10)) {
}

if (boolean === true) {
}

// case2
function printName(name) {
  if (name === undefined || name === null) {
    return '사람이 없네요';
  }

  return `안녕하세요 ${name}님`;
}

function printName(name) {
  if (!name) {
    return '사람이 없네요';
  }

  return `안녕하세요 ${name}님`;
}
