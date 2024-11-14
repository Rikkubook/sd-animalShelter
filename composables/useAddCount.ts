export const useAddCount = () => {
  const add = ref<number>(0)

  const addCount = () => {
    add.value++
  }

  return { add, addCount }
}
