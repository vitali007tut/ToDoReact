import React, { useState } from "react";
import { Button, Checkbox, Input, Typography } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import * as sx from "./styles";
import { getTasks, setItems } from "../../utils/lsServise";
import { TypeTask } from "../../types";

export const Task = ({
  id,
  title,
  completed,
  onDelete,
  onComplete,
}: TypeTask) => {
  const [isCompleted, setIsCompleted] = useState(completed);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(title);
  const [isError, setIsError] = useState(false);

  const handleCheckboxChange = () => {
    setIsCompleted(!isCompleted);
    onComplete(id);
  };
  const handleEditClick = () => setIsEditing(true);
  const handleSaveClick = () => {
    if (editedText) {
      const tasks = getTasks()
      const updetedTasks = tasks.map(task => task.id === id ? {...task, title: editedText} : task)
      setItems(updetedTasks)
      setIsEditing(false);
    } else setIsError(true);
  };

  const changeTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedText(e.target.value);
    setIsError(false);
  };

  return (
    <div style={sx.container}>
      <div style={sx.group}>
        <Checkbox checked={isCompleted} onChange={handleCheckboxChange} />

        {isEditing && (
          <>
            <Input
              style={sx.input}
              placeholder="Type..."
              value={editedText}
              onChange={changeTextHandler}
            />
            <Button onClick={handleSaveClick}>Save</Button>
          </>
        )}

        {!isEditing && (
          <>
            <Typography style={sx.text(isCompleted)}>{editedText}</Typography>
            <Button onClick={handleEditClick}>Edit</Button>
          </>
        )}
        <Button
          icon={<DeleteOutlined />}
          style={{ marginLeft: 8 }}
          type="primary"
          onClick={() => onDelete(id)}
        />
      </div>
      {isError && (
        <Typography.Text style={sx.error} type="danger" >Fill task first...</Typography.Text>
      )}
    </div>
  );
};
