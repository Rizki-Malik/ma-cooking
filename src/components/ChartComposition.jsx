// 'use client';
import {
    LineChart,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
  } from '@tremor/react';
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  
  const data = [
    {
      date: 'Aug 01',
      'Baking and Pastry': 210,
      'Culinary Arts': 350,
      'International Cuisine': 450,
    },
    {
      date: 'Aug 02',
      'Baking and Pastry': 250,
      'Culinary Arts': 380,
      'International Cuisine': 470,
    },
    {
      date: 'Aug 03',
      'Baking and Pastry': 290,
      'Culinary Arts': 410,
      'International Cuisine': 490,
    },
    {
      date: 'Aug 04',
      'Baking and Pastry': 320,
      'Culinary Arts': 440,
      'International Cuisine': 510,
    },
    {
      date: 'Aug 05',
      'Baking and Pastry': 350,
      'Culinary Arts': 470,
      'International Cuisine': 530,
    },
    {
      date: 'Aug 06',
      'Baking and Pastry': 380,
      'Culinary Arts': 500,
      'International Cuisine': 550,
    },
    {
      date: 'Aug 07',
      'Baking and Pastry': 400,
      'Culinary Arts': 530,
      'International Cuisine': 570,
    },
    {
      date: 'Aug 08',
      'Baking and Pastry': 430,
      'Culinary Arts': 560,
      'International Cuisine': 590,
    },
    {
      date: 'Aug 09',
      'Baking and Pastry': 460,
      'Culinary Arts': 590,
      'International Cuisine': 610,
    },
    {
      date: 'Aug 10',
      'Baking and Pastry': 490,
      'Culinary Arts': 620,
      'International Cuisine': 630,
    },
    {
      date: 'Aug 11',
      'Baking and Pastry': 520,
      'Culinary Arts': 650,
      'International Cuisine': 650,
    },
    {
      date: 'Aug 12',
      'Baking and Pastry': 550,
      'Culinary Arts': 680,
      'International Cuisine': 670,
    },
    {
      date: 'Aug 13',
      'Baking and Pastry': 580,
      'Culinary Arts': 710,
      'International Cuisine': 690,
    },
    {
      date: 'Aug 14',
      'Baking and Pastry': 610,
      'Culinary Arts': 740,
      'International Cuisine': 710,
    },
    {
      date: 'Aug 15',
      'Baking and Pastry': 640,
      'Culinary Arts': 770,
      'International Cuisine': 730,
    },
    {
      date: 'Aug 16',
      'Baking and Pastry': 670,
      'Culinary Arts': 800,
      'International Cuisine': 750,
    },
    {
      date: 'Aug 17',
      'Baking and Pastry': 700,
      'Culinary Arts': 830,
      'International Cuisine': 770,
    },
    {
      date: 'Aug 18',
      'Baking and Pastry': 730,
      'Culinary Arts': 860,
      'International Cuisine': 790,
    },
    {
      date: 'Aug 19',
      'Baking and Pastry': 760,
      'Culinary Arts': 890,
      'International Cuisine': 810,
    },
    {
      date: 'Aug 20',
      'Baking and Pastry': 790,
      'Culinary Arts': 920,
      'International Cuisine': 830,
    },
    {
      date: 'Aug 21',
      'Baking and Pastry': 820,
      'Culinary Arts': 950,
      'International Cuisine': 850,
    },
    {
      date: 'Aug 22',
      'Baking and Pastry': 850,
      'Culinary Arts': 980,
      'International Cuisine': 870,
    },
    {
      date: 'Aug 23',
      'Baking and Pastry': 880,
      'Culinary Arts': 1010,
      'International Cuisine': 890,
    },
    {
      date: 'Aug 24',
      'Baking and Pastry': 910,
      'Culinary Arts': 1040,
      'International Cuisine': 910,
    },
    {
      date: 'Aug 25',
      'Baking and Pastry': 940,
      'Culinary Arts': 1070,
      'International Cuisine': 930,
    },
    {
      date: 'Aug 26',
      'Baking and Pastry': 970,
      'Culinary Arts': 1100,
      'International Cuisine': 950,
    },
    {
      date: 'Aug 27',
      'Baking and Pastry': 1000,
      'Culinary Arts': 1130,
      'International Cuisine': 970,
    },
    {
      date: 'Aug 28',
      'Baking and Pastry': 1030,
      'Culinary Arts': 1160,
      'International Cuisine': 990,
    },
    {
      date: 'Aug 29',
      'Baking and Pastry': 1060,
      'Culinary Arts': 1190,
      'International Cuisine': 1010,
    },
    {
      date: 'Aug 30',
      'Baking and Pastry': 1090,
      'Culinary Arts': 1220,
      'International Cuisine': 1030,
    },
    {
      date: 'Aug 31',
      'Baking and Pastry': 1120,
      'Culinary Arts': 1250,
      'International Cuisine': 1050,
    },
    {
      date: 'Sep 01',
      'Baking and Pastry': 1150,
      'Culinary Arts': 1280,
      'International Cuisine': 1070,
    },
    {
      date: 'Sep 02',
      'Baking and Pastry': 1180,
      'Culinary Arts': 1310,
      'International Cuisine': 1090,
    },
    {
      date: 'Sep 03',
      'Baking and Pastry': 1210,
      'Culinary Arts': 1340,
      'International Cuisine': 1110,
    },
    {
      date: 'Sep 04',
      'Baking and Pastry': 1240,
      'Culinary Arts': 1370,
      'International Cuisine': 1130,
    },
    {
      date: 'Sep 05',
      'Baking and Pastry': 1270,
      'Culinary Arts': 1400,
      'International Cuisine': 1150,
    },
    {
      date: 'Sep 06',
      'Baking and Pastry': 1300,
      'Culinary Arts': 1430,
      'International Cuisine': 1170,
    },
    {
      date: 'Sep 07',
      'Baking and Pastry': 1330,
      'Culinary Arts': 1460,
      'International Cuisine': 1190,
    },
    {
      date: 'Sep 08',
      'Baking and Pastry': 1360,
      'Culinary Arts': 1490,
      'International Cuisine': 1210,
    },
    {
      date: 'Sep 09',
      'Baking and Pastry': 1390,
      'Culinary Arts': 1520,
      'International Cuisine': 1230,
    },
    {
      date: 'Sep 10',
      'Baking and Pastry': 1420,
      'Culinary Arts': 1550,
      'International Cuisine': 1250,
    },
    {
      date: 'Sep 11',
      'Baking and Pastry': 1450,
      'Culinary Arts': 1580,
      'International Cuisine': 1270,
    },
    {
      date: 'Sep 12',
      'Baking and Pastry': 1480,
      'Culinary Arts': 1610,
      'International Cuisine': 1290,
    },
    {
      date: 'Sep 13',
      'Baking and Pastry': 1510,
      'Culinary Arts': 1640,
      'International Cuisine': 1310,
    },
    {
      date: 'Sep 14',
      'Baking and Pastry': 1540,
      'Culinary Arts': 1670,
      'International Cuisine': 1330,
    },
    {
      date: 'Sep 15',
      'Baking and Pastry': 1570,
      'Culinary Arts': 1700,
      'International Cuisine': 1350,
    },
    {
      date: 'Sep 16',
      'Baking and Pastry': 1600,
      'Culinary Arts': 1730,
      'International Cuisine': 1370,
    },
    {
      date: 'Sep 17',
      'Baking and Pastry': 1630,
      'Culinary Arts': 1760,
      'International Cuisine': 1390,
    },
    {
      date: 'Sep 18',
      'Baking and Pastry': 1660,
      'Culinary Arts': 1790,
      'International Cuisine': 1410,
    },
    {
      date: 'Sep 19',
      'Baking and Pastry': 1690,
      'Culinary Arts': 1820,
      'International Cuisine': 1430,
    },
    {
      date: 'Sep 20',
      'Baking and Pastry': 1720,
      'Culinary Arts': 1850,
      'International Cuisine': 1450,
    },
    {
      date: 'Sep 21',
      'Baking and Pastry': 1750,
      'Culinary Arts': 1880,
      'International Cuisine': 1470,
    },
    {
      date: 'Sep 22',
      'Baking and Pastry': 1780,
      'Culinary Arts': 1910,
      'International Cuisine': 1490,
    },
    {
      date: 'Sep 23',
      'Baking and Pastry': 1810,
      'Culinary Arts': 1940,
      'International Cuisine': 1510,
    },
    {
      date: 'Sep 24',
      'Baking and Pastry': 1840,
      'Culinary Arts': 1970,
      'International Cuisine': 1530,
    },
    {
      date: 'Sep 25',
      'Baking and Pastry': 1870,
      'Culinary Arts': 2000,
      'International Cuisine': 1550,
    },
    {
      date: 'Sep 26',
      'Baking and Pastry': 1900,
      'Culinary Arts': 2030,
      'International Cuisine': 1570,
    },
  ];
  
  const summary = [
    {
        name: 'Baking and Pastry',
        value: '$84,900',
        enrolledStudents: 1800,
        completionRate: '80%',
        invested: '$19,698.65',
        cashflow: '$14,033.74',
        gain: '+$11,012.39',
        realized: '+$177.48',
        dividends: '+$490.97',
        bgColor: 'bg-blue-500',
        changeType: 'positive'
    },
    {
        name: 'Culinary Arts',
        value: '$93,900',
        enrolledStudents: 1900,
        completionRate: '85%',
        invested: '$19,698.65',
        cashflow: '$14,033.74',
        gain: '+$11,012.39',
        realized: '+$177.48',
        dividends: '+$490.97',
        bgColor: 'bg-blue-500',
        changeType: 'positive'
    },
    {
        name: 'International Cuisine',
        value: '$103,800',
        enrolledStudents: 2000,
        completionRate: '90%',
        invested: '$19,698.65',
        cashflow: '$14,033.74',
        gain: '+$11,012.39',
        realized: '+$177.48',
        dividends: '+$490.97',
        bgColor: 'bg-blue-500',
        changeType: 'positive'
    },
    {
        name: 'Vegetarian and Vegan Cooking',
        value: '$103,800',
        enrolledStudents: 2000,
        completionRate: '90%',
        invested: '$19,698.65',
        cashflow: '$14,033.74',
        gain: '+$11,012.39',
        realized: '+$177.48',
        dividends: '+$490.97',
        bgColor: 'bg-blue-500',
        changeType: 'positive'
    },
    {
        name: 'Health and Nutrition',
        value: '$103,800',
        enrolledStudents: 2000,
        completionRate: '90%',
        invested: '$19,698.65',
        cashflow: '$14,033.74',
        gain: '+$11,012.39',
        realized: '+$177.48',
        dividends: '+$490.97',
        bgColor: 'bg-blue-500',
        changeType: 'positive'
    },
    {
        name: 'Professional Chef Training',
        value: '$103,800',
        enrolledStudents: 2000,
        completionRate: '90%',
        invested: '$19,698.65',
        cashflow: '$14,033.74',
        gain: '+$11,012.39',
        realized: '+$177.48',
        dividends: '+$490.97',
        bgColor: 'bg-blue-500',
        changeType: 'positive'
    },
    {
        name: 'Specialty Cooking',
        value: '$103,800',
        enrolledStudents: 2000,
        completionRate: '90%',
        invested: '$19,698.65',
        cashflow: '$14,033.74',
        gain: '+$11,012.39',
        realized: '+$177.48',
        dividends: '+$490.97',
        bgColor: 'bg-blue-500',
        changeType: 'positive'
    },
  ];
  
  
  const valueFormatter = (number) =>
    `$${Intl.NumberFormat('us').format(number).toString()}`;
  
  export default function ChartComposition() {
    return (
      <>
        <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
          MA Cooking perfomance
        </h3>
        <p className="mt-1 text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
          $32,227.40
        </p>
        <p className="mt-1 text-tremor-default font-medium">
          <span className="text-emerald-700 dark:text-emerald-500">
            +$430.90 (4.1%)
          </span>{' '}
          <span className="font-normal text-tremor-content dark:text-dark-tremor-content">
            Past 24 hours
          </span>
        </p>
        <LineChart
          data={data}
          index="date"
          categories={[
            'Baking and Pastry',
            'Culinary Arts',
            'International Cuisine',
          ]}
          colors={['blue', 'violet', 'fuchsia']}
          valueFormatter={valueFormatter}
          yAxisWidth={55}
          onValueChange={() => {}}
          className="mt-6 hidden h-96 sm:block"
        />
        <LineChart
          data={data}
          index="date"
          categories={[
            'Baking and Pastry',
            'Culinary Arts',
            'International Cuisine',
          ]}
          colors={['blue', 'violet', 'fuchsia']}
          valueFormatter={valueFormatter}
          showYAxis={false}
          showLegend={false}
          startEndOnly={true}
          className="mt-6 h-72 sm:hidden"
        />
        <Table className="mt-8">
          <TableHead>
            <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
              <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Name
              </TableHeaderCell>
              <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Value
              </TableHeaderCell>
              <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Invested
              </TableHeaderCell>
              <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Cashflow
              </TableHeaderCell>
              <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Gain
              </TableHeaderCell>
              <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Realized
              </TableHeaderCell>
              <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Dividends
              </TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {summary.map((item) => (
              <TableRow key={item.name}>
                <TableCell className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  <div className="flex space-x-3">
                    <span
                      className={classNames(item.bgColor, 'w-1 shrink-0 rounded')}
                      aria-hidden={true}
                    />
                    <span>{item.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">{item.value}</TableCell>
                <TableCell className="text-right">{item.invested}</TableCell>
                <TableCell className="text-right">{item.cashflow}</TableCell>
                <TableCell className="text-right">
                  <span
                    className={classNames(
                      item.changeType === 'positive'
                        ? 'text-emerald-700 dark:text-emerald-500'
                        : 'text-red-700 dark:text-red-500',
                    )}
                  >
                    {item.gain}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <span
                    className={classNames(
                      item.changeType === 'positive'
                        ? 'text-emerald-700 dark:text-emerald-500'
                        : 'text-red-700 dark:text-red-500',
                    )}
                  >
                    {item.realized}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <span
                    className={classNames(
                      item.changeType === 'positive'
                        ? 'text-emerald-700 dark:text-emerald-500'
                        : 'text-red-700 dark:text-red-500',
                    )}
                  >
                    {item.dividends}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </>
    );
  }