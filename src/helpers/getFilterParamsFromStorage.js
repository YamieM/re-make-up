export const setItemsForSessionStorage = (event, key) => {
  sessionStorage.setItem(`${key}`, event.target.value);
};
