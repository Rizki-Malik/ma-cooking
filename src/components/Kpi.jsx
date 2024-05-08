// 'use client';
import { Card } from '@tremor/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const data = [
  {
    name: 'Enrollment Rate',
    stat: '85%',
    change: '+5%',
    changeType: 'positive',
  },
  {
    name: 'Course Completion Rate',
    stat: '70%',
    change: '+10%',
    changeType: 'positive',
  },
  {
    name: 'Student Satisfaction',
    stat: '4.5/5',
    change: '+0.2',
    changeType: 'positive',
  },
];

export default function Kpi() {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.name}>
            <p className="text-tremor-default font-medium text-tremor-content dark:text-dark-tremor-content">
              {item.name}
            </p>
            <div className="mt-2 flex items-baseline space-x-2.5">
              <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                {item.stat}
              </p>
              <span
                className={classNames(
                  item.changeType === 'positive'
                    ? 'text-emerald-700 dark:text-emerald-500'
                    : 'text-red-700 dark:text-red-500',
                  'text-tremor-default font-medium',
                )}
              >
                {item.change}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}