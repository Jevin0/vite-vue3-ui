import { computed } from 'vue'


export const useButtonClasses = ({size, type, shape, hover, active, outline, breadth, loading}) => {
  return computed(() => {
    return [
      'n-btn',
      `n-btn-${type}`,
      `n-btn-${size}`,
      `n-btn-${shape}`,
      {
        hover,
        active,
        outline,
        loading,
        [breadth]: breadth
      }
    ]
  })
  
}