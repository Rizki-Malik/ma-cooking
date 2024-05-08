// 'use client';
import { AreaChart, Card, List, ListItem } from '@tremor/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const data = [
  { date: 'Jan 23', Enrollments: 232, Newcomers: 190 }, 
  { date: 'Feb 23', Enrollments: 241, Newcomers: 185 },
  { date: 'Mar 23', Enrollments: 285, Newcomers: 220 },
  { date: 'Apr 23', Enrollments: 240, Newcomers: 170 },
  { date: 'May 23', Enrollments: 255, Newcomers: 180 },
  { date: 'Jun 23', Enrollments: 248, Newcomers: 175 },
  { date: 'Jul 23', Enrollments: 290, Newcomers: 200 },
  { date: 'Aug 23', Enrollments: 270, Newcomers: 190 }, 
  { date: 'Sep 23', Enrollments: 265, Newcomers: 195 }, 
  { date: 'Oct 23', Enrollments: 280, Newcomers: 210 },
  { date: 'Nov 23', Enrollments: 350, Newcomers: 250 },
  { date: 'Dec 23', Enrollments: 360, Newcomers: 260 },
];

const summary = [
  {
    name: 'Enrollments',
    value: 3273,
  },
  {
    name: 'Newcomers',
    value: 2500,
  },
];

const valueFormatter = (number) =>
  `${Intl.NumberFormat('us').format(number).toString()}`;

const statusColor = {
  Enrollments: 'bg-blue-500',
  Newcomers: 'bg-violet-500',
};

export default function AdminAreaChart() {
  return (
    <>
      <Card className="sm:mx-auto sm:max-w-lg lg:m-0">
        <h3 className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Follower metrics
        </h3>
        <AreaChart
          data={data}
          index="date"
          categories={['Enrollments', 'Newcomers']}
          colors={['blue', 'violet']}
          valueFormatter={valueFormatter}
          showLegend={false}
          showYAxis={false}
          showGradient={false}
          startEndOnly={true}
          className="mt-6 h-80"
        />
        <List className="mt-2">
          {summary.map((item) => (
            <ListItem key={item.name}>
              <div className="flex items-center space-x-2">
                <span
                  className={classNames(statusColor[item.name], 'h-0.5 w-3')}
                  aria-hidden={true}
                />
                <span>{item.name}</span>
              </div>
              <span className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                {valueFormatter(item.value)}
              </span>
            </ListItem>
          ))}
        </List>
      </Card>
    </>
  );
}