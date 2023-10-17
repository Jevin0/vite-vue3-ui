
export const useButton = (props, emit) => {
  const handleClick = (evt) => {
    emit('click', evt)
  }

  return {
    handleClick
  }
}