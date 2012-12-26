var JsonToChartsDataConverter = function (json_from_server){
  this.original_json = json_from_server;
};

JsonToChartsDataConverter.prototype.headers = function(){
  if (this.headers === undefined){
  }

  return this.headers;
};
