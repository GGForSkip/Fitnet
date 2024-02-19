import React from "react";
import { Chart } from "react-google-charts";

export var data = [
  [
    {
      v: "Week",
      f: 'Week<div style="color:red; font-style:italic">7 days</div>',
    },
    "",
    "Complete Week",
  ],
  [
    {
      v: "MO",
      f: '<div style="color:red; font-style:italic">Monday</div>',
    },
    "Week",
    "MO",
  ],
  [
    {
      v: "TU",
      f: '<div style="color:red; font-style:italic">Tuesday</div>',
    },
    "Week",
    "TU",
  ],
  [
    {
      v: "WE",
      f: '<div style="color:red; font-style:italic">Wednesday</div>',
    },
    "Week",
    "WE",
  ],
  [
    {
      v: "TH",
      f: '<div style="color:red; font-style:italic">Thursday</div>',
    },
    "Week",
    "TH",
  ],
  [
    {
      v: "FR",
      f: '<div style="color:red; font-style:italic">Friday</div>',
    },
    "Week",
    "FR",
  ],
  [
    {
      v: "SA",
      f: '<div style="color:red; font-style:italic">Saturday</div>',
    },
    "Week",
    "SA",
  ],
  [
    {
      v: "SU",
      f: '<div style="color:red; font-style:italic">Sunday</div>',
    },
    "Week",
    "SU",
  ]
];

const exercises=[
    [
        {
            v: "Legs",
            f: '<div style="color:blue; font-style:italic">Legs</div>',
        },
        "MO",
        "Legs",
    ],
    [
        {
          v: "Abs",
          f: '<div style="color:blue; font-style:italic">Abs</div>',
        },
        "MO",
        "Abs",
    ],
    [
        {
            v: "Arms",
            f: '<div style="color:blue; font-style:italic">Arms</div>',
        },
        "TU",
        "Arms",
    ],
    [
        {
          v: "Chest",
          f: '<div style="color:blue; font-style:italic">Chest</div>',
        },
        "WE",
        "Chest",
    ],
    [
        {
          v: "Rest",
          f: '<div style="color:blue; font-style:italic">Rest</div>',
        },
        "TH",
        "Rest",
    ],
    [
        {
          v: "Back",
          f: '<div style="color:blue; font-style:italic">Back</div>',
        },
        "FR",
        "Back",
    ],
    [
        {
          v: "Shoulder",
          f: '<div style="color:blue; font-style:italic">Shoulder</div>',
        },
        "SA",
        "Shoulder",
    ],
    [
        {
          v: "Abs2",
          f: '<div style="color:blue; font-style:italic">Abs</div>',
        },
        "SA",
        "Abs2",
    ],
    [
        {
          v: "Cardio",
          f: '<div style="color:blue; font-style:italic">Cardio</div>',
        },
        "SU",
        "Cardio",
    ]
]

data=data.concat(exercises);

export const options = {
  allowHtml: true,
};

export function OrgChart() {
  return (
    <Chart
      chartType="OrgChart"
      data={data}
      options={options}
      width="100%"
      height="100%"
    />
  );
}


export default OrgChart;