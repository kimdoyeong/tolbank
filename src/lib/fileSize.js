function fileSize(size) {
  const units = ["B", "KB", "MB", "GB", "TB"];
  let _size = size;
  let i = 0;

  while (_size >= 1000) {
    _size /= 1000;
    i++;
  }
  return _size.toFixed(2) + units[i < units.length ? i : units.length - 1];
}

export default fileSize;
