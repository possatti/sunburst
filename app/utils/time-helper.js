
function UnixTime2Date(unix_timestamp) {
  return new Date(unix_timestamp * 1000);
}

module.exports = UnixTime2Date;
