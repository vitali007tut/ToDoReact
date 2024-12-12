import { Button, Input, Space, Typography } from "antd";
import { useState } from "react";

type TypeInput = {
  addTask: (value: string) => void;
};

export const TaskInput = ({ addTask }: TypeInput) => {
  const [value, setValue] = useState("");
  const [isError, setIsError] = useState(false);

  const handleAdd = () => {
    if (value) {
      addTask(value);
      setValue("");
    } else setIsError(true);
  };

  const changeTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setIsError(false);
  };

  return (
    <>
      <h3 className="adding__add-tittle">Add Item</h3>
      <Space.Compact style={{ width: "100%" }}>
        <Input
          placeholder="Type here..."
          autoFocus
          value={value}
          onChange={changeTextHandler}
        />
        <Button type="primary" onClick={handleAdd}>
          Add
        </Button>
      </Space.Compact>
      {isError && (
        <Typography.Text type="danger">Type task ...</Typography.Text>
      )}
    </>
  );
};
