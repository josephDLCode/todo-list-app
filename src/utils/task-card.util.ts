export function getTaskPoints(pointEstimate: PointEstimate) {
  const points = {
    EIGHT: 8,
    FOUR: 4,
    ONE: 1,
    TWO: 2,
    ZERO: 0
  }

  return points[pointEstimate]
}

export function getBadgeTypeByTag(tag: TaskTag) {
  const badgeTypes = {
    ANDROID: 'yellow',
    IOS: 'green',
    NODE_JS: 'general',
    RAILS: 'red',
    REACT: 'blue'
  }

  return (badgeTypes[tag] || 'general') as BadgeProps['$type']
}
