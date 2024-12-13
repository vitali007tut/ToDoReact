import { Tabs } from "antd";
import { FilterKey } from "../../types";

type TypeFilter = {
  onFilter: (activeKey: FilterKey) => void;
}

export const TaskFilter = ({onFilter}: TypeFilter) => {

  return (
    <Tabs
    defaultActiveKey="all"
    type="card"
    size={'large'}
    style={{marginTop: 32}}
    onChange={(activeKey) => onFilter(activeKey as FilterKey)}
    items={['all', 'todo', 'completed'].map((item) => {
      return {
        label: item,
        key: item,
      };
    })}
  />
  )
}
