const obj = [
{id : 4, name :abc},
{id : 10,name :ab2},
{id : 5, name :abc3},
{id : 6, name :abc5}

]

compareObjects(object1, object2, key) {
  const obj1 = object1[key].toUpperCase()
  const obj2 = object2[key].toUpperCase()

  if (obj1 < obj2) {
    return -1
  }
  if (obj1 > obj2) {
    return 1
  }
  return 0
}

books.sort((obj1, obj2) => {
  return compareObjects(obj, obj2, 'id')
})