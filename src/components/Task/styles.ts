export const container = {
  borderBottom: "1px solid #eee",
  marginBottom: "8px",
  padding: "5px",
};

export const group = {
  display: "flex",
  width: "100%",
  marginBottom: 5,
};

export const error = {
  marginLeft: 30,
}

export const text = (isCompleted: boolean) => {
  return {
    textDecoration: isCompleted ? "line-through" : "none",
    marginLeft: 20,
    marginRight: 8,
    flex: 1,
    display: "flex",
    alignItems: "center",
  };
};

export const input = { 
  marginLeft: 8, 
  marginRight: 8, 
  flex: 1 
}
