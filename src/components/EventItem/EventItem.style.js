const styles = {
  truncate: {
      width: 500,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      cursor: 'pointer'
  },
  activeLink: {
      cursor: 'pointer',
      '&:hover': {
          background: "#f7faff",
      },
  }
}

export default styles