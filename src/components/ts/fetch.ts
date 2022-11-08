import { ref } from "vue";

export const useFetch = async (
  url = "https://jsonplaceholder.typicode.com/todos?userId=1"
) => {
  const data = ref();
  const error = ref();
  try {
    data.value = await (await fetch(url)).json();
  } catch (err) {
    error.value = err;
  }
  return { data, error };
};
