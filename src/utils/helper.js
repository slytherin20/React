export function filterData(list, input) {
  if (input === "") return list;
  else {
    let result = list.filter((restaurant) =>
      restaurant.data.name.toLowerCase().includes(input.toLowerCase())
    );
    return result;
  }
}
