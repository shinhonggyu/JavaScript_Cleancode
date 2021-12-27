function getUserType(type) {
  if (type === 'ADMIN') {
    return '관리자';
  } else if (type === 'INSTRUCTOR') {
    return '강사';
  } else if (type === 'STUDENT') {
    return '수강생';
  } else {
    return '해당 없음';
  }
}

// Object Lookup Table
function getUserType(type) {
  const USER_TYPE = {
    ADMIN: '관리자',
    INSTRUCTOR: '강사',
    STUDENT: '수강생',
    UNDEFINED: '해당 없음',
  };

  return USER_TYPE[type] ?? USER_TYPE.UNDEFINED;
}

function getUserType(type) {
  return (USER_TYPE =
    {
      ADMIN: '관리자',
      INSTRUCTOR: '강사',
      STUDENT: '수강생',
    }[type] ?? '해당 없음');
}
