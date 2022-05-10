import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import {
  PieChart,
  Pie,
  Legend,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
]

const dataBarChart = [
  {
    name: 'Marco',
    New: 10,
    Done: 30,
  },
  {
    name: 'Barbara',
    New: 7,
    Done: 35,
  },
  {
    name: 'Adi',
    New: 15,
    Done: 23,
  },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

const renderLabel = function (entry) {
  return entry.name
}

const ChartsPage = () => {
  return (
    <>
      <MetaTags title="Charts" description="Charts page" />

      <h1>ChartsPage</h1>
      <PieChart width={500} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <Tooltip />
        </Pie>
      </PieChart>

      <BarChart
        width={500}
        height={300}
        data={dataBarChart}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="New" fill="#8884d8" />
        <Bar dataKey="Done" fill="#82ca9d" />
      </BarChart>
    </>
  )
}

export default ChartsPage
