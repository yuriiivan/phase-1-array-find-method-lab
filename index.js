const superbowlWin = (record) => {
  const winRecord = record.find(item => item.result === 'W')
  return winRecord === undefined ? undefined : winRecord.year
}
