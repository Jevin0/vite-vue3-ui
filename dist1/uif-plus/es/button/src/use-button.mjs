const useButton = (props, emit) => {
  const handleClick = (evt) => {
    emit("click", evt);
  };
  return {
    handleClick
  };
};

export { useButton };
//# sourceMappingURL=use-button.mjs.map
