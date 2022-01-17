export const truncate = (
  text: string,
  maxLength: number,
  suffix = '...'
): string => 
  text.length <= maxLength ? text : text.substring(0, maxLength) + suffix;