function camelToSnake(camelCase) {
  return camelCase.replace(/.[A-Z]/g, (orgString) => {
    return orgString[0] + "_" + orgString[1];
  });
}

console.log(camelToSnake("kmsBakaMuyaho"));

function snakeToCamel(snakeCase) {
  return snakeCase.replace(/[a-z]_[a-z]/g, (orgString) => {
    return orgString[0] + orgString[2].toUpperCase();
  });
}

console.log(
  snakeToCamel(
    "buffer_baka_desu_ne\nkimi_kiss_die hello muyaho to_string user_id"
  )
);
