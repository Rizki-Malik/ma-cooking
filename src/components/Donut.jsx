import { Card, DonutChart, List, ListItem } from '@tremor/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const data = [
  {
    name: 'Baking and Pastry',
    amount: 500,
    color: 'bg-cyan-500',
  },
  {
    name: 'Culinary Arts',
    amount: 600,
    color: 'bg-blue-500',
  },
  {
    name: 'International Cuisine',
    amount: 700,
    color: 'bg-indigo-500',
  },
  {
    name: 'Vegetarian and Vegan Cooking',
    amount: 400,
    color: 'bg-violet-500',
  },
  {
    name: 'Health and Nutrition',
    amount: 150,
    color: 'bg-fuchsia-500',
  },
  {
    name: 'Professional Chef Training',
    amount: 800,
    color: 'bg-sky-500',
  },
  {
    name: 'Specialty Cooking',
    amount: 123,
    color: 'bg-rose-500',
  },
];

export default function Donut() {
  return (
    <>
        <h3 className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Total enrollment by category
        </h3>
        <DonutChart
          className="mt-8"
          data={data}
          category="amount"
          index="name"
          showTooltip={false}
          colors={['cyan', 'blue', 'indigo', 'violet', 'fuchsia', 'sky', 'rose']}
        />
        <p className="mt-8 flex items-center justify-between text-tremor-label text-tremor-content dark:text-dark-tremor-content">
          <span>Category</span>
          <span>Total Enrollment</span>
        </p>
        <List className="mt-2">
          {data.map((item) => (
            <ListItem key={item.name} className="space-x-6">
              <div className="flex items-center space-x-2.5 truncate">
                <span
                  className={classNames(
                    item.color,
                    'h-2.5 w-2.5 shrink-0 rounded-sm',
                  )}
                  aria-hidden={true}
                />
                <span className="truncate dark:text-dark-tremor-content-emphasis">
                  {item.name}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium tabular-nums text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  {item.amount}
                </span>
              </div>
            </ListItem>
          ))}
        </List>
    </>
  );
}
