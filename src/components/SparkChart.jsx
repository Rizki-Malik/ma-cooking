// 'use client';
import { Card, SparkAreaChart } from '@tremor/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const data = [
  {
    date: 'Nov 24, 2023',
    2022: 156.2,
    2024: 68.5,
    2023: 1050.6,
  },
  {
    date: 'Nov 25, 2023',
    2022: 152.5,
    2024: 69.3,
    2023: 945.8,
  },
  {
    date: 'Nov 26, 2023',
    2022: 148.7,
    2024: 69.8,
    2023: 839.4,
  },
  {
    date: 'Nov 27, 2023',
    2022: 155.3,
    2024: 73.5,
    2023: 830.2,
  },
  {
    date: 'Nov 28, 2023',
    2022: 160.1,
    2024: 75.2,
    2023: 845.7,
  },
  {
    date: 'Nov 29, 2023',
    2022: 175.6,
    2024: 89.2,
    2023: 950.2,
  },
  {
    date: 'Nov 30, 2023',
    2022: 180.2,
    2024: 92.7,
    2023: 995.9,
  },
  {
    date: 'Dec 01, 2023',
    2022: 185.5,
    2024: 95.3,
    2023: 1060.4,
  },
  {
    date: 'Dec 02, 2023',
    2022: 182.3,
    2024: 93.8,
    2023: 965.8,
  },
  {
    date: 'Dec 03, 2023',
    2022: 180.7,
    2024: 91.6,
    2023: 970.3,
  },
  {
    date: 'Dec 04, 2023',
    2022: 178.5,
    2024: 89.7,
    2023: 975.9,
  },
  {
    date: 'Dec 05, 2023',
    2022: 176.2,
    2024: 87.5,
    2023: 964.6,
  },
  {
    date: 'Dec 06, 2023',
    2022: 174.8,
    2024: 85.3,
    2023: 960.4,
  },
  {
    date: 'Dec 07, 2023',
    2022: 178.0,
    2024: 88.2,
    2023: 955.3,
  },
  {
    date: 'Dec 08, 2023',
    2022: 180.6,
    2024: 90.5,
    2023: 950.3,
  },
  {
    date: 'Dec 09, 2023',
    2022: 182.4,
    2024: 92.8,
    2023: 845.4,
  },
  {
    date: 'Dec 10, 2023',
    2022: 179.7,
    2024: 90.2,
    2023: 1011.6,
  },
  {
    date: 'Dec 11, 2023',
    2022: 154.2,
    2024: 88.7,
    2023: 1017.9,
  },
  {
    date: 'Dec 12, 2023',
    2022: 151.9,
    2024: 86.5,
    2023: 940.3,
  },
  {
    date: 'Dec 13, 2023',
    2022: 149.3,
    2024: 83.7,
    2023: 900.8,
  },
  {
    date: 'Dec 14, 2023',
    2022: 148.8,
    2024: 81.4,
    2023: 780.4,
  },
  {
    date: 'Dec 15, 2023',
    2022: 145.5,
    2024: 79.8,
    2023: 765.1,
  },
  {
    date: 'Dec 16, 2023',
    2022: 140.2,
    2024: 84.5,
    2023: 745.9,
  },
  {
    date: 'Dec 17, 2023',
    2022: 143.8,
    2024: 82.1,
    2023: 741.8,
  },
  {
    date: 'Dec 18, 2023',
    2022: 157.5,
    2024: 86.9,
    2023: 739.8,
  },
];

const summary = [
  {
    ticker: '2024',
    description: 'Baking and Pastry',
    value: '$86.9',
    change: '+0.92%',
    changeType: 'positive',
  },
  {
    ticker: '2023',
    description: 'Culinary Arts',
    value: '$739.8',
    change: '-2.12%',
    changeType: 'negative',
  },
  {
    ticker: '2022',
    description: 'International Cuisine',
    value: '$157.5',
    change: '+0.38%',
    changeType: 'positive',
  }
];

export default function SparkChart() {
  return (
    <>
      <div className="space-y-6 sm:mx-auto sm:max-w-md">
        {summary.map((stock) => (
          <Card
            key={stock.ticker}
            className="flex items-center justify-between space-x-4 p-4"
          >
            <div className="truncate">
              <p className="truncate text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                {stock.ticker}
              </p>
              <p className="truncate text-tremor-label text-tremor-content dark:text-dark-tremor-content">
                {stock.description}
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <SparkAreaChart
                data={data}
                index="date"
                categories={[stock.ticker]}
                showGradient={true}
                colors={stock.changeType === 'positive' ? ['emerald'] : ['red']}
                className="h-8 w-24 flex-none sm:w-28"
              />
              <div
                className={classNames(
                  stock.changeType === 'positive'
                    ? 'text-emerald-700 dark:text-emerald-500'
                    : 'text-red-700 dark:text-red-500',
                  'flex w-28 items-center justify-end space-x-2 sm:w-32',
                )}
              >
                <span className="text-tremor-default font-medium">
                  {stock.value}
                </span>
                <span
                  className={classNames(
                    stock.changeType === 'positive'
                      ? 'bg-emerald-100 dark:bg-emerald-400/10'
                      : 'bg-red-100 dark:bg-red-400/10',
                    'rounded px-1.5 py-1 text-tremor-label font-medium tabular-nums',
                  )}
                >
                  {stock.change}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}