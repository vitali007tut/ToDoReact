import { Tabs } from "antd";

export type FilterKey = 'all' | 'todo' | 'completed';

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
