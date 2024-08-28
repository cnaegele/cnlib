export function bDateFutur(date) {
    const datenow = new Date()
    const date2test = new Date(date)
    return date2test > datenow
}

export function detectIdenticalObjects(arr) {
    const stringified = arr.map(obj => JSON.stringify(obj));
    const uniqueStringified = new Set(stringified);
    const duplicates = stringified.filter(item => {
      if (uniqueStringified.has(item)) {
        uniqueStringified.delete(item);
        return false;
      }
      return true;
    });
    
    return duplicates.map(JSON.parse);
}