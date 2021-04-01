const filterNewsContent = (content, len) => { // 新闻内容提取关键字
  const reg = /<\/?.+?\/?>/g
  const result = content.replace(reg, '')
  return result.substr(result, len)
}

export { filterNewsContent }
